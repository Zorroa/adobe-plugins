import {expect} from 'chai'
import {describe} from 'mocha'
import sinon from 'sinon'
import axios from 'axios'
import * as utils from '../../../src/zapi/utils'

const HEADER = {"headers": {"Authorization": "Bearer TOKEN"}}

describe('src.zapi.utils', ()=>{
    describe("similarityQuery", ()=>{
        const sim:object = utils.similarityQuery("12345")
        it("should return 1 list item", ()=>{
            expect(sim['script_score']['script']['params']['hashes'].length).to.equal(1)
        })
        it("should return hash", ()=>{
            expect(sim['script_score']['script']['params']['hashes'][0]).to.equal('12345')
        })
    })

    describe("deleteScrollId", async ()=>{
        let requestStub:any
        beforeEach(()=>{
            requestStub = sinon.stub(axios, "request").returns(Promise.resolve({"data": {"data":true}}))
        })
        afterEach(()=>{
            requestStub.restore()
        })        

        it("should have data object", async ()=>{    
            const res = await utils.deleteScrollId("12345", HEADER)
            expect(res).to.have.key("data")
        })
        it("should contain true", async ()=>{    
            const res = await utils.deleteScrollId("12345", HEADER)
            expect(res["data"]).to.equal(true)
        })
    })

    describe("scroll", async ()=>{
        const SCROLL_ID:string = "123456"
        let requestStub:any
        let response:object = {"data": {"_scroll_id":SCROLL_ID, "hits":{"hits":[1,2,3]}}}
        beforeEach(()=>{
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve(response))
        })
        afterEach(()=>{
            requestStub.restore()
        })        

        it("should have keys _scroll_id & hits", async ()=>{    
            const res = await utils.scroll(SCROLL_ID, HEADER)
            expect(res['data']).to.have.keys("_scroll_id", "hits")
            expect(res['data']["_scroll_id"]).to.equal(SCROLL_ID)
        })

    })
})