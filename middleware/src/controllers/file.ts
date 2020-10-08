import fs from 'fs'
import axios from 'axios'
import config from 'config'

const API_SERVER = config.get("server")

export default {
    download: async(req:any, res:any, next:any) => {
        const url = API_SERVER+"/api/v3/files/_stream/"
        const fileId = req.params.id

        const response = await axios.get(url+fileId, {headers: req.zmlpHeader, responseType: 'stream'})

        const paths = fileId.split('/')

        const filePath = "./public/"+paths[1]+"-"+paths[paths.length-1]

        response.data
        .pipe(fs.createWriteStream(filePath))

        res.json({filePath})
    }
}