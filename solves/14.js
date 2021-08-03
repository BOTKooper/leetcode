//@ts-check

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const minStr = strs.reduce((acc, str) => (acc.length === 0 ||  str.length < acc.length) ? str : acc, '');
    const minLength = minStr.length;
    let prevPrefix = '';
    let prefix = ''
    let idx = 0;
    while(prefix.length <= minLength) {
        const all = strs.every((el) => el.startsWith(prefix));
        if(all) {
            prevPrefix = prefix;
        } else {
            return prevPrefix;
        }
        if(!minStr[idx]) {
            break;
        }
        prefix += minStr[idx];
        idx++;
    }
    return prefix;
};

module.exports = longestCommonPrefix;