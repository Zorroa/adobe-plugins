import { expect } from 'chai'
import queries from '../../../src/zapi/queries'

describe('src.resolvers.queries', () => {
    it("should return termtype query", () => {
        const res = queries.termType("car", "video")
        expect(res).to.have.key("query")
        expect(res['query']).to.have.key("bool")
        expect(res['query']['bool']).to.have.key("must")
        expect(res['query']['bool']['must'].length).to.eq(2)
        expect(res['query']['bool']['must'][0]['match']["media.type"]).to.eq("video")
        expect(res['query']['bool']['must'][1]["simple_query_string"]['query']).to.eq("car")
    })

    it("should return term query", () => {
        const res = queries.term("car")
        expect(res).to.have.key("query")
        expect(res['query']).to.have.key("simple_query_string")
        expect(res['query']["simple_query_string"]).to.have.key("query")
        expect(res['query']["simple_query_string"]['query']).to.eq('car')
    })

    it("should return similarity query", () => {
        const res = queries.similarity("hashvalue")
        expect(res).to.have.key("query")
        expect(res['query']['bool']).to.have.key("must")
        expect(res['query']["bool"]['must'].length).to.eq(1)
        expect(res['query']["bool"]['must'][0]).to.have.key('script_score')
        expect(res['query']["bool"]['must'][0]['script_score']).to.have.keys('query', 'script', 'boost', 'min_score')
        expect(res['query']["bool"]['must'][0]['script_score']['query']).to.have.key("match_all")
        expect(res['query']["bool"]['must'][0]['script_score']['script']).to.have.keys("source", 'lang', 'params')
        expect(res['query']["bool"]['must'][0]['script_score']['script']['params']).to.have.keys("minScore", 'field', 'hashes')
        expect(res['query']["bool"]['must'][0]['script_score']['script']['params']['hashes'][0]).to.eq('hashvalue')
    })

    it("should return scroll query", () => {
        const res = queries.scroll("myscrollID")
        expect(res).to.have.keys("scroll", "scroll_id")
        expect(res['scroll_id']).to.eq("myscrollID")
    })
})