import zassets from '../zapi/search'
import zfile from '../zapi/file'
import * as utils from '../zapi/utils'
import { find, propEq, isNil, mergeDeepLeft } from 'ramda'

/**
 * Caches the download
 * @param  {string} id File ID
 * @return {string} file path
 */
export const downloadThumbnail = (id: string) => {
    const filePath = zfile.download(id)
    return filePath
}

/**
 * Get thumbnails for all assets
 * @param  {[asset]} assets List of assets
 * @param  {any} req Apollo Request object
 * @returns {[asset]} List of assets
 */
export const addTumbnail = (assets: any) => {

    const response: any[] = []

    assets.forEach((asset: any) => {

        const { files } = asset

        if (files !== undefined) {
            // use web-proxy image
            const proxyFile: any = find(propEq("name", "web-proxy.jpg"))(files)

            const filepath = downloadThumbnail(proxyFile.id)

            asset.thumbnail = filepath

            response.push(asset)
        }
    })

    return response
}
/**
 * Scrolls the previously searched query
 * @param  {any} _
 * @param  {any} args GraphQL arguments
 * @returns {[object],string} Assets list and scrollID
 */
export const scroll = async (_: any, args: any) => {
    const { scrollId, getThumbnail } = args.input

    let response: any = {assets: [], scrollId: scrollId, total: 0, count: 0}

    let data: any

    try{
        if (isNil(scrollId)){
            throw new Error("Invalid scrollId")
        }
    
        data = await utils.scroll(scrollId)
    
        data = utils.getResponse(data)

        if (!data.assets.length) {
            utils.deleteScrollId(response.scrollId)
        }
    
        if (getThumbnail) {
            data.assets = addTumbnail(data.assets)
        }

        return { ...mergeDeepLeft(data, response) }

    }catch(err){
        return {status: err}
    }
}

/**
 * Search term and term/type
 * @param  {any} _
 * @param  {object} args GraphQL arguments
 * @returns {[object],scrollId} Assets list and scrollID
 */
export const search = async (_: any, args: any) => {
    const { term, type, getThumbnail } = args.input

    let response: any = {assets: [], scrollId: "", total: 0, count: 0}

    let data: any

    if (term && type) {
        
        data = await zassets.getTypeTerm(term, type)

    } else if (term) {

        data = await zassets.getTerm(term)

    }

    if (getThumbnail) {
        response.assets = addTumbnail(data.assets)
    }

    return { ...mergeDeepLeft(data, response) }
}

/**
 * Search term and term/type
 * @param  {any} _
 * @param  {object} args GraphQL arguments
 * @returns {[object],scrollId} Assets list and scrollID
 */
export const similar = async (_: any, args: any) => {
    const { hash, getThumbnail } = args.input

    let response: any = {assets: [], scrollId: "", total: 0, count: 0}
    let data: any

    data = await zassets.similaritySearch(hash)

    if (getThumbnail) {
        response.assets = addTumbnail(data.assets)
    }

    return { ...mergeDeepLeft(data, response) }
}