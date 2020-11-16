import fs from 'fs'
import zfile from '../zapi/file'
import {genToken} from '../zapi/index'

export const file = async(_:any, args:any)=>{
    const {id} = args.input

    const zmlpHeader = genToken()
    const req = {zmlpHeader, params: {id}}

    const filePath = await zfile.download(req)

    return {filePath}
}

export const clearCache = async(_:any, args: any)=>{
    const deletedFiles:any = []
    let deletedAuth: boolean = false

    const fileList = fs.readdirSync(process.env.PUBLIC_FOLDER)

    // remove files
    fileList.forEach(file=>{
        deletedFiles.push(file)
        fs.unlinkSync(`${process.env.PUBLIC_FOLDER}/${file}`)
    })

    // remove auth key
    if (fs.existsSync(process.env.USER_AUTH_FILE)){

        const authFile = process.env.USER_AUTH_FILE.split("/").pop()

        deletedFiles.push(authFile)

        fs.unlinkSync(process.env.USER_AUTH_FILE)

        deletedAuth = true
    }

    return {total: deletedFiles.length, deletedFiles, authFile: deletedAuth}
}