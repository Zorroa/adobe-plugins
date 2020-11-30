import sinon from 'sinon'
import * as s from '../../../src/resolvers/search'
import {
    downloadThumbnail,
    addTumbnail,
    search,
    scroll
} from '../../../src/resolvers/search'
import zfile from '../../../src/zapi/file'
import zData from '../../data/zviAssets'
import data from '../../data/assets'
import zsearch from '../../../src/zapi/search'
import * as utils from '../../../src/zapi/utils'
import { expect } from 'chai'
import { describe } from 'mocha'

describe('src.resolvers.search', () => {
    describe("downloadThumbnail", () => {
        const filePath = "http://localhost/fakepath.jpg"

        afterEach(() => {
            sinon.restore()
        })

        it("should return filepath", async () => {
            sinon.stub(zfile, "download").returns(Promise.resolve(filePath))
            const res = await downloadThumbnail("id")
            expect(res).to.eq(filePath)
        })

        it("should return error", async () => {
            sinon.stub(zfile, "download").returns(Promise.resolve(new Error("messsage")))
            const res = await downloadThumbnail("id")
            expect(res).to.be.an("error")
        })

    })

    describe("scroll", () => {
        const FAKE_FUNC = sinon.fake.returns("http://localhost/fakepath.jpg")
        const FAKE_DELETE = sinon.fake()
        const FAKE_ADDTHUMBNAIL = sinon.fake()
        // const FAKE_RESPONSE = sinon.fake.returns(zData)
        const FAKE_SCROLL = sinon.fake.returns(zData)
        const FAKE_NO_ASSETS = sinon.fake.returns({ assets: [] })

        beforeEach(() => {
            sinon.replace(zfile, "download", FAKE_FUNC)
            sinon.replace(utils, "scroll", FAKE_SCROLL)
            sinon.replace(s, 'addTumbnail', FAKE_ADDTHUMBNAIL)
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should return error", async () => {
            const res = await scroll({}, { input: { getThumbnail: false } })

            expect(res).to.have.key("status")
            expect(res['status']).to.be.an('error')
        })

        it("should return assets", async () => {
            sinon.replace(utils, "deleteScrollId", FAKE_FUNC)

            const res = await scroll({}, { input: { scrollId: "123456", getThumbnail: false } })
            
            expect(res).to.contain.keys("assets", "scrollId", "total", "count")
            expect(res['assets'].length).to.eq(10)
            expect(res['scrollId']).to.eq(zData.data._scroll_id)
        })

        it("should delete scrollId", async () => {
            sinon.replace(utils, "getResponse", FAKE_NO_ASSETS)
            sinon.replace(utils, "deleteScrollId", FAKE_DELETE)

            await scroll({}, { input: { scrollId: "123456", getThumbnail: false } })

            expect(FAKE_DELETE.callCount).to.eq(1)
        })

        it("should call addThumbnails", async () => {
            await scroll({}, { input: { scrollId: "123456", getThumbnail: true } })
            expect(FAKE_ADDTHUMBNAIL.callCount).to.eq(1)
        })
    })

    describe("addTumbnail", () => {
        const filePath = "http://localhost/fakepath.jpg"
        const FAKE_FUNC = sinon.fake.returns(filePath)
        const FAKE_GET_TERM = sinon.fake.returns({ assets: data.data.search.assets })
        beforeEach(() => {
            sinon.replace(zfile, "download", FAKE_FUNC)
            sinon.replace(zsearch, "getTerm", FAKE_GET_TERM)
            sinon.replace(zsearch, "getTypeTerm", FAKE_GET_TERM)
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should return asset with thumbnail path", () => {
            const res = addTumbnail(data.data.search.assets)
            expect(res.length).to.eq(10)
            expect(res[0]).to.contain.keys('thumbnail')
            expect(res[0]['thumbnail']).to.eq('http://localhost/fakepath.jpg')
        })

        it("should search term and get thumbnail", async () => {
            const res = await search({}, {input: {term: "car",getThumbnail: true}})
            expect(res).to.contain.keys('assets')
            expect(res['assets'].length).to.eq(10)
            expect(res['assets'][0]['thumbnail']).to.eq("http://localhost/fakepath.jpg")
        })

        it("should search term/type and get thumbnail", async () => {
            const res = await search({}, {input: {term: "car", type: "video", getThumbnail: true}})
            expect(res).to.contain.keys('assets')
            expect(res['assets'].length).to.eq(10)
            expect(res['assets'][0]['thumbnail']).to.eq("http://localhost/fakepath.jpg")
        })

    })

    describe("search typeterm", () => {
        const FAKE_FUNC = sinon.fake.returns({assets: data.data.search.assets})
        beforeEach(() => {
            sinon.replace(zsearch, "getTypeTerm", FAKE_FUNC)
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should return assets", async () => {
            const res = await search({}, {input: {term: "car",type: "video",getThumbnail: false}})

            expect(res).to.contain.keys("assets", "scrollId", "total", "count")
            expect(res['assets'].length).to.eq(10)
        })

        it("should return default values", async () => {
            const res = await search({}, {input: {}})
            
            expect(res).to.contain.keys("assets", "scrollId", "total", "count")
            expect(res['assets'].length).to.eq(0)
            expect(res['scrollId']).to.eq("")
            expect(res['total']).to.eq(0)
            expect(res['count']).to.eq(0)
        })
    })

    describe("search term", () => {
        const FAKE_FUNC = sinon.fake.returns({assets: data.data.search.assets})
        beforeEach(() => {
            sinon.replace(zsearch, "getTerm", FAKE_FUNC)
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should return assets", async () => {
            const res = await search({}, {input: {term: "car",getThumbnail: false}})

            expect(res).to.contain.keys("assets", "scrollId", "total", "count")
            expect(res['assets'].length).to.eq(10)
        })

        it("should return default values", async () => {
            const res = await search({}, {input: {}})
            
            expect(res).to.contain.keys("assets", "scrollId", "total", "count")
            expect(res['assets'].length).to.eq(0)
            expect(res['scrollId']).to.eq("")
            expect(res['total']).to.eq(0)
            expect(res['count']).to.eq(0)
        })
    })

})