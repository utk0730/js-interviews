function createSetInterval() {
  let intervalId = 0;
  let intervalMap = {};

  function setIntervalPolyfill(callback, delay = 0, ...args) {
    let id = intervalId++;
    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callback(...args);
        if (intervalMap[id]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return id;
  }

  function clearIntervalPolyfill(intervalId) {
    clearTimeout(intervalId);
    delete intervalMap[intervalId];
  }

  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}

const { setIntervalPolyfill, clearIntervalPolyfill } = createSetInterval();

let counter = 0;
let intervalId;

function greeting() {
  counter++;
  console.log("hiii");
  if (counter > 3) {
    clearIntervalPolyfill(intervalId);
  }
}

intervalId = setIntervalPolyfill(greeting, 5000);

console.log("setIntervalPolyfill --->", setIntervalPolyfill);
