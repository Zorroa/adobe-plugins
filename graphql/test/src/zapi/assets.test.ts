import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
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
        let fakeGetResponse: any
        beforeEach(() => {
            requestStub = sinon.stub(axios, "get").returns(Promise.resolve({ "data": { "data": true } }))
            fakeGetResponse = sinon.replace(utils, "getResponse", FAKE_FUNC)
        })
        afterEach(() => { sinon.restore() })

        it("should return get response", async () => {

            const res = await assets.get()

            expect(res['assets'].length).to.eq(2)
            expect(res['assets'][0]['_source']).to.eq(1)
        })
    })

    describe("getTerm", () => {
        let requestStub: any
        let fakeGetResponse: any
        beforeEach(() => {
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve({ "data": { "data": true } }))
            fakeGetResponse = sinon.replace(utils, "getResponse", FAKE_FUNC)
        })
        afterEach(() => { sinon.restore() })

        it("should return response", async () => {

            const res = await assets.getTerm("bar")
            expect(res['assets'].length).to.eq(2)
            expect(res['assets'][0]['_source']).to.eq(1)
        })
    })

    describe("getTypeTerm", () => {
        let requestStub: any
        let fakeGetResponse: any
        beforeEach(() => {
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve({ "data": { "data": true } }))
            fakeGetResponse = sinon.replace(utils, "getResponse", FAKE_FUNC)
        })
        afterEach(() => { sinon.restore() })

        it("should return response", async () => {
            const res = await assets.getTypeTerm("car", "video")
            expect(res['assets'].length).to.eq(2)
            expect(res['assets'][0]['_source']).to.eq(1)
        })
    })

    describe("similaritySearch", () => {
        let requestStub: any
        let fakeGetResponse: any
        beforeEach(() => {
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve(Request))
            fakeGetResponse = sinon.replace(utils, "getResponse", FAKE_FUNC)
        })
        afterEach(() => { sinon.restore() })

        it("should return getAll response", async () => {
            const res = await assets.similaritySearch("somehash")

            expect(res['assets'].length).to.eq(2)
            expect(res['scrollId']).to.eq("1234")
            expect(res['assets'][0]['_source']).to.eq(1)
        })

    })
})