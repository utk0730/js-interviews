const MY_TIMERS = {
  timeoutIds: [], //global timeout id arrays
  //create a MY_TIMERS's timeout
  setTimeout: function (fn, delay) {
    let id = setTimeout(fn, delay);
    this.timeoutIds.push(id);
    return id;
  },
  //MY_TIMERS's clearAllTimeout
  clearAllTimeout: function () {
    while (this.timeoutIds.length) {
      clearTimeout(this.timeoutIds.pop());
    }
  },
};

const id = MY_TIMERS.setTimeout(() => {
  console.log("hello");
}, 1000);
console.log(id);
MY_TIMERS.clearAllTimeout();
