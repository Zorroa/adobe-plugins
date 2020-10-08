import axios from 'axios'
import config from 'config'

const API_SERVER = config.get("server")

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

// get all assets from request
export async function getAll(data:any, headers:any){

    let response:any[] = data.hits.hits

    let hits = response.length

    while (hits){
        if (hits > 0){
            data = await scroll(data._scroll_id, headers)
            response = [...response, ...data.hits.hits]
        }
        hits = data.hits.hits.length
    }
    deleteScrollId(data._scroll_id, headers)

    return response
}

// get next page
export async function scroll(scrollId:string, headers:any){
    const response = await axios.post(API_SERVER+"/api/v3/assets/_search/scroll", {
        "scroll": "1m",
        "scroll_id": scrollId
    }, {headers})
    return response.data
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

