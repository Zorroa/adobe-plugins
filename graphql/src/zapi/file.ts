import fs from 'fs'
import fetch from 'node-fetch'
import config from '../../config/config'
import { genToken } from './index'

const API_SERVER = config.zapiServer
const DOMAIN = `${config.domain}:${config.port}/`
export default {
    /** Downloads a file from ZMLP.
     *  Note: download seems to work best with Fetch
     * @param  {string} id File ID
     */
    download: async (id: string) => {
        const headers = genToken()
        const res = await new Promise(async (resolve, reject) => {


            const url = API_SERVER + "/api/v3/files/_stream/"

            const paths = id.split('/')

            const filename = paths[1] + "-" + paths[paths.length - 1]

            const filePath = process.env.PUBLIC_FOLDER + filename

            if (fs.existsSync(filePath)) {
                // return cached file
                resolve(DOMAIN + filename)

            } else {

                const stream = fs.createWriteStream(filePath)

                // data stream seems to work better with fetch
                const response = await fetch(url + id, { headers })
                response.body.on('end', () => resolve(DOMAIN + filename))
                response.body.on('error', () => reject())
                response.body.pipe(stream)
            }
        })
        return res
    }
}