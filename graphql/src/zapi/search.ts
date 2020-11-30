import request from './request'
import queries from './queries'
import { getResponse } from './utils'

const TIMEOUT: string = '1m'
export default {
    /**
     * @param  {any} req
     */
    get: async () => {

        try {
            let response = await request.get("/api/v3/assets/_search?scroll=" + TIMEOUT)

            response = getResponse(response)

            return { ...response }

        } catch (err) {
            return err
        }
    },

    getTerm: async (term: string) => {
        let response: any
        try {

            const query = queries.term(term)
            
            const url = "/api/v3/assets/_search?scroll=" + TIMEOUT

            response = await request.post(url, query)

            response = getResponse(response)

            return { ...response }

        } catch (err) {

            return err
        }
    },

    getTypeTerm: async (term: string, type: string) => {
        try {

            const query = queries.termType(term, type)

            const url = "/api/v3/assets/_search?scroll=" + TIMEOUT

            let response = await request.post(url, query)

            response = getResponse(response)

            return { ...response }

        } catch (err) {

            return err

        }
    },

    similaritySearch: async (hash: string) => {
        try {

            const query = queries.similarity(hash)

            const url = "/api/v3/assets/_search?scroll=" + TIMEOUT

            let response = await request.post(url, query)

            response = getResponse(response)

            return { ...response }

        } catch (err) {
            return err
        }

    }
}