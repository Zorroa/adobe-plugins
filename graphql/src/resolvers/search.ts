import zassets from '../zapi/assets'
import zfile from '../zapi/file'
import {find, propEq } from 'ramda'
import {genToken} from '../zapi/index'


export const downloadThumbnail = async (req:any)=>{
    const filePath = await zfile.download(req)
    return filePath
}

export const getTumbnail = (response:any, req:any)=>{
    response = response.map(async(asset:any)=>{

        const {files} = asset

        // use web-proxy image
        const proxyFile:any = find(propEq("name","web-proxy.jpg"))(files)

        // req.params.id = proxyFile.id

        const filepath = await downloadThumbnail(req)

        const id = files[0].id.split("/")[1]

        return {
            id,
            files,
            thumbnail: filepath,
            proxy: "proxy"
        }
    })
    return response
}

export const search = async(_:any, args:any)=>{
    const {term, type, getThumbnail} = args.input

    const zmlpHeader = genToken()

    let response;

    const req = {zmlpHeader, params: {term, type}}

    if (term && type){
        response = await zassets.getTypeTerm(req)
    }else if(term){
        response = await zassets.getTerm(req)
    }

    if (getThumbnail)
        response = await getTumbnail(response, req)

    return {
        assets: [...response]
    }
}