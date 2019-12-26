/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var prime = new Array(n + 1);
  prime.fill(true);
  for (let divisor = 2; divisor * divisor < n; divisor++) {
    let count = 0;
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

//time complexity:O(n*log(log n)) space:O(n)
