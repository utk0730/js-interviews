// const p = new Promise((resolve, reject) => {
//   const flag = true;
//   if (flag) {
//     resolve("Promise resolved");
//   } else {
//     reject("Promise rejected");
//   }
// });

// p.then((res) => {
//   console.log("then result -->", res);
// }).catch((err) => {
//   console.log("catch error --->", err);
// });

// promise polyfill
function myPromise(executor) {
  let onResolve;
  let onReject;
  let isPending = true;
  let isFullFilled = false;
  let isRejected = false;
  let value;
  let error;

  this.then = function (thenHanlder) {
    onResolve = thenHanlder;
    if (typeof onResolve === "function") {
      onResolve(value);
    }
    return this;
  };
  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (typeof onReject === "function") {
      onReject(error);
    }

    return this;
  };

  function resolve() {
    isFullFilled = true;
    value = value;
    if (typeof onResolve === "function") {
      onResolve("utkarsh");
      isPending = false;
    }
  }
  function reject() {
    isRejected = true;
    error = err;
    if (typeof onReject === "function") {
      onReject("some error");
    }

    isPending = false;
  }

  executor(resolve, reject);
}

const myp = new myPromise((res, rej) => {
  res("hello");
  rej("error");
});

console.log("myp --->", myp);

myp.then((data) => {
  console.log("promsie then --->", data);
});

myp.then((data) => {
  console.log("promsie then --->", data);
});
