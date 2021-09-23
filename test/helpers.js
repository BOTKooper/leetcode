//@ts-check
const assert = require('assert');

const testVal = (func, val, exp) => {
    const res = func(val);
    expect(res).toEqual(exp);
    return res;
}

module.exports = {
    testVal
}
