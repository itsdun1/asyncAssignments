// //Print 1 to 50 after after a gap of 1 second between two numbers.
// //Print 'Bye' at the end. Use node.js as a runtime engine for this.


// with normal settimeout tick; 

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



// ==============================
// with time Date with objects
// ==============================





a = {};
b = {};

for (i = 0; i < 50; i++) {
  a[i] = i;
  b[i] = true;

}
count = 0;
// console.log(JSON.stringify(a))

var time = Date.now();

while (count < 50) {
  time2 = Math.floor((Date.now() - time) / 1000);
  if (b[time2]) {
    b[time2] = false
    console.log(a[time2])
    count++;
  }
}


