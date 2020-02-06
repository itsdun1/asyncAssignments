//Print 1 to 50 after after a gap of 1 second between two numbers.
//Print 'Bye' at the end. Use node.js as a runtime engine for this.

function addAsynchronously(a, callback) {
  setTimeout(function () {
    return callback(a);
  }, 1000 * a);
}

function printCount(count) {
  // console.log("here")
  console.log(count);
}

var count = 0;

while (count < 50) {
  // console.log("here")
  addAsynchronously(++count, printCount)
}

