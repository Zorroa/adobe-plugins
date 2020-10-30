import chai, {expect } from 'chai'
import sinonChai from 'sinon-chai'
import {mockReq} from 'sinon-express-mock'
import {describe} from 'mocha'
import sinon from 'sinon'
import axios from 'axios'
import * as utils from '../../../src/zapi/utils'
import assets from '../../../src/zapi/assets'

chai.use(sinonChai);

const REQUEST = {body: {foo: 'bar'}, params: {hash: "12345"}}
const FAKE_FUNC = sinon.fake.returns([{_source: 1}, {_source: 2}])

describe('src.zapi.assets', ()=>{    
    describe("get", ()=>{
        let requestStub:any
        let getAll:any
        beforeEach(()=>{
            requestStub = sinon.stub(axios, "get").returns(Promise.resolve({"data": {"data":true}}))
            getAll = sinon.replace(utils, "getAll", FAKE_FUNC)
        })
        afterEach(()=>{sinon.restore()})

        it("should return getAll response", async()=>{
            const req = mockReq(REQUEST)

            const res = await assets.get(req)
            
            expect(res.length).to.eq(2)
            expect(res).to.contain(1)
            expect(res).to.contain(2)
        })
    })

    describe("getTerm", ()=>{
        let requestStub:any
        let getAll:any
        beforeEach(()=>{
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve({"data": {"data":true}}))
            getAll = sinon.replace(utils, "getAll", FAKE_FUNC)
        })
        afterEach(()=>{sinon.restore()})
        
        it("should return getAll response", async()=>{
            const req = mockReq(REQUEST)

            const res = await assets.getTerm(req)
            expect(res.length).to.eq(2)
            expect(res).to.contain(1)
            expect(res).to.contain(2)
        })
    })

    describe("getTypeTerm", ()=>{
        let requestStub:any
        let getAll:any
        beforeEach(()=>{
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve({"data": {"data":true}}))
            getAll = sinon.replace(utils, "getAll", FAKE_FUNC)
        })
        afterEach(()=>{sinon.restore()})
        
        it("should return getAll response", async()=>{
            const req = mockReq(REQUEST)

            const res = await assets.getTypeTerm(req)
            expect(res.length).to.eq(2)
            expect(res).to.contain(1)
            expect(res).to.contain(2)
        })
    })

    describe("similaritySearch", ()=>{
        let requestStub:any
        let getAll:any

        beforeEach(()=>{
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve(REQUEST))
            getAll = sinon.replace(utils, "getAll", FAKE_FUNC)
        })
        afterEach(()=>{sinon.restore()})
        
        it("should return getAll response", async()=>{
            const req = mockReq(REQUEST)

            const res = await assets.getTypeTerm(req)

            expect(res.length).to.eq(2)
            expect(res).to.contain(1)
            expect(res).to.contain(2)
        })
    })
})