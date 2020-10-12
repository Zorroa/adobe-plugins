import config from 'config'
import jwt from 'jsonwebtoken'

export function genToken(){
    const API_SERVER:string = config.get("server")
    const PROJECT_ID:string = config.get("projectId")
    const API_KEY:any = config.get("apiKey")
    const claims = {
        'aud': API_SERVER,
        'exp': Math.floor(Date.now() / 1000) + (60 * 5), // expires in 5mins
        'accessKey': API_KEY.accessKey,
        'projectId': PROJECT_ID
    }
    const token = jwt.sign(claims, API_KEY.secretKey, {algorithm: 'HS512'})
    const zmlpHeader = {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+token
    }

    return zmlpHeader
}