import config from 'config'
import jwt from 'jsonwebtoken'
import AssetsController from './controllers/assets'
import FileController from './controllers/file'

// exported for testing
export function genToken(req:any, res:any, next:any){
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
    const header = {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+token
    }

    req.zmlpHeader = header
    next()
}

export function routes(app:any){
    app.get('/api/v3/assets/_search', genToken, AssetsController.get)
    app.get('/api/v3/assets/_search/:term', genToken, AssetsController.getTerm)
    app.get('/api/v3/assets/_search/:type/:term', genToken, AssetsController.getTypeTerm)
    app.get('/api/v3/assets/_search/sim/:hash', genToken, AssetsController.similaritySearch)
    app.get('/api/v3/files/_stream/:id', genToken, FileController.download)
}

