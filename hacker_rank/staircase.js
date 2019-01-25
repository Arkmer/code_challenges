console.log('staircase');
console.log('Complete');

// Build a staircase with the top stair on the right.
// Built out of #s.
// The last row cannot have any spaces in it.

// Example
// |   #
// |  ##
// | ###
// |####

staircaseMaker(50);

function staircaseMaker(stairMax) {
  let n = randomStairs(stairMax);
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

function randomStairs(stairs) {
  return Math.floor(Math.random() * Math.floor(stairs))
}