/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var number = new Array();
  for (var i = 0; i < numRows; i++) {
    number[i] = new Array();
    number[i][0] = 1;
    for (var j = 1; j < i; j++) {
      number[i][j] = number[i - 1][j - 1] + number[i - 1][j];
    }
    number[i][i] = 1;
  }
  return number;
};
//complexity:
//Time :O(n^2)；Space :O(n^2)
