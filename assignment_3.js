//Print 1 to 50 after after a gap of 1 second between two numbers.
//Print 'Bye' at the end. Use node.js as a runtime engine for this.

var count = 0;

function printCount() {
  console.log(++count);
  if (count >= 50) {
    console.log("Bye");
    process.exit(1);
  }
}

setInterval(() => {
  printCount();
}, 1000);
