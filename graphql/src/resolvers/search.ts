import zsearch from '../zapi/search'
import zfile from '../zapi/file'
import * as utils from '../zapi/utils'
import { find, propEq } from 'ramda'

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
 * @returns {[object],scrollId, total, count} Assets list and scrollID
 */
export const scroll = async (_: any, args: any) => {
    const { scrollId, getThumbnail } = args.input

    const response = await utils.scroll(scrollId)

    const data = utils.getResponse(response)

    if (!data.assets.length) {
        utils.deleteScrollId(scrollId)
    }

    if (getThumbnail) {
        data.assets = addTumbnail(data.assets)
    }

    return { scrollId, ...data }
}

/**
 * Search term and term/type
 * @param  {any} _
 * @param  {object} args GraphQL arguments
 * @returns {[object],scrollId, total, count} Assets list and scrollID
 */
export const search = async (_: any, args: any) => {
    const { term, type, getThumbnail } = args.input

    let response: any

    if (term && type) {
        response = await zsearch.getTypeTerm(term, type)
    } else if (term) {
        response = await zsearch.getTerm(term)
    }

    if (getThumbnail) {
        response.assets = addTumbnail(response.assets)
    }

    return { ...response }
}

/**Search by image
 * @param  {any} _
 * @param  {any} args
 * @returns {[object],scrollId, total, count} Assets list and scrollID
 */
export const fileSim = async (_: any, args: any) => {
    const { base64Image, getThumbnail } = args.input

    let response: any = await zsearch.imageSimilarity(base64Image)

    if (getThumbnail) {
        response.assets = addTumbnail(response.assets)
    }

    return { ...response }
}