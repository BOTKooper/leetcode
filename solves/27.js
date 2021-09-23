//@ts-check

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    nums.forEach((n, idx) => {
        if (n === val) {
            nums.splice(idx, 1);
            removeElement(nums, val);
        }
    })
    return nums.length;
};

module.exports = removeElement
