const expect = require('expect')
const add = require('./add')

describe('add function', () =>{
    it('should return 2 when 1 + 1', (next) =>{
        expect(add(1,1)).toEqual(2)
        next()
    })
})

