/**
 * @param {number[]} nums
 * @return {number}
 */
//solution 1
var maxSubArray = function(nums) {
  var thisSum = 0;
  var maxSum = nums[0];
  for (i = 0; i < nums.length; i++) {
    thisSum = 0;
    for (j = i; j < nums.length; j++) {
      thisSum += nums[j];
      if (thisSum > maxSum) {
        maxSum = thisSum;
      }
    }
  }

  return maxSum;
};

//time: O(n^2)

//dynamic programming
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    sum = sum > 0 ? sum + nums[i] : nums[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};
