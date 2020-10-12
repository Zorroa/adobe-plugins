import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Query {
        search(input: SearchQuery): AssetsWithMeta
        simSearch(input: SimQuery): AssetsWithMeta
        file(input: SimQuery): FilePath
    }

    input SimQuery {
        similarity: String!
        getThumbnail: Boolean
    }

    input SearchQuery {
        term: String
        type: String
        getThumbnail: Boolean
    }

    type FilePath {
        filePath: String!
    }

    type AssetsWithMeta {
        assets: [Asset]
    }

    type Asset {
        id: String!
        thumbnail: String
        proxy: String
        files: [Files]
    }

    type Files {
        category: String
        id: String!
        mimetype: String
        size: Int
    }

    schema {
        query: Query
    }
`