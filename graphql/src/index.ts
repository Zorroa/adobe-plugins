import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schema.graphql'
import allResolvers from './resolvers'
import fs from 'fs'
import config from '../config/config'
import cors from 'cors'

process.env.USER_AUTH_FILE = __dirname + "/../config/userauth.json"

// read creds file when available
if (fs.existsSync(process.env.USER_AUTH_FILE)) {
    const { projectId, zapiKey, zapiServer } = JSON.parse(fs.readFileSync(process.env.USER_AUTH_FILE, 'utf8'))
    config.zapiKey = zapiKey
    config.zapiServer = zapiServer
    config.projectId = projectId

}

function run() {
    const publicFolder = __dirname + "/../public/"

    process.env.PUBLIC_FOLDER = publicFolder
    // create public folder at root
    if (!fs.existsSync(publicFolder)) {
        fs.mkdirSync(publicFolder);
    }

    const app = express()

    const resolvers = {
        Query: {
            ...allResolvers
        }
    }

    const server = new ApolloServer({ typeDefs, resolvers })

    app.use("*", cors())
    app.use('/graphql', (req, res, next) => {
        next()
    })
    server.applyMiddleware({ app, path: '/graphql' })

    app.use(express.static(publicFolder));

    app.listen({ port: config.port }, (): void => {
        console.log(`${config.domain}:${config.port}/graphql`)
    })
}

export default run