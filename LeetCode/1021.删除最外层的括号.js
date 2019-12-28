/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  var count = 1;
  var result = "";
  for (let i = 0; i < S.length; i++) {
    if (count == 0) {
      i += 2;
      count += 1;
      result += S[i];
    }
    if (S[i] == "(") {
      count++;
      console.log(count);
    } else {
      count--;
      console.log(count);
    }
  }
  return result;
};
// @lc code=end
