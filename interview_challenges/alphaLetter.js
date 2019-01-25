console.log('alphaLetter');
console.log('Complete');

// Given a string find the character that occurs most often. DONE!
// If two characters are tied for most, choose the one that occurs first.

// == INPUT RULES ==
// Is a string, is only letters, no spaces, and can be any length.

// =========================
let testWord = 'helloworld';
// =========================


// Solution #1
function alphaLetter1(input) {
  var myMap = new Map();
  input.split('').forEach( item => myMap.has(item) ? myMap.set(item, myMap.get(item) + 1) : myMap.set(item, 1) );
  let highCount = 0;
  myMap.forEach( item => highCount < item ? highCount = item : null );
  let short = myMap.entries().next().value;
  myMap.forEach((item) => { item == highCount ? result = [short[0], short[1]] : null });
  return result;
};

console.log('Solution 1:', alphaLetter1(testWord));
// Solution #1 does not currently work.
// The short variable is not cycling to the proper letter, it only takes in the first one.

// Solution #2
function alphaLetter2(input) {
  var myMap = new Map();
  input.split('').forEach( key => myMap.has(key) ? myMap.set(key, myMap.get(key) + 1) : myMap.set(key, 1) );
  let highCount = 0;
  myMap.forEach( value => highCount < value ? highCount = value : null );
  for(const [key, value] of myMap){
    if(value == highCount) {
      return result = [key, value];
    };
  };
};

console.log('Solution 2:', alphaLetter2(testWord));
// This solution works on every test word.