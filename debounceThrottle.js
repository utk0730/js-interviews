const printName = () => {
  console.log("hello");
};

function myDebounce(fn, delay) {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setInterval(() => {
      fn.apply(context, args);
    }, delay);
  };
}

const betterFnDebounce = myDebounce(printName, 3000);
// betterFnDebounce();

const myThrottle = (fn, delay) => {
  let shouldFire = true;
  return function (...args) {
    const ctx = this;
    if (shouldFire) {
      fn.apply(ctx, args);
      shouldFire = false;
      setTimeout(() => {
        shouldFire = true;
      }, delay);
    }
  };
};

var a = 10;
function abc() {
  var a = 11;
  console.log("inner --->", a);
}
abc();
console.log("outer ---->", a);
