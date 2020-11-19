/**
 * Responsible for making API calls to ZMLP
 */
import { genToken } from './index'
import config from '../../config/config'
import axios from 'axios'

const API_SERVER = config.zapiServer

export default {
    get: async (url: string, query?: object, data?: object) => {
        try {
            const headers = genToken()
            return await axios.get(API_SERVER + url, { headers })
        } catch (err) {
            return err
        }
    },
    post: async (url: string, query: object, data?: object) => {
        try {
            const headers = genToken()
            return await axios.post(API_SERVER + url, query, { headers })
        } catch (err) {
            return err
        }
    },
    put: async (url: string, query: object, data?: object) => {
        try {
            const headers = genToken()
            return await axios.put(API_SERVER + url, query, { headers })
        } catch (err) {
            return err
        }
    },
    delete: async (url: string, data: object, query?: object) => {
        try {
            const headers = genToken()

            return await axios.request({
                method: "delete",
                url: API_SERVER + url,
                data,
                headers
            })
        } catch (err) {
            return err
        }
    }
}