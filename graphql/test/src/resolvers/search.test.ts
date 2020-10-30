import sinon from 'sinon'
import {
    downloadThumbnail,
    getTumbnail,
    search,

} from '../../../src/resolvers/search'
import zfile from '../../../src/zapi/file'
import zassets from '../../../src/zapi/assets'
import {expect } from 'chai'
import {describe} from 'mocha'

describe('src.resolvers.search', ()=>{    
    describe("downloadThumbnail", ()=>{
        const filePath = "http://localhost/fakepath.jpg"
        beforeEach(()=>{
            sinon.stub(zfile, "download").returns(Promise.resolve(filePath))
        })
        afterEach(()=>{
            sinon.restore()
        })

        it("should return filepath", async ()=>{
            const res = await downloadThumbnail({})
            expect(res).to.eq(filePath)
        })

    })

    describe("getTumbnail", ()=>{
        const assets = [
            {"files": [{
              "size": 170688,
              "name": "web-proxy.jpg",
              "mimetype": "image/jpeg",
              "id": "assets/u1RZTVydMbIemfaext2kRCcrN6NNeYJr/web-proxy/web-proxy.jpg",
              "category": "web-proxy",
              "attrs": {
                "width": 1024,
                "height": 1024
              }
            }]}
          ]
        const filePath = "http://localhost/fakepath.jpg"
        const FAKE_FUNC = sinon.fake.returns(new Promise((res, rej)=>{res(filePath)}))
        beforeEach(()=>{
            // sinon.stub(zfile, "download").returns(Promise.resolve(filePath))
            sinon.replace(zfile, "download", FAKE_FUNC)
        })
        afterEach(()=>{
            sinon.restore()
        })

        it("should return asset with thumbnail path", async()=>{
            const res = await getTumbnail(assets, {params: {id: ""}})
            Promise.all(res).then(data=>{
                expect(data[0]['id']).to.eq("u1RZTVydMbIemfaext2kRCcrN6NNeYJr")
                expect(data[0]['thumbnail']).to.eq("http://localhost/fakepath.jpg")
            })
            
        })

    })
    
    describe("search typeterm", ()=>{
        const FAKE_FUNC = sinon.fake.returns([1,2,3])
        const args = {input:{
            term: "car",
            type: "video",
            getThumbnail: false
        }}
        beforeEach(()=>{
            sinon.replace(zassets, "getTypeTerm", FAKE_FUNC)
        })
        afterEach(()=>{
            sinon.restore()
        })

        it("should return assets", async()=>{
            const res = await search({}, args)
            expect(res).to.haveOwnProperty('assets')
            expect(res['assets']).to.contain(1)
            expect(res['assets']).to.contain(2)
            expect(res['assets']).to.contain(3)
        })
    })

    describe("search term", ()=>{
        const FAKE_FUNC = sinon.fake.returns([1,2,3])
        const args = {input:{
            term: "car",
            getThumbnail: false
        }}
        beforeEach(()=>{
            sinon.replace(zassets, "getTerm", FAKE_FUNC)
        })
        afterEach(()=>{
            sinon.restore()
        })

        it("should return assets", async()=>{
            const res = await search({}, args)
            expect(res).to.haveOwnProperty('assets')
            expect(res['assets']).to.contain(1)
            expect(res['assets']).to.contain(2)
            expect(res['assets']).to.contain(3)
        })

    })
})