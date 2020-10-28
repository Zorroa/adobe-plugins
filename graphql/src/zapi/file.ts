import fs from 'fs'
import fetch from 'node-fetch'
import config from '../../config/config'

const API_SERVER = config.zapiServer
const DOMAIN = `${config.domain}:${config.port}/`
export default {
    download: (req:any) => {
        return new Promise(async (resolve, reject)=>{
            const url = API_SERVER+"/api/v3/files/_stream/"
            const fileId = req.params.id
            const paths = fileId.split('/')

            const filename = paths[1]+"-"+paths[paths.length-1]

            const filePath = process.env.PUBLIC_FOLDER+filename
            console.log(filePath)
            if (fs.existsSync(filePath)){
                // return cached file
                console.log(`returning cached file: ${filename}`)
                resolve(DOMAIN+filename)

            }else{
                console.log(`ZMLP API request: ${url}${fileId}`)
                console.log(`ZMLP API request: ${url}${fileId}`)

                const stream = fs.createWriteStream(filePath)

                const response = await fetch(url+fileId, {headers: req.zmlpHeader})
                response.body.on('end', ()=> resolve(DOMAIN+filename))
                response.body.on('error', ()=> reject())
                response.body.pipe(stream)
            }

        })

    }
}