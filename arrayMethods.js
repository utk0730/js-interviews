const arr = [1, 2, 3, 4, 5];

const numberCheck = (x, idx, arr) => {
  //   console.log("map array ", arr);
  if (x == 2) return x;
};
const numGreaterCheck = (x, idx, arr) => {
  //   console.log("filter arr ", arr);
  if (x > 2) return true;
};

// const mapRes = arr.map(numberCheck);
// console.log("map result --->", mapRes);

// const filterRes = arr.filter(numGreaterCheck);
// console.log("filter result --->", filterRes);

Array.prototype.myMap = function (callback) {
  let newResult = [];
  for (let i = 0; i < this.length; i++) {
    let ele = callback(this[i], i, this);
    newResult.push(ele);
  }
  return newResult;
};

const myMapRes = arr.myMap(numberCheck);
// console.log('myMapRes -->',myMapRes)

Array.prototype.myFilter = function (callback) {
  const newResult = [];
  for (let i = 0; i < this.length; i++) {
    const ele = callback(this[i], i, this);
    if (ele) {
      newResult.push(ele);
    }
  }
  return newResult;
};

const myFilterRes = arr.myFilter(numGreaterCheck);
// console.log("myMapRes -->", myFilterRes);

const add = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

numbers.reduce((acc, number) => {
  const sum = acc + number;
}, 0);

const reduceResult = numbers.reduce(add);
console.log("reduceResult --->", reduceResult);

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (acc) {
      acc = callback(acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};

const myReduceResult = numbers.myReduce(add);
console.log("reduceResult --->", myReduceResult);
