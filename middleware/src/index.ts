import express from 'express';
import routes from './routes'
const app = express()

const port = 3030 || process.env.PORT;

routes(app)

app.listen(port, ()=>{
    console.log("server started on 3030")
})