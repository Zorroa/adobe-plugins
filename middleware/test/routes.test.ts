import {expect } from 'chai'
import {mockReq, mockRes} from 'sinon-express-mock'
import {describe} from 'mocha'
import {genToken} from '../src/routes'

describe('src.routes', ()=>{    
    describe("genToken", ()=>{
        it("should return request with token", async()=>{
            const req = mockReq({})
            const res = mockRes()
            genToken(req, res, ()=>{})
            expect(req['zmlpHeader']).to.have.keys("Content-Type", "Authorization")
        })
    })
})