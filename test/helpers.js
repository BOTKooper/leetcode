//@ts-check
const assert = require('assert');

const testVal = (func, val, exp) => {
    expect(func(val)).toEqual(exp);
}

module.exports = {
    testVal
}