const printName = () => {
  console.log("hello");
};

function myDebounce(fn, delay) {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

// Debounce variation for -> T(E) - - - - T(E) - - T - T - - - T(E) - - - T(E)
function myDebounce2(fn, delay) {
  let timer = "";
  return (args) => {
    if (!timer) fn(args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = "";
    }, delay);
  };
}
//

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
