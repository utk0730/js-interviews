const limit = 4;

const sum1 = (...args) => {
  //spread the arguments in storage array
  const storage = [...args];

  //base case
  //if we have reached the limit
  if (storage.length === 4) {
    return storage.reduce((a, b) => a + b, 0);
  }
  //other wise return a function
  else {
    //create an inner function
    const temp = function (...args2) {
      //get the arguments of inner function
      //merge them in existing storage
      storage.push(...args2);

      //if we have reached the limit
      //return the value
      if (storage.length === 4) {
        return storage.reduce((a, b) => a + b, 0);
      }
      //else return the same function again
      else {
        return temp;
      }
    };

    //return the function
    return temp;
  }
};

//
const sum = (...args) => {
  //spread the arguments in storage array
  const storage = [...args];

  //base case
  //if invoked without any argument
  if (storage.length === 0) {
    return 0;
  }
  //closure
  else {
    //create an inner function
    const temp = function (...args2) {
      //get the arguments of inner function
      //merge them in existing storage
      storage.push(...args2);

      //if no arguments are passed
      //return the value
      if (args2.length === 0) {
        return storage.reduce((a, b) => a + b, 0);
      }
      //else return the same function again
      else {
        return temp;
      }
    };

    //return the function
    return temp;
  }
};

const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)();
const res6 = sum();

console.log(res, res2, res3, res4, res5, res6);
