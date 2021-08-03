//@ts-check

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    if(x < 10) {
        return true;
    }
    const str = String(x);
    
    for(let i = 0; i < str.length; i++) {
        if(str.length - 1 - i < i) {
            return true;
        }
        if(str[i] !== str[str.length -i -1]) {
            return false;
        }
    }
};


module.exports = isPalindrome;