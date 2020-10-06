import fs from 'fs'
import axios from 'axios'


export default {
    download: async(req:any, res:any, next:any) => {
        let url = "https://dev.api.zvi.zorroa.com/api/v3/files/_stream/"
        let fileId = req.params.id

        let response = await axios.get(url+fileId, {headers: req.zmlpHeader, responseType: 'stream'})

        let paths = fileId.split('/')

        let filePath = "./public/"+paths[1]+"-"+paths[paths.length-1]

        response.data
        .pipe(fs.createWriteStream(filePath))
        .on('finish', ()=> console.log('file created'))
        .on('error', () => console.log('file rejected'))

        res.json({filePath: filePath})
    }
}