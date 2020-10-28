import fs from 'fs'
import config from '../../config/config'

export const authorize = async (_:any, args:any)=>{
    const { zapiKey, zapiServer, projectId } = args.input;

    const key = JSON.parse(decodeURIComponent(zapiKey))

    config.zapiKey = key
    config.projectId = projectId
    config.zapiServer = zapiServer

    // cache file
    // fs.writeFileSync(process.env.USER_AUTH_FILE, JSON.stringify(config))
    fs.writeFile(process.env.USER_AUTH_FILE, JSON.stringify(config), (err)=>{
        if(err) {
            return {status: err}
        }else{
            return {status: "ok"}
        }
    })
}

export const userAuthorization = async(_:any, args:any)=>{

    if(fs.existsSync(process.env.USER_AUTH_FILE)){
        const {zapiServer, projectId} = JSON.parse(fs.readFileSync(process.env.USER_AUTH_FILE, "utf8"))

        return {zapiServer, projectId}

    }else{
        const zapiServer = ""
        const projectId = ""
        return {zapiServer, projectId}
    }

}