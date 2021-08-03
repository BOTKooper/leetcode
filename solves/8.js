//@ts-check

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let trimmed = s.trim();
    let isPositive = true
    let res = 0;
    if(Number.isInteger(Number(s[0])) || ['-', '+'].includes(trimmed[0])) {
        if(['-', '+'].includes(trimmed[0])) {
            if(trimmed[0] === '-') {
                isPositive = false;
            }
            trimmed = trimmed.slice(1);
        }
        let hasNumber = false;
        for(let i = 0; i < trimmed.length; i++) {
            if(trimmed[i] !== ' ' && Number.isInteger(Number(trimmed[i]))) {
                hasNumber = true;
            }
            else if( trimmed[i] === ' ') {
                if(hasNumber) {
                    trimmed = trimmed.slice(0, i);
                    break;
                } else {
                    return 0;
                }
            } else {
                if(hasNumber) {
                    trimmed = trimmed.slice(0, i);
                    break;
                } else {
                    return 0;
                }
            }
        }

        res = Number(trimmed);
    }

    if(res > Math.pow(2, 31) -1) {
        return isPositive ?
            Math.pow(2, 31) - 1 
            :
            -Math.pow(2, 31);
    }
    return isPositive ? res : -res;
};

module.exports = myAtoi