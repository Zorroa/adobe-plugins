import zassets from '../zapi/assets'
import zfile from '../zapi/file'
import {find, propEq } from 'ramda'
import {genToken} from '../zapi/index'
import {reject, isNil} from 'ramda'

export const downloadThumbnail = (req:any)=>{
    const filePath = zfile.download(req)
    return filePath
}

export const getTumbnail = (response: any, req: any) => {

    response = response.map((asset:any)=>{

        const { files } = asset

        if (files == undefined) {
            return null
        }

        // use web-proxy image
        const proxyFile:any = find(propEq("name","web-proxy.jpg"))(files)

        req.params.id = proxyFile.id

        const filepath = downloadThumbnail(req)

        const id = files[0].id.split("/")[1]

        return {
            id,
            files,
            thumbnail: filepath,
            proxy: "proxy"
        }
    })
    response = reject(isNil, response)

    return response
}

export const search = async(_:any, args:any)=>{
    const {term, type, getThumbnail} = args.input

    const zmlpHeader = genToken()

    let response:any;

    const req = {zmlpHeader, params: {term, type}}

    if (term && type){
        response = await zassets.getTypeTerm(req)
    } else if (term) {
        response = await zassets.getTerm(req)
    }

    if (getThumbnail){
        response.assets = getTumbnail(response.assets, req)
    }

    const { assets, scrollId } = response
    
    return {assets, scrollId}
}