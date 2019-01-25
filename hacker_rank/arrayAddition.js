console.log('arrayAddition');
console.log('Complete');

// Find the sum of a given array.

let testArray = [1, 2, 3, 4, 5];

function arrayAdder (array) {
  let output = 0;
  for ( num in array ) {
    output = output + array[num];
  }
  console.log(output);
}

arrayAdder(testArray);