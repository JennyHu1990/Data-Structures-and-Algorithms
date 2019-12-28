/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  var stack = [];
  var start = 0;
  var end = 0;
  var flag = false;
  var ans = "";
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      stack.push(S[i]);
      if (!flag) {
        start = i;
        flag = true;
      }
    } else {
      stack.pop(S[i]);
      if (stack.length == 0) {
        end = i;
        ans += S.substring(start + 1, end);
        flag = false;
        start = end + 1;
      }
    }
  }
  return ans;
};
