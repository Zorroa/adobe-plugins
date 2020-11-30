import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Query {
        scroll(input: ScrollQuery): AssetsWithMeta
        search(input: SearchQuery): AssetsWithMeta
        simSearch(input: SimQuery): AssetsWithMeta
        fileSim(input: FileSimQuery): AssetsWithMeta
        file(input: DownloadQuery): FilePath
        download(input: DownloadQuery): FilePath
        authorize(input: Credentials!): Status
        userAuthorization: CredentialsMeta
        clearCache: DeletedFiles
        
    }

    input FileSimQuery{
        base64Image: String!
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

    input ScrollQuery {
        scrollId: String
        getThumbnail: Boolean
    }

    input SearchQuery {
        term: String
        type: String
        scrollId: String
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

    type FilePath {
        filePath: String!
    }

    type AssetsWithMeta {
        assets: [Asset]
        scrollId: ID
        total: Int
        count: Int
    }

    type Asset {
        id: ID
        thumbnail: String
        files: [File]
        system: System
        source: Source
        metrics: Metrics
        media: Media
        analysis: Analysis
    }

    type Prediction {
        score: Int
        label: String
    }

    type PredictionsGroup {
        count: Int
        type: String
        predictions: [Prediction]
    }

    type TextDetection {
        words: Int
        type: String
        content: String
    }

    type Simlarity {
        type: String
        simhash: String
    }

    type Analysis {
        gcpVisionLabelDetection: PredictionsGroup
        gcpVisionDocTextDetection: TextDetection
        gcpVisionImageTextDetection: TextDetection
        zviLabelDetection: PredictionsGroup
        zviImageSimilarity: Simlarity
    }

    type Media {
        orientation: String
        pageNumber: Int
        length: Float
        aspect: Float
        timeCreated: String
        width: Float
        type: String
        pageStack: String
        content: String
        height: Float
    }

    type Metrics{
        pipelines: [Pipeline]
    }

    type Pipeline {
        executionTime: Float
        module: String
        executionDate: String
        processor: String
    }

    type Source {
        path: String
        filesize: Int
        extension: String
        filename: String
        mimetype: String
    }

    type System {
        jobId: String
        dataSourceId: String
        timeCreated: String
        state: String
        projectId: String
        timeModified: String
        taskId: String
    }

    type File {
        filename: String
        encoding: String
        category: String
        id: String!
        mimetype: String
        size: Int
        name: String
        attrs: Attrs
    }

    type Attrs{
        width: Int
        height: Int
    }

    schema {
        query: Query
    }
`