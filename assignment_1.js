
// 1. Execute below functions one after another, in a synchronous manner. 
// The output should be, numbers printed in ascending order. 
// Also print 'Bye' when you have printed all numbers. 
// You can not modify the functions.

function printOne(callback) {
  setTimeout(function () {
    console.log('1');
    return callback();
  }, 100 * Math.random());
}

function printTwo(callback) {
  setTimeout(function () {
    console.log('2');
    return callback();
  }, 100 * Math.random());
}

function printThree(callback) {
  setTimeout(function () {
    console.log('3');
    return callback();
  }, 100 * Math.random());
}

function printFour(callback) {
  setTimeout(function () {
    console.log('4');
    return callback();
  }, 100 * Math.random());
}

function printBye() {
  console.log('Bye')
}

// var funArray = [printOne, printTwo, printThree, printFour];

const synchronousPrint = () => {

  printOne(() => {
    printTwo(() => {
      printThree(() => {
        printFour(printBye);
      })
    })
  })
}

synchronousPrint()

