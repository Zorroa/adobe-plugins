import sinon from 'sinon'
import * as s from '../../../src/resolvers/search'
import {
    downloadThumbnail,
    addTumbnail,
    search,
    scroll
} from '../../../src/resolvers/search'
import zfile from '../../../src/zapi/file'
import zassets from '../../../src/zapi/assets'
import * as utils from '../../../src/zapi/utils'
import { expect } from 'chai'
import { describe } from 'mocha'

describe('src.resolvers.search', () => {
    describe("downloadThumbnail", () => {
        const filePath = "http://localhost/fakepath.jpg"
        beforeEach(() => {
            sinon.stub(zfile, "download").returns(Promise.resolve(filePath))
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should return filepath", async () => {
            const res = await downloadThumbnail("id")
            expect(res).to.eq(filePath)
        })

    })

    describe("scroll", () => {
        const FAKE_FUNC = sinon.fake.returns("http://localhost/fakepath.jpg")
        const FAKE_DELETE = sinon.fake()
        const FAKE_ADDTHUMBNAIL = sinon.fake()
        const FAKE_RESPONSE = sinon.fake.returns({ assets: [1, 2, 3] })
        const FAKE_SCROLL = sinon.fake.returns({ scrollId: "123456" })
        const FAKE_NO_ASSETS = sinon.fake.returns({ assets: [] })

        beforeEach(() => {
            sinon.replace(zfile, "download", FAKE_FUNC)
            sinon.replace(utils, "scroll", FAKE_SCROLL)
            sinon.replace(s, 'addTumbnail', FAKE_ADDTHUMBNAIL)
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should return assets", async () => {
            sinon.replace(utils, "getResponse", FAKE_RESPONSE)
            sinon.replace(utils, "deleteScrollId", FAKE_FUNC)


            const res = await scroll({}, { input: { scrollId: "123456", getThumbnail: false } })
            expect(res).to.contain.keys("assets", "scrollId", "total", "count")
            expect(res['assets'].length).to.eq(3)
            expect(res['scrollId']).to.eq("123456")
        })

        it("should delete scrollId", async () => {
            sinon.replace(utils, "getResponse", FAKE_NO_ASSETS)
            sinon.replace(utils, "deleteScrollId", FAKE_DELETE)

            const res = await scroll({}, { input: { scrollId: "123456", getThumbnail: false } })

            expect(FAKE_DELETE.callCount).to.eq(1)
        })

        it("should call addThumbnails", async () => {
            sinon.replace(utils, "getResponse", FAKE_RESPONSE)
            const res = await scroll({}, { input: { scrollId: "123456", getThumbnail: true } })
            expect(FAKE_ADDTHUMBNAIL.callCount).to.eq(1)
        })
    })

    describe("addTumbnail", () => {
        const assets = [
            {
                "id": "u1RZTVydMbIemfaext2kRCcrN6NNeYJr",
                "files": [{
                    "size": 170688,
                    "name": "web-proxy.jpg",
                    "mimetype": "image/jpeg",
                    "id": "assets/u1RZTVydMbIemfaext2kRCcrN6NNeYJr/web-proxy/web-proxy.jpg",
                    "category": "web-proxy",
                    "attrs": {
                        "width": 1024,
                        "height": 1024
                    }
                }]
            }
        ]
        const args = {
            input: {
                term: "car",
                getThumbnail: true
            }
        }
        const filePath = "http://localhost/fakepath.jpg"
        const FAKE_FUNC = sinon.fake.returns(filePath)
        const FAKE_GET_TERM = sinon.fake.returns({ assets: assets })
        beforeEach(() => {
            sinon.replace(zfile, "download", FAKE_FUNC)
            sinon.replace(zassets, "getTerm", FAKE_GET_TERM)
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should return asset with thumbnail path", () => {
            const res = addTumbnail(assets)
            expect(res.length).to.eq(1)
            expect(res[0]).to.have.keys('id', 'files', 'thumbnail')
            expect(res[0]['id']).to.eq('u1RZTVydMbIemfaext2kRCcrN6NNeYJr')
            expect(res[0]['thumbnail']).to.eq('http://localhost/fakepath.jpg')
            expect(res[0]['files'].length).to.eq(1)

        })

        it("should search term and get thumbnail", async () => {
            const res = await search({}, args)
            expect(res).to.have.keys('assets', 'scrollId', 'total', 'count')
            expect(res['assets'].length).to.eq(1)
            expect(res['assets'][0]['id']).to.eq("u1RZTVydMbIemfaext2kRCcrN6NNeYJr")
            expect(res['assets'][0]['files'].length).to.eq(1)
            expect(res['assets'][0]['thumbnail']).to.eq("http://localhost/fakepath.jpg")
            expect(res['scrollId']).to.eq(undefined)
        })

        it("should search term/type and get thumbnail", async () => {
            args['type'] = "video"
            const res = await search({}, args)
            expect(res).to.have.keys('assets', 'scrollId', 'total', 'count')
            expect(res['assets'].length).to.eq(1)
            expect(res['assets'][0]['id']).to.eq("u1RZTVydMbIemfaext2kRCcrN6NNeYJr")
            expect(res['assets'][0]['files'].length).to.eq(1)
            expect(res['assets'][0]['thumbnail']).to.eq("http://localhost/fakepath.jpg")
            expect(res['scrollId']).to.eq(undefined)
        })

    })

    describe("search typeterm", () => {
        const FAKE_FUNC = sinon.fake.returns({ assets: [1, 2, 3], scrollId: "1234" })
        const args = {
            input: {
                term: "car",
                type: "video",
                getThumbnail: false
            }
        }
        beforeEach(() => {
            sinon.replace(zassets, "getTypeTerm", FAKE_FUNC)
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should return assets", async () => {
            const res = await search({}, args)
            expect(res).to.haveOwnProperty('assets')
            expect(res['assets']).to.contain(1)
            expect(res['assets']).to.contain(2)
            expect(res['assets']).to.contain(3)
        })
    })

    describe("search term", () => {
        const FAKE_FUNC = sinon.fake.returns({ assets: [1, 2, 3], scrollId: "1234", total: 10, count: 1 })
        const args = {
            input: {
                term: "car",
                getThumbnail: false
            }
        }
        beforeEach(() => {
            sinon.replace(zassets, "getTerm", FAKE_FUNC)
        })
        afterEach(() => {
            sinon.restore()
        })

        it("should return assets", async () => {
            const res = await search({}, args)

            expect(res).to.have.keys('assets', "total", "count", "scrollId")
            expect(res['assets']).to.contain(1)
            expect(res['assets']).to.contain(2)
            expect(res['assets']).to.contain(3)
        })
    })


})