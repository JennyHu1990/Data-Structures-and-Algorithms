/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i + 1] == nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }
};

// complexity
//time: T(n); space:O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var i = 0;
  for (j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
