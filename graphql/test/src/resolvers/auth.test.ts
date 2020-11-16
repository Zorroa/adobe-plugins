import fs from 'fs'
import {authorize, userAuthorization, InvalidApiKeyError} from '../../../src/resolvers/auth'
import {expect } from 'chai'
import {describe} from 'mocha'

describe('src.resolvers.auth', ()=>{    
    describe("authorize", ()=>{
        let args = {input: {
            zapiKey : encodeURIComponent(JSON.stringify({"accessKey": "key", "secretKey": "secret"})),
            projectId : "67890", 
            zapiServer : "https://dev.api.zvi.zorroa.com"
        }}
        beforeEach(()=>{

        })
        afterEach(()=>{
            if(fs.existsSync(process.env.USER_AUTH_FILE))
                fs.unlinkSync(process.env.USER_AUTH_FILE)
        })

        it("should write a user auth file", async ()=>{
            const res = authorize({}, args)
            console.log(res)
            expect(res['status']).to.eq("ok")
        })

        it("should generate SyntaxError", async ()=>{
            args["input"]['zapiKey'] = "invalid some key"

            const res = authorize({}, args)
            expect(res['status']).to.contain(SyntaxError)
        })

        it("should generate InvalidApiKeyError", async ()=>{
            args["input"]['zapiKey'] = encodeURIComponent(JSON.stringify({"missingKey": "key", "secretKey": "secret"}))

            const res = authorize({}, args)

            expect(res['status']).to.contain(InvalidApiKeyError)
        })
    })

    describe("userAuthorization", ()=>{
        it("should return empty params", async()=>{
            const res = await userAuthorization({}, {})
            expect(res['zapiServer']).to.eq("")
            expect(res['projectId']).to.eq("")
        })
        it("should contain values", async()=>{    
            fs.writeFileSync(process.env.USER_AUTH_FILE, JSON.stringify({"zapiServer":1, "projectId":2}))
            const {zapiServer, projectId} = await userAuthorization({}, {})
            expect(zapiServer).to.eq(1)
            expect(projectId).to.eq(2)
            fs.unlinkSync(process.env.USER_AUTH_FILE)
        })
    })
})