console.log('compareArray');
console.log('Complete');

// Given an array for Alice and an array for Bob, compare the two and decide who has the higher corresponding numbers.

aliceTrip = [1, 2, 3];
bobTrip = [3, 2, 1];

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for (let pos in a) {
      if (a[pos] > b[pos]) {
          alice++;
      } else if (b[pos] > a[pos]) {
          bob++;
      }
  }
  console.log([alice, bob]);
}

compareTriplets(aliceTrip, bobTrip);