import {expect} from 'chai'
import {describe} from 'mocha'

describe('index', ()=>{
    it('should return', ()=>{
        const result = "Hello World!"
        expect(result).to.equal("Hello World!")
    })
})
