import axios from 'axios'
import config from '../../config/config'
import { pluck } from 'ramda'
const API_SERVER = config.zapiServer

// elastic search similarity query
export function similarityQuery(hash:string):object{
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
                "hashes":  [hash]
                }
            },
            "boost": 1.0,
            "min_score": 0.75
        }
    }
}

// get next page
export async function scroll(scrollId:string, headers:any){
    const response = await axios.post(API_SERVER+"/api/v3/assets/_search/scroll", {
        "scroll": "1m",
        "scroll_id": scrollId
    }, {headers})
    return response
}

// delete scroll id
export async function deleteScrollId(scrollId:string, headers:object){
    const response = await axios.request({
        method: "delete",
        url: API_SERVER+"/api/v3/assets/_search/scroll",
        data: {"scroll_id": scrollId},
        headers
    })
    return response.data
}

export function getResponse (response:any) {
    const hits: [] = response.data.hits.hits

    const assets = pluck("_source", hits)
    const scrollId = response.data._scroll_id

    return {assets, scrollId}
}