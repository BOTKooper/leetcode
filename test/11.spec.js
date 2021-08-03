//@ts-check
const func = require('../solves/11');
const { testVal } = require('./helpers');

describe('#11', () => {
    it("[1,8,6,2,5,4,8,3,7]", () => {
        testVal(func, [1,8,6,2,5,4,8,3,7], 49);
    })

    it("[1,1]", () => {
        testVal(func, [1,1], 1);
    })

    it("[4,3,2,1,4]", () => {
        testVal(func, [4,3,2,1,4], 16);
    })

    it("[1,2,1]", () => {
        testVal(func, [1,2,1], 2);
    })

    it('[1,8,6,2,5,4,8,25,7]', () => {
        testVal(func, [1,8,6,2,5,4,8,25,7], 49);
    })
})