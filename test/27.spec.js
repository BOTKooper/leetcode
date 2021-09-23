//@ts-check
const func = require('../solves/27');
const { testVal } = require('./helpers');

describe('#27', () => {
    it('[3,2,2,3], 3', () => {
      const arr = [3,2,2,3]
        const r = func(arr, 3);
        expect(r).toBe(2);
        expect(arr).toEqual([2,2])
    })

    it('[0,1,2,2,3,0,4,2], 2', () => {
      const arr = [0,1,2,2,3,0,4,2]
        const r = func(arr, 2);
        expect(r).toBe(5);
        expect(arr).toEqual([0,1,3,0,4])
    })

})
