import request from './request'
import queries from './queries'
import { getResponse, scroll, deleteScrollId } from './utils'

const TIMEOUT: string = '1m'
export default {
    /**
     * @param  {any} req 
     */
    get: async (scrollId?: string) => {
        let assets: any
        let response: any

        if (scrollId)
            response = await scroll(scrollId)
        else
            response = await request.get("/api/v3/assets/_search")

        const p = getResponse(response)
        assets = p.assets
        scrollId = p.scrollId

        if (assets.length == 0) {
            deleteScrollId(scrollId)
        }

        return { assets, scrollId }
    },

    getTerm: async (term: string, scrollId?: string) => {
        let assets: any
        let response: any

        try {
            if (scrollId)
                response = await scroll(scrollId)
            else {
                const query = queries.term(term)
                const url = "/api/v3/assets/_search?scroll=" + TIMEOUT
                response = await request.post(url, query)
            }

            const p = getResponse(response)
            assets = p.assets

            if (assets.length == 0) {
                deleteScrollId(scrollId)
            }

            return { assets, scrollId: p.scrollId }
        } catch (err) {
            return { assets, scrollId, err }
        }
    },

    getTypeTerm: async (term: string, type: string, scrollId?: string) => {
        let response: any
        let assets: any

        if (scrollId)
            response = await scroll(scrollId)
        else {
            const query = queries.termType(term, type)
            const url = "/api/v3/assets/_search?scroll=" + TIMEOUT
            response = await request.post(url, query)
        }

        const p = getResponse(response)
        assets = p.assets

        if (assets.length == 0) {
            deleteScrollId(scrollId)
        }

        return { assets, scrollId }
    },

    similaritySearch: async (hash: string, scrollId?: string) => {
        let response: any
        let assets: any

        if (scrollId)
            response = await scroll(scrollId)
        else {
            const query = queries.similarity(hash)
            const url = "/api/v3/assets/_search?scroll=" + TIMEOUT
            response = await request.post(url, query)
        }

        const p = getResponse(response)
        assets = p.assets
        scrollId = p.scrollId

        if (assets.length == 0) {
            deleteScrollId(scrollId)
        }

        return { assets, scrollId }
    }
}