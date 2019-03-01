console.log('matrixDiagonalAddition');
console.log('Complete');

// Given a square matrix of integers, find the difference of the sums of the two diagonals.

// This works 100% on everything, but hacker rank will not accept it.

function diagonalAdder(arraySize) {
  let arr = matrixGenerator(arraySize);
  let highLow = 0;
  let lowHigh = 0;
  for (let row of arr) {
    let i = arr.indexOf(row);
    highLow = highLow + arr[i][i];
  }
  for (let row of arr) {
    let i = arr.indexOf(row);
    lowHigh = lowHigh + arr[i][arr.length - (i + 1)];
  }
  console.log('highLow', highLow);
  console.log('lowHigh', lowHigh);
  return Math.abs(highLow - lowHigh);
}

function matrixGenerator(max) {
  let finalArray = []
  let j = 0;
  let i = 0;
  for (let j = 0; j < max; j++) {
    let row = new Array();
    for (let i = 0; i < max; i++) {
      row.push(Math.round(Math.random() * (1000 + 1000) - 1000));
    }
    finalArray.push(row);
  }
  console.log(finalArray);
  return (finalArray);
}

console.log(diagonalAdder(1000));

function averageFinder(times, matrixSize) {
  let compiledArray = new Array();
  for (let i = 0; i < times; i++) {
    compiledArray.push(diagonalAdder(matrixSize))
  };
  console.log(compiledArray);
  return compiledArray.reduce((acc, cur) => acc + cur) / times;
};

// console.log(averageFinder(1000, 6));