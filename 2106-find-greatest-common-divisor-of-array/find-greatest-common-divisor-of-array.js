/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {

    let min = nums[0];
    let max = nums[0];


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }

        if (nums[i] > max) {
            max = nums[i];
        }
    }

    for (let i = min; i >= 1; i--) {
        if (min % i === 0 && max % i === 0) {
            return i;
        }
    }

};