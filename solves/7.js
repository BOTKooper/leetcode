//@ts-check

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const isNegative = x < 0;
    const positive = isNegative ? -x : x;
    const str = String(positive);
    const rev = str.split("").reverse().join('');

    const revInt = Number(rev);

    if(revInt > Math.pow(2, 31)-1) {return 0}

    return isNegative ? -revInt : revInt
};

console.log(reverse(123));
console.log(reverse(-123));