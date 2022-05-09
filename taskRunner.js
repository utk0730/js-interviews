// class Runner {
//   constructor(maxCount = 1) {
//     this.taskQueue = [];
//     this.maxCount = maxCount;
//     this.currentCount = 0;
//   }

//   run() {
//     if (this.taskQueue.length && this.currentCount < this.maxCount) {
//       const task = this.taskQueue.shift();
//       task();
//     }
//   }

//   push(task, callback) {
//     this.taskQueue.push(() => {
//       this.currentCount++;
//       task((...args) => {
//         this.currentCount--;
//         callback(...args);
//         this.run();
//       });
//     });
//     this.run();
//   }
// }
//
// // // Example usage
// const myCallback = (caller) => {
//   console.log(`myCallback called by ${caller} ${new Date()}`);
// };

// const task1 = (callback) => {
//   console.log(`task1 started ${new Date()}`);
//   setTimeout(() => {
//     callback("task1");
//   }, 3000);
// };

// const task2 = (callback) => {
//   console.log(`task2 started ${new Date()}`);
//   setTimeout(() => {
//     callback("task2");
//   }, 3000);
// };

// const task3 = (callback) => {
//   console.log(`task3 started ${new Date()}`);
//   setTimeout(() => {
//     callback("task3");
//   }, 3000);
// };

// const task4 = (callback) => {
//   console.log(`task4 started ${new Date()}`);
//   setTimeout(() => {
//     callback("task4");
//   }, 3000);
// };

// const runner = new Runner(2);
// runner.push(task1, myCallback);
// runner.push(task2, myCallback);
// runner.push(task3, myCallback);
// runner.push(task4, myCallback);

function TaskRunner(councurrentTask) {
  this.count = 1;
  this.taskQueue = [];

  this.run = () =>{
     
  }
  this.push = function (callback) {
      this.count
    this.taskQueue.push(callback);
    this.run();
    
}

const task1 = (done) => {
  setTimeout(() => {
    console.log("task 1 completed");
    done("task 1");
  }, 4000);
};
const task2 = (done) => {
  setTimeout(() => {
    console.log("task 2 completed");
    done("task 2");
  }, 3000);
};
const task3 = (done) => {
  setTimeout(() => {
    console.log("task 3 completed");
    done("task 3");
  }, 2000);
};
const task4 = (done) => {
  setTimeout(() => {
    console.log("task 4 completed");
    done("task 4");
  }, 1000);
};
const taskRunner = new TaskRunner(3);
taskRunner.push(task1);
taskRunner.push(task2);
taskRunner.push(task3);
taskRunner.push(task4);
