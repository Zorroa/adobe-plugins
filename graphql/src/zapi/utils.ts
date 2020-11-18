import axios from 'axios'
import config from '../../config/config'
import { pluck } from 'ramda'
import request from './request'
import queries from './queries'

const API_SERVER = config.zapiServer

// elastic search similarity query
/**
 * @deprecated
 * @param  {string} hash Similarity hash
 * @returns object
 */
export function similarityQuery(hash: string): object {
    return {
        "script_score": {
            "query": {
                "match_all": {}
            },
            "script": {
                "source": "similarity",
                "lang": "zorroa-similarity",
                "params": {
                    "minScore": 0.75,
                    "field": "analysis.zvi-image-similarity.simhash",
                    "hashes": [hash]
                }
            },
            "boost": 1.0,
            "min_score": 0.75
        }
    }
}

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
 * Plucks all assets and scrollId
 * @param  {object} response ZAPI response object
 * @returns {[object]} assets
 * @returns {string} scrollId
 */
export function getResponse(response: any) {
    const hits: [] = response.data.hits.hits

    const assets = pluck("_source", hits)
    const scrollId = response.data._scroll_id

    return { assets, scrollId }
}