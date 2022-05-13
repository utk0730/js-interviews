var paths = [
  "d1/d2/d3/file1.txt",
  "d1/d2/d3/file2.txt",
  "d2/d3/file3.txt",
  "d3/file4.txt",

  "d1/d2/first.png",
  "d2/second.png",

  "d1/photo1.jpg",
  "d1/photo2.jpg",

  "animate.gif",
  "utkarsh.txt",
];

let result = [];
let initialValue = { result };

paths.forEach((path) => {
  let pathParts = path.split("/");
  pathParts.reduce((acc, currentValue) => {
    if (acc[currentValue]) {
      return acc[currentValue];
    }
    acc[currentValue] = {
      result: [],
    };

    let el = {
      name: currentValue,
      children: acc[currentValue].result,
    };

    acc.result.push(el);

    return acc[currentValue];
  }, initialValue);
});
console.log(result);
