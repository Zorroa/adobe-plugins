import zfile from '../zapi/file'
import {genToken} from '../zapi/index'

export const file = async(_:any, args:any)=>{
    const {id} = args.input

    const zmlpHeader = genToken()
    const req = {zmlpHeader, params: {id}}

    const filePath = await zfile.download(req)

    return {filePath}
}
