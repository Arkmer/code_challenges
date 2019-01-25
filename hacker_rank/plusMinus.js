console.log('plusMinus');
console.log('Complete');

// Given an array of numbers, return 3 values.
// 1. The decimal percentage of positive numbers in the array.
// 2. The decimal percentage of negative numbers in the array.
// 3. The decimal percentage of zeros in the array.

console.log(plusMinus(100))

function plusMinus(x) {
  let arr = arrayGenerator(x);
  console.log(arr);
  let totals = new Object();
  let output = new Array();
  for(let num in arr) {
    if (arr[num] > 0) { totals.pos == null ? totals.pos = 1 : totals.pos++ }
    else if (arr[num] < 0) { totals.neg == null ? totals.neg = 1 : totals.neg++ }
    else if (arr[num] == 0) { totals.zer == null ? totals.zer = 1 : totals.zer++ }
    totals.tot == null ? totals.tot = 1 : totals.tot++;
  };
  console.log(totals);
  output.push(
    Number.isNaN(totals.pos/totals.tot) ? 0 : totals.pos/totals.tot,
    Number.isNaN(totals.neg/totals.tot) ? 0 : totals.neg/totals.tot,
    Number.isNaN(totals.zer/totals.tot) ? 0 : totals.zer/totals.tot,
  );
  return output;
};

function arrayGenerator(arraySize) {
  let i = 0;
  let array = [];
  while(i < arraySize) {
    array.push(Math.round(Math.random() * (2 + 2) - 2))
    i++;
  }
  return array;
}