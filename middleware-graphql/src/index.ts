import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schema.graphql'
import { search } from './resolvers/search'
import cors from 'cors'

const app = express()

const resolvers = {
    Query: {
        search
    }
}

const server = new ApolloServer({typeDefs, resolvers})

app.use("*", cors())
server.applyMiddleware({app, path:'/graphql'})

app.listen({port: 3030}, ():void=>{console.log('http://localhost:3030/graphql')})