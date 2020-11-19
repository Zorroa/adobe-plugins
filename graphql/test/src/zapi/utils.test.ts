import { expect } from 'chai'
import { describe } from 'mocha'
import sinon from 'sinon'
import { similarityQuery } from '../../../src/zapi/queries'
import request from '../../../src/zapi/request'
import * as utils from '../../../src/zapi/utils'
import zviData from '../../data/zviAssets'

const HEADER = { "headers": { "Authorization": "Bearer TOKEN" } }

describe('src.zapi.utils', () => {
    describe("similarityQuery", () => {
        const sim: object = similarityQuery("12345")
        it("should return 1 list item", () => {
            expect(sim['script_score']['script']['params']['hashes'].length).to.equal(1)
        })
        it("should return hash", () => {
            expect(sim['script_score']['script']['params']['hashes'][0]).to.equal('12345')
        })
    })

    describe("deleteScrollId", async () => {
        const FAKE_DELETE = sinon.fake.returns({ "data": { "data": true } })
        beforeEach(() => {
            sinon.replace(request, "delete", FAKE_DELETE)
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should have data object", async () => {
            const res = await utils.deleteScrollId("1234x5")
            expect(res).to.have.key("data")
        })
        it("should contain true", async () => {
            const res = await utils.deleteScrollId("12345")
            expect(res["data"]).to.equal(true)
        })
    })

    describe("scroll", async () => {
        const SCROLL_ID: string = "123456"
        let response: object = { "data": { "_scroll_id": SCROLL_ID, "hits": { "hits": [1, 2, 3] } } }
        const FAKE_DELETE = sinon.fake.returns(response)
        beforeEach(() => {
            sinon.replace(request, "post", FAKE_DELETE)
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should have keys _scroll_id & hits", async () => {
            const res = await utils.scroll(SCROLL_ID)
            expect(res['data']).to.have.keys("_scroll_id", "hits")
            expect(res['data']["_scroll_id"]).to.equal(SCROLL_ID)
        })
    })

    describe("getResponse", async () => {

        it("should have keys scrollId, count, total, assets", () => {
            const res = utils.getResponse(zviData)

            expect(res).to.have.keys("total", "count", "scrollId", "assets")
            expect(res["assets"].length).to.have.eq(10)
        })
    })
})