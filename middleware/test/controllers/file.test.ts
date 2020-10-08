import chai, {expect } from 'chai'
import sinonChai from 'sinon-chai'
import {mockReq, mockRes} from 'sinon-express-mock'
import {describe} from 'mocha'
import sinon from 'sinon'
import axios from 'axios'
import fs from 'fs'
import file from '../../src/controllers/file'

chai.use(sinonChai);

const REQUEST = {params: {id: "assets/X7hPz_DHMPa1b9_Td19B1DZx-PliMiPc/proxy/image_1280x816.jpg"}}
const FAKE_FUNC = sinon.fake()

describe('src.controllers.file', ()=>{    
    describe("download", ()=>{
        let requestStub:any
        beforeEach(()=>{
            requestStub = sinon.stub(axios, "get").returns(Promise.resolve({data: {"pipe": function(){}}}))
            sinon.replace(fs, "createWriteStream", FAKE_FUNC)
        })
        afterEach(()=>{sinon.restore()})

        it("should return filepath", async()=>{
            const req = mockReq(REQUEST)
            const res = mockRes()

            await file.download(req, res, {})
            
            expect(res.json).to.be.calledWith({filePath: "./public/X7hPz_DHMPa1b9_Td19B1DZx-PliMiPc-image_1280x816.jpg"})
        })
    })
})