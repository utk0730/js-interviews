// Interview Vector
Promise.myAll = (promises) => {
  const resultArr = [];
  //err arary
  // try catch
  for (let i = 0; i < promises.length; i++) {
    promises[i]
      .then((res) => {
        resultArr.push(res);
      })
      .catch((err) => {
        if (resultArr.length) {
          return new Promise((res, rej) => {
            rej(resultArr);
          });
        } else {
          return new Promise((res, rej) => {
            rej("some error");
          });
        }
      });
  }
  return new Promise((res, rej) => {
    res(resultArr);
  });
};

let p1 = Promise.reject(1);

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 resolved after 2 seconds");
  }, 1000);
});

Promise.myAll([p1, p2]).then(
  (res) => {
    console.log("Response => ", res);
  },
  (err) => {
    console.log("error =>", err);
  }
);

/* const testArr = [1,2,3];
    
   console.log("\n----Testcase 1--- op : 10---\n")
   console.log(testArr.myReduce((acc, curr) => acc + curr, 4)); // 10
    
    
   console.log("\n----Testcase 2--- op : 6---\n")
   console.log(testArr.myReduce((acc, curr) => acc + curr)); // 6
    
    
   console.log("\n----Testcase 3--- op : 6---\n")
   console.log(testArr.myReduce((acc, curr) => acc * curr)) // 6
    
    
   console.log("\n----Testcase 4--- op : 0---\n")
   console.log(testArr.myReduce((acc, curr) => acc * curr, 0)); // 0
    
    
   const testArr2 = [{a: 1}, {b: 2}];
   const retObj  = testArr2.myReduce((acc, curr) => {
    let key = Object.keys(curr)[0];
    let val = Object.values(curr)[0];
    acc[key] = val;
    return acc;
   }, {});
    
   console.log("\n----Testcase 5--- op : {a : 1, b :2}---\n\n")
   console.log(retObj); */

/* const square = (x) => x*x;
   const sum = (a,b) => a+b;
   
   Array.prototype.myReduce1 = function(callback, initialValue){
     let acc = initialValue;
     const newResult = [];
     for(let i=0;i<this.length;i++){
     if(acc){
       acc = callback(acc, this[i])
     }else{
     acc = this[i];
     
     acc = callback(acc,this[i+1])
     }
     }
     return acc
     
   
   }
   const arr1 =[1,2];
   const res = arr1.myReduce1(sum,10)
   console.log('result --->',res)
   
   
   const logObject = (obj) => console.log('object --->',obj)
   const testArr2 = [{a: 1}, {b: 2}];
   testArr2.myReduce1(logObject)
    */
