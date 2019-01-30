console.log('object.assign');

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let obj1 = Object.assign({c: 'over', d: 4});

console.log('1', obj1);

let obj2 = Object.assign(obj);

console.log('2', obj2);

let obj3 = Object.assign(obj, {c: 'over', d: 4});

console.log('3', obj3);

let obj4 = Object.assign({c: 'over', d: 4}, obj);

console.log('4', obj4);