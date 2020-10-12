import express from 'express'
import {routes} from './routes'
import cors from 'cors'

const app = express()

const port = 3030 || process.env.PORT;
app.use(cors())
routes(app)

app.listen(port, ()=>{console.log("running on "+port)})
