import { expect } from 'chai'
import { describe } from 'mocha'
import sinon from 'sinon'
import req from '../../../src/zapi/request'
import zData from '../../data/zviAssets'
import search from '../../../src/zapi/search'

const FAKE_NET_RES = sinon.fake.returns(zData)
const FAKE_ERROR = sinon.fake.returns(new Error("message"))

describe('src.zapi.assets', () => {
    describe("get", () => {
        afterEach(() => { sinon.restore() })

        it("should return response", async () => {
            sinon.replace(req, "get", FAKE_NET_RES)

            const res = await search.get()

            expect(res).to.contain.keys("assets", "scrollId", "total", "count")
            expect(res['assets'].length).to.eq(10)
            expect(res['scrollId']).to.eq(zData.data._scroll_id)
            expect(res['total']).to.eq(zData.data.hits.total.value)
            expect(res['count']).to.eq(res['assets'].length)
        })

        it("should return error", async () => {
            sinon.replace(req, "get", FAKE_ERROR)

            const res = await search.get()

            expect(res).to.be.an("error")
        })

    })

    describe("getTerm", () => {
        afterEach(() => { sinon.restore() })

        it("should return response", async () => {
            sinon.replace(req, "post", FAKE_NET_RES)

            const res = await search.getTerm("bar")
            expect(res).to.contain.keys("assets", "scrollId", "total", "count")
            expect(res['assets'].length).to.eq(10)
            expect(res['scrollId']).to.eq(zData.data._scroll_id)
            expect(res['total']).to.eq(zData.data.hits.total.value)
            expect(res['count']).to.eq(res['assets'].length)
        })

        it("should return error", async () => {
            sinon.replace(req, "post", FAKE_ERROR)

            const res = await search.getTerm("bar")

            expect(res).to.be.an("error")
        })
    })

    describe("getTypeTerm", () => {
        afterEach(() => { sinon.restore() })

        it("should return response", async () => {
            sinon.replace(req, "post", FAKE_NET_RES)

            const res = await search.getTypeTerm("car", "video")
            expect(res).to.contain.keys("assets", "scrollId", "total", "count")
            expect(res['assets'].length).to.eq(10)
            expect(res['scrollId']).to.eq(zData.data._scroll_id)
            expect(res['total']).to.eq(zData.data.hits.total.value)
            expect(res['count']).to.eq(res['assets'].length)
        })

        it("should return error", async () => {
            sinon.replace(req, "post", FAKE_ERROR)

            const res = await search.getTypeTerm("car", "video")

            expect(res).to.be.an("error")
        })
    })

    describe("similaritySearch", () => {
        afterEach(() => { sinon.restore() })

        it("should return response", async () => {
            sinon.replace(req, "post", FAKE_NET_RES)

            const res = await search.similaritySearch("somehash")

            expect(res).to.contain.keys("assets", "scrollId", "total", "count")
            expect(res['assets'].length).to.eq(10)
            expect(res['scrollId']).to.eq(zData.data._scroll_id)
            expect(res['total']).to.eq(zData.data.hits.total.value)
            expect(res['count']).to.eq(res['assets'].length)
        })

        it("should return error", async () => {
            sinon.replace(req, "post", FAKE_ERROR)

            const res = await search.similaritySearch("somehash")

            expect(res).to.be.an("error")
        })

    })
})