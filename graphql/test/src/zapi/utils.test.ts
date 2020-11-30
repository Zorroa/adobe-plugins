import { expect } from 'chai'
import { describe } from 'mocha'
import sinon from 'sinon'
import zData from '../../data/zviAssets'
import request from '../../../src/zapi/request'
import * as utils from '../../../src/zapi/utils'
import zviData from '../../data/zviAssets'

describe('src.zapi.utils', () => {

    describe("scroll", async () => {
        afterEach(() => {
            sinon.restore()
        })

        it("should have keys _scroll_id & hits", async () => {
            sinon.replace(request, "post", sinon.fake.returns(zData))

            const res = await utils.scroll('123456')
            expect(res).to.have.keys("data")
            expect(res['data']).to.have.keys("_scroll_id", "hits", "timed_out", "took", "_shards")
        })
    })

    describe("deleteScrollId", async () => {

        beforeEach(() => {
            sinon.replace(request, "delete", sinon.fake.returns({ "data": { "data": true } }))
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should have response", async () => {
            const res = await utils.deleteScrollId("1234x5")
            expect(res).to.have.keys("data")
            expect(res["data"]).to.equal(true)
        })
    })

    describe("getResponse", async () => {

        it("should return keys scrollId, count, total, assets", () => {
            const res = utils.getResponse(zviData)

            expect(res).to.have.keys("total", "count", "scrollId", "assets")
            expect(res["assets"].length).to.have.eq(10)
        })
    })
})