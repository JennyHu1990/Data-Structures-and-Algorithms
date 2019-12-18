/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  soluction 1:Brute Force
var twoSum = function(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (target == nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};
//complexity:
//Time :O(n^2)；Space :O(1)

//solution 2: Hash Table
var twoSum = function(nums, target) {
  let map = new Map();
  for (var i = 0; i <= nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i);
  }
};
//complexity
//Time: O(n),space:O(n)
