import { pluck } from 'ramda'
import request from './request'
import queries from './queries'


// get next page
/** Gets more assets from the scrollId
 * @param  {string} scrollId
 * @param  {any} headers
 * @returns {object} Response data
 */
export async function scroll(scrollId: string) {
    const url = "/api/v3/assets/_search/scroll"
    const query = queries.scroll(scrollId)

    return request.post(url, query)
}

// delete scroll id
/** Deletes the scrollId on the server
 * @param  {string} scrollId
 * @param  {object} headers
 * @returns {object} Response data
 */
export async function deleteScrollId(scrollId: string) {
    const url = "/api/v3/assets/_search/scroll"
    const data = { "scroll_id": scrollId }

    const response: any = await request.delete(url, data)

    return response.data
}

/**
 * Converts ZMLP namespace key to graphql friendly key type
 */
const analysisMap = {
    'gcp-video-text-detection': "gcpVideoTextDetection",
    'gcp-video-logo-detection': "gcpVideoLogoDetection",
    'gcp-video-label-detection': "gcpVisionLabelDetection",
    'gcp-video-object-detection':"gcpVideoObjectDetection",
    'gcp-vision-doc-text-detection':"gcpVisionDocTextDetection",
    'gcp-vision-image-text-detection':"gcpVisionImageTextDetection",
    'gcp-speech-to-text':"gcpSpeechToText",
    'zvi-label-detection':"zviLabelDetection",
    'zvi-image-similarity':"zviImageSimilarity"
}

/**
 * Plucks all assets and scrollId
 * @param  {object} response ZAPI response object
 * @returns {[object]} assets
 * @returns {object} scrollId, assets, total, count
 */
export function getResponse(response: any) {
    const hits: [] = response.data.hits.hits
    const total: number = response.data.hits.total.value
    const count: number = response.data.hits.hits.length
    const scrollId = response.data._scroll_id

    let assets = hits.map((asset: any) => {
        asset._source.id = asset._id

        const analysis = {}
        for (const [key, value] of Object.entries(asset._source.analysis)){
            analysis[analysisMap[key]] = value
        }

        asset._source.analysis = analysis

        return asset
    })

    assets = pluck("_source", hits)


    return { assets, scrollId, total, count }
}

