import jwt from 'jsonwebtoken'
import { allowedNodeEnvironmentFlags } from 'process'
import AssetsController from './controllers/assets'
import FileController from './controllers/file'

const genToken = function(req:any, res:any, next:any){
    const API_SERVER = "https://api.zvi.zorroa.com"
    const PROJECT_ID = "ADD PROJECT ID"
    const API_KEY = "ADD PROJECT KEY"
    
    let claims = {
        'aud': API_SERVER,
        'exp': Math.floor(Date.now() / 1000) + (60 * 60), //expires in 55mins
        'accessKey': API_KEY["accessKey"],
        'projectId': PROJECT_ID
    }
    let token = jwt.sign(claims, API_KEY["secretKey"], {algorithm: 'HS512'})
    let header = {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+token
    }

    req.zmlpHeader = header
    next()
}

export default (app:any) => {
    app.get('/api/v3/assets/_search', genToken, AssetsController.get)
    app.get('/api/v3/assets/_search/:term', genToken, AssetsController.getTerm)
    app.get('/api/v3/files/_stream/:id', genToken, FileController.download)
}