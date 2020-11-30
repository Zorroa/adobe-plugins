import { expect } from 'chai'
import axios from 'axios'
import sinon from 'sinon'
import zData from '../../data/zviAssets'
import request from '../../../src/zapi/request'

describe('src.resolvers.request', () => {
    const FAKE_NET_RES = sinon.fake.returns(zData)
    const FAKE_NET_ERROR = sinon.fake.returns(new Error("network error"))

    afterEach(() => {
        sinon.restore()
    })
    describe("get", ()=>{
        it("should return data", async () => {
            sinon.replace(axios, "get", FAKE_NET_RES)
    
            const res = await request.get("uri")
    
            expect(res).to.contain.keys("data")
            expect(res['data']).to.contain.keys("_scroll_id", "took", "timed_out", "_shards", "hits")
        })
    
        it("should return error", async () => {
            sinon.replace(axios, "get", FAKE_NET_ERROR)
    
            const res = await request.get("uri")
            expect(res).to.be.an("error")
        })
    })

    describe("post", ()=>{
        it("should return data", async () => {
            sinon.replace(axios, "post", FAKE_NET_RES)

            const res = await request.post("uri", {})
            expect(res).to.contain.keys("data")
            expect(res['data']).to.contain.keys("_scroll_id", "took", "timed_out", "_shards", "hits")
        })

        it("should return error", async () => {
            sinon.replace(axios, "post", FAKE_NET_ERROR)

            const res = await request.post("uri", {})
            expect(res).to.be.an("error")
        })
    })

    describe("put", ()=>{
        it("should return data", async () => {
            sinon.replace(axios, "put", FAKE_NET_RES)

            const res = await request.put("uri", {})

            expect(res).to.contain.keys("data")
            expect(res['data']).to.contain.keys("_scroll_id", "took", "timed_out", "_shards", "hits")
        })

        it("should return error", async () => {
            sinon.replace(axios, "put", FAKE_NET_ERROR)

            const res = await request.put("uri", {})
            expect(res).to.be.an("error")
        })
    })

    describe("delete", ()=>{
        it("should return data", async () => {
            sinon.replace(axios, "request", FAKE_NET_RES)

            const res = await request.delete("uri", {})

            expect(res).to.contain.keys("data")
            expect(res['data']).to.contain.keys("_scroll_id", "took", "timed_out", "_shards", "hits")
        })

        it("should return error", async () => {
            sinon.replace(axios, "request", FAKE_NET_ERROR)

            const res = await request.delete("uri", {})
            expect(res).to.be.an("error")
        })
    })

})
