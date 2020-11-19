import zassets from '../zapi/assets'
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

            const id = files[0].id.split("/")[1]

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
 * @returns {[object],scrollId} Assets list and scrollID
 */
export const search = async (_: any, args: any) => {
    const { term, type, getThumbnail } = args.input

    let response: any

    if (term && type) {
        response = await zassets.getTypeTerm(term, type)
    } else if (term) {
        response = await zassets.getTerm(term)
    }



    if (getThumbnail) {
        response.assets = addTumbnail(response.assets)
    }

    return { ...response }
}