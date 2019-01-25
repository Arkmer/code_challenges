console.log('fizzBuzz');

// If X is divisible by 3 return 'Fizz'.
// If X is divisible by 5 return 'Buzz'.
// If X is divisible by 3 and 5 return 'FizzBuzz'.

// A switch statement will not work here. It will always evaluate to default.

functionRepeater(10);

function fizzBuzzIf(x) {
  if (x % 3 && x % 5 == 0) {
    return ['FizzBuzz', x];
  } else if (x % 5 == 0) {
    return ['Buzz', x];
  } else if (x % 3 == 0) {
    return ['Fizz', x];
  } else {
    return [null, x]
  };
};

function randomNumberGenerator() {
  let num = Math.floor(Math.random() * Math.floor(100));
  return num;
};

function functionRepeater(repeat) {
  let limiter = 0
  while( limiter < repeat ) {
    console.log(fizzBussIf(randomNumberGenerator()));
    limiter++;
  }
};