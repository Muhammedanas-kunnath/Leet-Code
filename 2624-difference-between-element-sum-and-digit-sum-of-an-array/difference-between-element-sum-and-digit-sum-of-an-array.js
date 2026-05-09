/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

    let sum = 0;
    let digitSum = 0;

    for(let i = 0; i < nums.length; i++) {

        sum = sum + nums[i];

        let num = nums[i].toString();

        for(let j = 0; j < num.length; j++) {
            digitSum = digitSum + Number(num[j]);
        }
    }

    return Math.abs(sum - digitSum);
};