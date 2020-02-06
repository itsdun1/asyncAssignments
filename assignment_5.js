// Add the numbers in the below array using below function 'addAsynchronously'. 
// Please note you will have to add two numbers at a time.
// You are not allowed to modify the function but only to call 


var numbersToBeAdded = [1, 2, 4, 67, 23, 12, 73, 94, 43, 62, 8, 54, 23, 28, 11, 33];
function addAsynchronously(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(a + b);
    }, 10 * Math.random());
  });
}

var count = 0;
promise = addAsynchronously(numbersToBeAdded[count], numbersToBeAdded[++count])

sendPromise(promise);

function sendPromise(pro) {

  if (count > numbersToBeAdded.length - 1) {
    process.exit(1);
  }

  pro.then((data) => {
    console.log(data)
    let promise = addAsynchronously(data, numbersToBeAdded[++count])
    sendPromise(promise);
  })

}
