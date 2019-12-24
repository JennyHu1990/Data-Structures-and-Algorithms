/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//only find the length
var removeElement = function(nums, val) {
  var k = nums.length;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      k--;
    }
  }
  return k;
};

//

var removeElement = function(nums, val) {
  var j = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

//
var removeElement = function(nums, val) {
  let j = nums.length;

  for (let i = 0; i < j; ) {
    if (nums[i] == val) {
      nums[i] = nums[j - 1];
      j--;
    } else {
      i++;
    }
  }
  return j;
};
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
