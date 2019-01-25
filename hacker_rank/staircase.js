console.log('staircase');

// Build a staircase with the top stair on the right.
// Built out of #s.
// The last row cannot have any spaces in it.

// Example
// |   #
// |  ##
// | ###
// |####

staircaseMaker(10);

function staircaseMaker(n) {
  for(let i = 0; i < n; i++) {
  let stair = ''
    for(let j = n - i - 1; j < n; j++) {
      stair = stair + '#';
    }
    for(let j = i + 1; j < n; j++) {
      stair = ' ' + stair;
    }
  console.log(stair);
  }
};