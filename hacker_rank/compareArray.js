console.log('compareArray');
console.log('Complete');

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