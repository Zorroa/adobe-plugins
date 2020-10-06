import axios from 'axios'
import config from 'config'

const API_SERVER = config.get("server")
const TIMEOUT:string = '1m'

// elastic search similarity query
let similarityQuery = (hash:string)=>{
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
let get_all = async (data:any, headers:any)=>{

    let response:Array<any> = data["hits"]["hits"]

    let hits = response.length

    while (hits){
        if (hits > 0){
            data = await scroll(data["_scroll_id"], headers)
            response = [...response, ...data["hits"]["hits"]]
        }
        hits = data["hits"]["hits"].length
    }
    deleteScrollId(data["_scroll_id"], headers)
    
    return response
}

// get next page
let scroll = async (scrollId:String, headers:any) => {
    let response = await axios.post(API_SERVER+"/api/v3/assets/_search/scroll", {
        "scroll": "1m",
        "scroll_id": scrollId
    }, {headers: headers})
    return response.data
}

// delete scroll id
let deleteScrollId = async (scrollId:string, headers:object)=>{
    console.log("delete sroll")
    let response = await axios.request({
        method: "delete",
        url: API_SERVER+"/api/v3/assets/_search/scroll",
        data: {"scroll_id": scrollId},
        headers: headers
    })
    return response.data
}


export default {
    get: async(req:any, res:any, next:any) => {
        let response = await axios.get(API_SERVER+"/api/v3/assets/_search", {headers: req.zmlpHeader})

        let data = await get_all(response, req.zmlpHeader)

        res.json(data)
    },

    getTerm: async(req:any, res:any, next:any)=>{
        let query = {"query": {"simple_query_string": {"query": req.params.term}}}

        let response = await axios.post(API_SERVER+"/api/v3/assets/_search?scroll="+TIMEOUT, 
                                        query, 
                                        {headers: req.zmlpHeader})
        
        let data = await get_all(response.data, req.zmlpHeader)
        
        res.json(data)
    },

    getTypeTerm: async(req:any, res:any)=>{
        let type = req.params.type
        let term = req.params.term
        let query = {"query": {"bool": {"must": [
            {"match": {"media.type": type}},
            {"simple_query_string": {"query": term}}]}}}

        let response = await axios.post(API_SERVER+"/api/v3/assets/_search?scroll="+TIMEOUT, 
            query, 
            {headers: req.zmlpHeader})

        let data = await get_all(response.data, req.zmlpHeader)
    
        res.json(data)
    },

    similaritySearch: async(req:any, res:any)=>{
        let hash = req.params.hash

        let query = {"query": {"bool": {"must": [similarityQuery(hash)]}}}

        let response = await axios.post(API_SERVER+"/api/v3/assets/_search?scroll="+TIMEOUT, 
            query, 
            {headers: req.zmlpHeader})

        let data = await get_all(response.data, req.zmlpHeader)
    
        res.json(data)
    }
}