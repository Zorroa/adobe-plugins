import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { mockReq } from 'sinon-express-mock'
import { describe } from 'mocha'
import sinon from 'sinon'
import axios from 'axios'
import * as utils from '../../../src/zapi/utils'
import assets from '../../../src/zapi/assets'

chai.use(sinonChai);

let Request = { body: { foo: 'bar' }, params: { hash: "12345" } }
const FAKE_FUNC = sinon.fake.returns({ assets: [{ _source: 1 }, { _source: 2 }], scrollId: "1234" })

describe('src.zapi.assets', () => {
    describe("get", () => {
        let requestStub: any
        let fakeScroll: any
        let fakeGetResponse: any
        beforeEach(() => {
            requestStub = sinon.stub(axios, "get").returns(Promise.resolve({ "data": { "data": true } }))
            fakeScroll = sinon.replace(utils, "getResponse", FAKE_FUNC)
            fakeGetResponse = sinon.replace(utils, "scroll", FAKE_FUNC)
        })
        afterEach(() => { sinon.restore() })

        it("should return get response", async () => {

            const res = await assets.get()

            expect(res['assets'].length).to.eq(2)
            expect(res['scrollId']).to.eq("1234")
            expect(res['assets'][0]['_source']).to.eq(1)
        })

        it("should return get scroll response", async () => {
            // const req = mockReq({ body: { foo: 'bar' }, params: { term: "car", scrollId: "12345" } })

            const res = await assets.get("12345")

            expect(res['assets'].length).to.eq(2)
            expect(res['scrollId']).to.eq("1234")
            expect(res['assets'][0]['_source']).to.eq(1)
        })
    })

    describe("getTerm", () => {
        let requestStub: any
        let fakeScroll: any
        let fakeGetResponse: any
        beforeEach(() => {
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve({ "data": { "data": true } }))
            fakeGetResponse = sinon.replace(utils, "getResponse", FAKE_FUNC)
            fakeScroll = sinon.replace(utils, "scroll", FAKE_FUNC)
        })
        afterEach(() => { sinon.restore() })

        it("should return response", async () => {

            const res = await assets.getTerm("bar")
            expect(res['assets'].length).to.eq(2)
            expect(res['scrollId']).to.eq("1234")
            expect(res['assets'][0]['_source']).to.eq(1)
        })

        it("should return scroll response", async () => {

            const res = await assets.getTerm("bar", "1234")

            expect(res['assets'].length).to.eq(2)
            expect(res['scrollId']).to.eq("1234")
            expect(res['assets'][0]['_source']).to.eq(1)
        })
    })

    describe("getTypeTerm", () => {
        let requestStub: any
        let fakeScroll: any
        let fakeGetResponse: any
        beforeEach(() => {
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve({ "data": { "data": true } }))
            fakeGetResponse = sinon.replace(utils, "getResponse", FAKE_FUNC)
            fakeScroll = sinon.replace(utils, "scroll", FAKE_FUNC)
        })
        afterEach(() => { sinon.restore() })

        it("should return response", async () => {

            const res = await assets.getTypeTerm("car", "video")
            expect(res['assets'].length).to.eq(2)
            expect(res['scrollId']).to.eq(undefined)
            expect(res['assets'][0]['_source']).to.eq(1)
        })

        it("should return scroll response", async () => {

            const res = await assets.getTypeTerm("car", "video", "12345")
            expect(res['assets'].length).to.eq(2)
            expect(res['scrollId']).to.eq("12345")
            expect(res['assets'][0]['_source']).to.eq(1)
        })
    })

    describe("similaritySearch", () => {
        let requestStub: any
        let fakeScroll: any
        let fakeGetResponse: any
        let req: any
        beforeEach(() => {
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve(Request))
            fakeGetResponse = sinon.replace(utils, "getResponse", FAKE_FUNC)
            fakeScroll = sinon.replace(utils, "scroll", FAKE_FUNC)
            req = mockReq(Request)
        })
        afterEach(() => { sinon.restore() })

        it("should return getAll response", async () => {
            const res = await assets.similaritySearch("somehash")

            expect(res['assets'].length).to.eq(2)
            expect(res['scrollId']).to.eq("1234")
            expect(res['assets'][0]['_source']).to.eq(1)
        })

        it("should return getAll scroll response", async () => {

            const res = await assets.similaritySearch("somehash", "12345")

            expect(res['assets'].length).to.eq(2)
            expect(res['scrollId']).to.eq("1234")
            expect(res['assets'][0]['_source']).to.eq(1)
        })
    })
})