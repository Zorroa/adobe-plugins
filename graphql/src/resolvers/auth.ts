import fs from 'fs'
import config from '../../config/config'
import { contains } from 'ramda'

export class InvalidApiKeyError extends Error { }

/**
 * Accepts ZMLP APIKey and saves it locally
 * @param  {any} _ parent
 * @param  {object} args GraphQL arguments
 */
export const authorize = (_: any, args: any) => {
    const { zapiKey, zapiServer, projectId } = args.input;
    try {
        const key = JSON.parse(decodeURIComponent(zapiKey))

        const keys = Object.keys(key)

        if (!contains('accessKey', keys) || !contains('secretKey', keys)) {
            throw new InvalidApiKeyError("Invalid API Key")
        }

        config.zapiKey = key
        config.projectId = projectId
        config.zapiServer = zapiServer

        // cache file
        fs.writeFileSync(process.env.USER_AUTH_FILE, JSON.stringify(config))
        return { status: "ok" }
    } catch (err) {
        return { status: err }
    }
}
/**
 * @param  {any} _ parent
 * @param  {object} args - GraphQL arguments
 */
export const userAuthorization = async (_: any, args: any) => {

    if (fs.existsSync(process.env.USER_AUTH_FILE)) {

        const { zapiServer, projectId } = JSON.parse(fs.readFileSync(process.env.USER_AUTH_FILE, "utf8"))

        return { zapiServer, projectId }

    } else {
        const zapiServer = ""
        const projectId = ""
        return { zapiServer, projectId }
    }

}