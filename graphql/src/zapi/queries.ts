/**
 * ZMLP API Elastic Search queries
 */

/**
 * ZMLP Similarity Query
 * @param  {string} hash
 */
export const similarityQuery = (hash: string) => {
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
                    "hashes": [hash]
                }
            },
            "boost": 1.0,
            "min_score": 0.75
        }
    }
}

export default {
    /**
     * @param  {string} term Search term
     * @param  {string} type Search type: video, document, image
     * @return {object} query
     */
    termType: (term: string, type: string) => {
        return {
            "query": {
                "bool": {
                    "must": [
                        { "match": { "media.type": type } },
                        { "simple_query_string": { "query": term } }]
                }
            }
        }
    },
    /**
     * @param  {string} term Search term
     * @return {object} query
     */
    term: (term: string) => {
        return { "query": { "simple_query_string": { "query": term } } }
    },
    /**
     * @param  {string} hash Similarity hash
     * @return {object} query
     */
    similarity: (hash: string) => {
        return { "query": { "bool": { "must": [similarityQuery(hash)] } } }
    },
    scroll: (scrollId: string) => {
        return { "scroll": "5m", "scroll_id": scrollId }
    }
}