var arr = [
  123,
  123,
  12,
  123123123,
  3,
  44,
  346,
  123123,
  123,
  567,
  567,
  4123,
  3,
  123,
  12,
  312,
  3124,
  123123123123123,
  235234234,
  234234234,
  2342
];

//01. Bubble Sort

// Time complexity
//worst-case : O(n2); best: 0(n), average: O(n)
//Space complexity:O(1)
//Stable
// Situation
// arr.lengt<=1,000

function bubbleSort(arr) {
  console.time("bubbleSort");
  if (arr == null || arr.length == 0) {
    return;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.timeEnd("bubbleSort");
  return arr;
}
// console.log(bubbleSort(arr));

//02.Selection Sort

// Time complexity
// worst-case,best,average : O(n2);
// Space complexity
// O(1)
function selectionSort(arr) {
  console.time("SelectionSort");
  for (let i = 0; i < arr.length; i++) {
    var minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.timeEnd("SelectionSort");
  return arr;
}
// console.log(selectionSort(arr));

//03
//Insertion Sort
// worst-case : O(n2); best: 0(n), average: O(n)
//space Complexity:O(1)
//Stable

function insertionSort(arr) {
  console.time("insertionSort");

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.timeEnd("insertionSort");
  return arr;
}

// console.log(insertionSort(arr));

//04 shell sorting
//worst-case : O(n2); best: 0(nlog2n), average: O(n)
//Space complexity:O(1)
//Stable

function shellSort(arr) {
  console.time("shellSort");

  for (
    var fraction = Math.floor(arr.length / 2);
    fraction > 0;
    fraction = Math.floor(fraction / 2)
  ) {
    for (let i = fraction; i < arr.length; i++) {
      for (
        let j = i - fraction;
        j >= 0 && arr[j] > arr[fraction + j];
        j = j - fraction
      ) {
        var temp = arr[j];
        arr[j] = arr[j + fraction];
        arr[fraction + j] = temp;
      }
    }
  }
  console.timeEnd("shellSort");

  return arr;
}
console.log(shellSort(arr));
