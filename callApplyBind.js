// const person = {
//   name: "utkarsh",
// };
// function log(x) {
//   console.log(x);
// }
// log.call(person, "bharti", "sharma");
// log.apply(person, ["bharti", "sharma"]);
// const refLog = log.bind(person, "bharti", "sharma");
// refLog();

/******* Polyfill Bind method ***********/
// const object = {
//   firstname: "Utkarsh",
//   lastname: "Bharti",
// };

// const printName = function (hometown, state, country) {
//   console.log(
//     this.firstname +
//       " " +
//       this.lastname +
//       " , " +
//       hometown +
//       ", " +
//       state +
//       ", " +
//       country
//   );
// };

// let printMyName = printName.bind(object, "Dehradun", "Uttarakhand");
// printMyName("India");

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

// let printMyName2 = printName.mybind(object, "Dehradun", "Uttarakhand");
// printMyName2("India");

/******* Polyfill Bind method ***********/

/******* Polyfill call method ***********/
Function.prototype.myCall = function (context, ...args) {
  const fnRef = this;
  const params = args.join(" ");
  const newContext = context;
  newContext.fn = fnRef;
  console.log("params ---->", params);
  newContext.fn("hello");
};
log.myCall(person, "Bharti", "Sharma", "hello");
/******* Polyfill call method ***********/

/******* Polyfill apply method ***********/
Function.prototype.myApply = function (...args) {
  const fnRef = this;
  const objRef = args[0];

  const params = args[1].slice(1);
  console.log("params ---->", params);
  const context = objRef;
  context.fn = fnRef;
  context.fn(params);
};
// log.myApply(person, ["Bharti", "Sharma"]);

/******* Polyfill call method ***********/
