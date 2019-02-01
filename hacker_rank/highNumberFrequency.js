console.log('highNumberFrequency');
console.log('Complete');

// Find the number of times the highest number is used in an array.

function arrayLooper(arr){
  let highNumberFrequency = 0;
  let max = Math.max(...arr)
  arr.forEach( num => num == max ? highNumberFrequency++ : null );
  return highNumberFrequency;
};

function randomArrayGen(max, length){
  let testArray = [];
  for(let i=0; i < length; i++){
    testArray.push(Math.floor(Math.random() * Math.floor(max)));
  };
  console.log(testArray.sort((a, b) => a - b));
  return testArray;
};

console.log(arrayLooper(randomArrayGen(3, 100)));

function averageFinder(times){
  let compiledArray = new Array();
  for(let i=0; i<times; i++){
    compiledArray.push(arrayLooper(randomArrayGen(3, 100)))
  };
  console.log(compiledArray);
  return compiledArray.reduce((acc, cur) => acc + cur)/times;
};

// Comment out some of the console.log()s before using this.
// console.log(averageFinder(100));