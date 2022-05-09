const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const addPrefix = (price) => "$" + String(price);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x);

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x);

const discountPipe = pipe(multiply20, divide100, normalizePrice, addPrefix);
const discountCompose = compose(
  addPrefix,
  normalizePrice,
  divide100,
  multiply20
);

console.log(discountPipe(200)); // '$40.00'
console.log(discountCompose(200)); // '$40.00'
