import sinon from 'sinon'
import {file} from '../../../src/resolvers/file'
import zfile from '../../../src/zapi/file'
import {expect } from 'chai'
import {describe} from 'mocha'

describe('src.resolvers.file', ()=>{    
    describe("file", ()=>{
        const filePath = "http://localhost/fakepath.jpg"
        beforeEach(()=>{
            sinon.stub(zfile, "download").returns(Promise.resolve(filePath))
        })
        afterEach(()=>{
            sinon.restore()
        })

        it("should return filepath", async ()=>{
            const res = await file({}, {input: {id: "1"}})
            expect(res).to.have.key("filePath")
            expect(res['filePath']).to.eq(filePath)
        })

    })
})