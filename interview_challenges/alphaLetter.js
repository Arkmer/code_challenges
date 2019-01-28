console.log('alphaLetter');
console.log('Complete');

// Given a string find the character that occurs most often.
// If two characters are tied for most, choose the one that occurs first.

// == INPUT RULES ==
// Is a string, is only letters, no spaces, and can be any length.

// =========================
let testWord = 'helloworld';
// =========================

function alphaLetter(input) {
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

console.log('Solution 2:', alphaLetter(testWord));
// This solution works on every test string of any length.