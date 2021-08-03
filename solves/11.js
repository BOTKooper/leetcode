//@ts-check

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max = 0;
    let left = 0; 
    let right = height.length -1; 
    
    while(left <= right){
        const width = right - left
        const minHeight = Math.min(height[left], height[right])
        let area = width * minHeight
        max = Math.max(area, max); 
        if(height[left] < height[right]){
            left++
        } else {
            right--
        }
    }
    return max
};

module.exports = maxArea;