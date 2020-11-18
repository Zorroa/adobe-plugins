import fs from 'fs'
import zfile from '../zapi/file'

/**
 * Downloads a file
 * @param  {any} _
 * @param  {object} args Graphql arguments
 * @returns {object} file path
 */
export const file = async (_: any, args: any) => {
    const { id } = args.input

    const filePath = await zfile.download(id)

    return { filePath }
}
/**
 * Clears all downloaded files including apikey
 * @param  {any} _
 * @param  {object} args Graphql input
 * @returns {object} total files deleted, list of deleted files, and authFile boolean
 */
export const clearCache = async (_: any, args: any) => {
    const deletedFiles: any = []
    let deletedAuth: boolean = false

    const fileList = fs.readdirSync(process.env.PUBLIC_FOLDER)

    // remove files
    fileList.forEach(file => {
        deletedFiles.push(file)
        fs.unlinkSync(`${process.env.PUBLIC_FOLDER}/${file}`)
    })

    // remove auth key
    if (fs.existsSync(process.env.USER_AUTH_FILE)) {

        const authFile = process.env.USER_AUTH_FILE.split("/").pop()

        deletedFiles.push(authFile)

        fs.unlinkSync(process.env.USER_AUTH_FILE)

        deletedAuth = true
    }

    return { total: deletedFiles.length, deletedFiles, authFile: deletedAuth }
}