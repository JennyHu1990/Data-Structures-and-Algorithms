/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var prime = new Array(n + 1);
  prime.fill(true);
  for (let divisor = 2; divisor * divisor < n; divisor++) {
    if (prime[divisor]) {
      for (let i = 2 * divisor; i < n; i = i + divisor) {
        prime[i] = false;
      }
    }
  }
  var count = 0;
  for (let i = 2; i < n; i++) {
    if (prime[i]) {
      count++;
    }
  }
  return count;
};
// @lc code=end
