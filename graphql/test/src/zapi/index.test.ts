import {expect} from 'chai'
import {describe} from 'mocha'
import {genToken} from '../../../src/zapi'
import config from '../../../config/config'

const HEADER = {"headers": {"Authorization": "Bearer TOKEN"}}
describe('src.zapi.utils', ()=>{
    describe("similarityQuery", ()=>{
        beforeEach(()=>{
            config['zapiServer'] =  "server"
            config['projectId'] = "12334"
            config['zapiKey'] = {accessKey: "1234", secretKey:"5678"}
        })

        it("should return object with Content-Type & Authorization", ()=>{
            const res = genToken()
            expect(res).to.haveOwnProperty("Content-Type")
            expect(res).to.haveOwnProperty("Authorization")
        })
    })
})