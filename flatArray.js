const arr = [1, 2, [3, 4], [[[5, 6], 7]]];
const LIMIT = 2;
function myFlatten(depth) {
  const output = [];
  function process(arr, l) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (Array.isArray(element) && l > 0) {
        process(element, l - 1);
      } else {
        output.push(element);
      }
    }
  }
  process(this, depth);
  return output;
}

Array.prototype.myFlatten = myFlatten;
const flaArray = arr.myFlatten(LIMIT);
console.log("flaArray --->", flaArray);
