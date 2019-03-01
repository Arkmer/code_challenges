console.log('object.assign');

// ==== First Test Set Start ====

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let obj1 = Object.assign({ c: 'over', d: 4 });

console.log('1', obj1);

let obj2 = Object.assign(obj);

console.log('2', obj2);

let obj3 = Object.assign(obj, { c: 'over', d: 4 });

console.log('3', obj3);

let obj4 = Object.assign({ c: 'over', d: 4 }, obj);

console.log('4', obj4);

objDeep = {
  z: {
    deepLevel: '<<Can we see this?>>',
  }
}

let obj5 = Object.assign(obj, { c: objDeep, d: 4 });

console.log('5: Deep Cloning?', obj5);
console.log('5: Close up?', obj5.c.z.deepLevel);

// ==== First Test Set Finish ====