//@ts-check
const func = require('../solves/8');
const { testVal } = require('./helpers');

describe('#8', () => {
    it("1", () => {
        testVal(func, '1', 1);
    })
    it("-1", () => {
        testVal(func, '-1', -1);
    })
    it("  1  ", () => {
        testVal(func, '  1  ', 1);
    })
    it("  -1  ", () => {
        testVal(func, '  -1  ', -1);
    })
    it("100", () => {
        testVal(func, '100', 100);
    })
    it("-100", () => {
        testVal(func, '-100', -100);
    })
    it(" abc 1", () => {
        testVal(func, ' abc 1', 0);
    })

    it(" 32 abc 1", () => {
        testVal(func, ' 32 abc 1', 32);
    })

    it("4193 with words", () => {
        testVal(func, '4193 with words', 4193)
    })

    it("words and 987", () => {
        testVal(func, 'words and 987', 0);
    })

    it("   +0 123", () => {
        testVal(func, ' +0 123', 0)
    })
})