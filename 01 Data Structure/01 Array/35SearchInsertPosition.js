//Binary Search
var searchInsert = function(nums, target) {
  if (nums[nums.length - 1] < target) {
    return nums.length;
  } else if (nums.length == 0) {
    return 0;
  }
  var left = 0;
  var right = nums.length - 1;
  while (left < right) {
    var mid = (left + right) >>> 1;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

searchInsert([1, 3, 5, 6], 4);

//loop all the possibility
if (nums[0] > target) {
  return 0;
}
for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= target) {
    return i;
  }
}
return nums.length;
c;
