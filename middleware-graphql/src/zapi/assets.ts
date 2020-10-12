import axios from 'axios'
import config from 'config'
import {pluck} from 'ramda'
import { getAll, similarityQuery } from './utils'

const API_SERVER = config.get("server")
const TIMEOUT:string = '1m'

export default {
    get: async(req:any) => {
        const response = await axios.get(API_SERVER+"/api/v3/assets/_search", {headers: req.zmlpHeader})

        const data = await getAll(response, req.zmlpHeader)

        return pluck("_source", data)
    },

    getTerm: async(req:any)=>{
        const query = {"query": {"simple_query_string": {"query": req.params.term}}}
        const response = await axios.post(API_SERVER+"/api/v3/assets/_search?scroll="+TIMEOUT,
                                        query,
                                        {headers: req.zmlpHeader})

        const data = await getAll(response.data, req.zmlpHeader)
        
        return pluck("_source", data)
    },

    getTypeTerm: async(req:any)=>{
        const type = req.params.type
        const term = req.params.term
        const query = {"query": {"bool": {"must": [
            {"match": {"media.type": type}},
            {"simple_query_string": {"query": term}}]}}}

        const response = await axios.post(API_SERVER+"/api/v3/assets/_search?scroll="+TIMEOUT,
            query,
            {headers: req.zmlpHeader})

        const data = await getAll(response.data, req.zmlpHeader)

        return pluck("_source", data)
    },

    similaritySearch: async(req:any)=>{
        const hash = req.params.hash

        const query = {"query": {"bool": {"must": [similarityQuery(hash)]}}}

        const response = await axios.post(API_SERVER+"/api/v3/assets/_search?scroll="+TIMEOUT,
            query,
            {headers: req.zmlpHeader})

        const data = await getAll(response.data, req.zmlpHeader)

        return pluck("_source", data)
    }
}