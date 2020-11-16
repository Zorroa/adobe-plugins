import sinon from 'sinon'
import {file, clearCache} from '../../../src/resolvers/file'
import zfile from '../../../src/zapi/file'
import fs from 'fs'
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

    describe("clearCache", ()=>{
        let env:any
        const tmpDir:any = __dirname+"/public"
        beforeEach(()=>{
            env = process.env
            if(!fs.existsSync(tmpDir))
                fs.mkdirSync(tmpDir)
            fs.openSync(tmpDir+'/testfile.txt', 'w')
            process.env.PUBLIC_FOLDER = tmpDir
        })
        afterEach(()=>{
            if(fs.existsSync(tmpDir))
                fs.rmdirSync(tmpDir, {recursive: true})

            process.env = env
        })

        it("should return filepath", async ()=>{
            const res = await clearCache({}, {})
            
            expect(res).to.have.keys(["total","deletedFiles","authFile"])
            expect(res['total']).to.eq(1)
            expect(res['deletedFiles'][0]).to.eq("testfile.txt")
        })
    })
})