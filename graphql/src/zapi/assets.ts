import axios from 'axios'
import config from '../../config/config'
import { getResponse, similarityQuery, scroll} from './utils'

const API_SERVER = config.zapiServer
const TIMEOUT: string = '1m'


export default {
    get: async (req: any) => {
        let assets: any
        let { scrollId } = req.params
        let response: any
        
        if (scrollId) 
            response = scroll(scrollId, req.zmlpHeader)
        else
            response = await axios.get(API_SERVER + "/api/v3/assets/_search", { headers: req.zmlpHeader })    
        
        const p = getResponse(response)
        assets = p.assets
        scrollId = p.scrollId
        
        return {assets, scrollId}
    },

    getTerm: async (req: any) => {
        let assets: any
        let {term, scrollId} = req.params
        let response: any

        if (scrollId)
            response = scroll(scrollId, req.zmlpHeader)
        else {
            const query = { "query": { "simple_query_string": { "query": term } } }
            response = await axios.post(API_SERVER + "/api/v3/assets/_search?scroll=" + TIMEOUT,
                query, { headers: req.zmlpHeader })
        }

        const p = getResponse(response)
        assets = p.assets
        scrollId = p.scrollId

        return {assets, scrollId}
    },

    getTypeTerm: async(req:any)=>{
        let { term, type, scrollId } = req.params
        let response: any
        let assets: any
        if (scrollId)
            response = scroll(scrollId, req.zmlpHeader)
        else {
            const query = {"query": {"bool": {"must": [
                {"match": {"media.type": type}},
                {"simple_query_string": {"query": term}}]}}}

            response = await axios.post(API_SERVER+"/api/v3/assets/_search?scroll="+TIMEOUT,
                query, {headers: req.zmlpHeader})
        }
        const p = getResponse(response)
        assets = p.assets
        scrollId = p.scrollId

        return {assets, scrollId}
    },

    similaritySearch: async (req: any) => {
        let { hash, scrollId } = req.params
        let response: any
        let assets: any
        if (scrollId)
            response = scroll(scrollId, req.zmlpHeader)
        else {
            const query = { "query": { "bool": { "must": [similarityQuery(hash)] } } }

            response = await axios.post(API_SERVER + "/api/v3/assets/_search?scroll=" + TIMEOUT,
                query, { headers: req.zmlpHeader })
        }

        const p = getResponse(response)
        assets = p.assets
        scrollId = p.scrollId

        return {assets, scrollId}
    }
}