// Execute below functions one after another, in a synchronous manner. 
// The output should be, numbers printed in ascending order. 
// Also print 'Bye' when you have printed all numbers. You can not modify the functions.

function printOne() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('1');
      return resolve();
    }, 100 * Math.random());
  });
}

function printTwo() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('2');
      return resolve();
    }, 100 * Math.random());
  });
}

function printThree() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('3');
      return resolve();
    }, 100 * Math.random());
  });
}

function printFour() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('4');
      return resolve();
    }, 100 * Math.random());
  });
}


var promise = printOne();

promise.then(() => {
  return printTwo()
}).then(() => {
  return printThree();
}).then(() => {
  return printFour();
}).then(() => {
  console.log("Bye")
}).catch((e) => {
  console.log(e);
})
