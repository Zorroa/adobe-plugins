import zfile from '../zapi/file'
import {genToken} from '../zapi/index'

export const file = async(_:any, args:any)=>{
    const {id} = args.input

    let zmlpHeader = genToken()
    let req = {zmlpHeader, params: {id}}
    let filePath = await zfile.download(req)

    return {filePath}
}