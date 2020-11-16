import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Query {
        search(input: SearchQuery): AssetsWithMeta
        simSearch(input: SimQuery): AssetsWithMeta
        file(input: DownloadQuery): FilePath
        download(input: DownloadQuery): FilePath
        authorize(input: Credentials!): Status
        userAuthorization: CredentialsMeta
        clearCache: DeletedFiles
        uploads: [File]
    }

    input Credentials{
        projectId: String!
        zapiServer: String!
        zapiKey:  String!
    }

    input DownloadQuery{
        id:  String!
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

    type CredentialsMeta{
        projectId: String
        zapiServer: String
    }

    type DeletedFiles{
        total: String
        deletedFiles: [String]
        authFile: Boolean
    }

    type Status{
        status: String!
    }

    type File {
        filename: String!
        mimetype: String!
        encoding: String!
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