//@ts-check
const func = require('../solves/14');
const { testVal } = require('./helpers');

describe('#11', () => {
    it('["flower","flow","flight"]', () => {
        testVal(func, ["flower","flow","flight"], "fl")
    })

    it('["dog","racecar","car"]', () => {
        testVal(func, ["dog","racecar","car"], '');
    })

    it('[""]', () => {
        testVal(func, [""], "")
    })

    it('["a"]', () => {
        testVal(func, ["a"], "a")
    })
})