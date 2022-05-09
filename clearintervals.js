const MY_TIMERS = {
  intervalIds: [], //global interval id's arrays
  //create a MY_TIMERS's interval
  setInterval: function (fn, delay) {
    let id = setInterval(fn, delay);
    this.intervalIds.push(id);
    return id;
  },
  //MY_TIMERS's clearAllTimeout
  clearAllInterval: function () {
    while (this.intervalIds.length) {
      clearTimeout(this.intervalIds.pop());
    }
  },
};
MY_TIMERS.setInterval(() => {
  console.log("Hello");
}, 2000);

MY_TIMERS.setInterval(() => {
  console.log("Hello2");
}, 500);

MY_TIMERS.clearAllInterval();
