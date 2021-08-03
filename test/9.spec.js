//@ts-check
const func = require('../solves/9');
const { testVal } = require('./helpers');

describe('#8', () => {
    it("1", () => {
        testVal(func, '1', true);
    })
    it("-1", () => {
        testVal(func, '-1', false);
    })

    it("132333231", () => {
        testVal(func, '132333231', true)
    })

    it("1323332310", () => {
        testVal(func, '1323332310', false)
    })
})