import chai, {expect } from 'chai'
import sinonChai from 'sinon-chai'
import {mockReq, mockRes} from 'sinon-express-mock'
import {describe} from 'mocha'
import sinon from 'sinon'
import axios from 'axios'
import * as utils from '../../src/controllers/utils'
import assets from '../../src/controllers/assets'

chai.use(sinonChai);

const REQUEST = {body: {foo: 'bar'}, params: {hash: "12345"}}
const FAKE_FUNC = sinon.fake.returns("hello")

describe('src.controllers.assets', ()=>{    
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
            const res = mockRes()

            await assets.get(req, res, {})
            expect(res.json).to.be.calledWith("hello2")
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
            const res = mockRes()

            await assets.getTerm(req, res, {})
            expect(res.json).to.be.calledWith('hello')
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
            const res = mockRes()

            await assets.getTypeTerm(req, res)
            expect(res.json).to.be.calledWith('hello')
        })
    })

    describe("similaritySearch", ()=>{
        let requestStub:any
        let getAll:any
        const fakeFunc = sinon.fake.returns(REQUEST)
        beforeEach(()=>{
            requestStub = sinon.stub(axios, "post").returns(Promise.resolve(REQUEST))
            getAll = sinon.replace(utils, "getAll", fakeFunc)
        })
        afterEach(()=>{sinon.restore()})
        
        it("should return getAll response", async()=>{
            const req = mockReq(REQUEST)
            const res = mockRes()

            await assets.getTypeTerm(req, res)
            
            expect(res.json).to.be.calledWith(REQUEST)
        })
    })
})
