import { expect } from 'chai'
import axios from 'axios'
import sinon from 'sinon'
import request from '../../../src/zapi/request'

describe('src.resolvers.request', () => {
    const FAKE_FUNC = sinon.fake.returns("data")
    beforeEach(() => {
        sinon.replace(axios, "get", FAKE_FUNC)
        sinon.replace(axios, "post", FAKE_FUNC)
        sinon.replace(axios, "put", FAKE_FUNC)
        sinon.replace(axios, "request", FAKE_FUNC)
    })
    afterEach(() => {
        sinon.restore()
    })
    it("should return get data", async () => {
        const res = await request.get("myurl")
        expect(res).to.eq('data')
    })

    it("should return post data", async () => {
        const res = await request.post("myurl", {})
        expect(res).to.eq('data')
    })

    it("should return put data", async () => {
        const res = await request.put("myurl", {})
        expect(res).to.eq('data')
    })
    it("should return delete data", async () => {
        const res = await request.delete("myurl", {})
        expect(res).to.eq('data')
    })
})
describe("src.resolvers.request Errors", () => {
    const FAKE_ERROR = sinon.fake.returns(new Error("ERROR"))
    beforeEach(() => {
        sinon.replace(axios, "get", FAKE_ERROR)
        sinon.replace(axios, "post", FAKE_ERROR)
        sinon.replace(axios, "put", FAKE_ERROR)
        sinon.replace(axios, "request", FAKE_ERROR)
    })

    afterEach(() => {
        sinon.restore()
    })
    it("should return get error", async () => {
        const res = await request.get("myurl")
        expect(res.message).to.eq("ERROR")
    })
    it("should return post error", async () => {
        const res = await request.post("myurl", {})
        expect(res.message).to.eq("ERROR")
    })
    it("should return put error", async () => {
        const res = await request.put("myurl", {})
        expect(res.message).to.eq("ERROR")
    })
    it("should return delete error", async () => {
        const res = await request.delete("myurl", {})
        expect(res.message).to.eq("ERROR")
    })
})