//@ts-check
const func = require('../solves/26');
const { testVal } = require('./helpers');

describe('#26', () => {
    it('[1,1,2]', () => {
      const arr = [1,1,2]
        testVal(func, arr, [1,2].length);
        expect(arr).toEqual([1,2])
    })

    it('[0,0,1,1,1,2,2,3,3,4]', () => {
      const arr = [0,0,1,1,1,2,2,3,3,4]
        testVal(func, arr, [0,1,2,3,4].length);
        expect(arr).toEqual([0,1,2,3,4])
    })

})
