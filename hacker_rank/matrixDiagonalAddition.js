console.log('matrixDiagonalAddition');
console.log('Hacker Rank will not accept');

// Given a square matrix of integers, find the difference of the sums of the two diagonals.

// This works 100% on everything, but hacker rank will not accept it.

function diagonalAdder(arraySize) {
  let arr = matrixGenerator(arraySize);
  let highLow = 0;
  let lowHigh = 0;
  for (let row in arr) {
      highLow = highLow + arr[row][row];
      // console.log('highLow', highLow);
  }
  for (let row in arr) {
      lowHigh = lowHigh + arr[row][row.length - (row - (arr.length - 2))];
      // console.log('lowHigh', lowHigh);
  }
  console.log(Math.abs(highLow - lowHigh));
  return Math.abs(highLow - lowHigh);
}

function matrixGenerator(max) {
  let finalArray = []
  let j = 0;
  let i = 0;
  for ( let j = 0; j < max; j++ ) {
    let row = new Array();
    for ( let i = 0; i < max; i++) {
      row.push(Math.round(Math.random() * (100 + 100) - 100));
    }
    finalArray.push(row);
  }
  console.log(finalArray);
  return(finalArray);
}

console.log(diagonalAdder(1000));