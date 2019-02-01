console.log('min-max-sum');
console.log('Complete');

// Given 5 positive integers find the minimum and maximum sums using only 4 of them.

function arrayLooper(arr){
  let sumArray = new Array();
  arr.forEach( key => { sumArray.push(arr.reduce((acc, cur) => acc + cur)-key) });
  sumArray.sort();
  return [sumArray[0], sumArray[sumArray.length-1]];
};

function randomArrayGen(max, length){
  let testArray = [];
  for(i=0; i < length; i++){
    testArray.push(Math.floor(Math.random() * Math.floor(max)));
  };
  console.log(testArray);
  return testArray;
};

console.log(arrayLooper(randomArrayGen(3, 5)));

// .sort()
// .reduce()