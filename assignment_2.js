// Add the numbers in the below array using below function 'addAsynchronously'.
// Please note you will have to add two numbers at a time. 
// You are not allowed to modify the function but only to call it.
var numbersToBeAdded = [1, 2, 4, 67, 23, 12, 73, 94, 43, 62, 8, 54, 23, 28, 11, 33];

function addAsynchronously(a, b, callback) {
  setTimeout(function () {
    return callback(null, a + b);
  }, 10 * Math.random());
}


// this is with recursion

var count = 0;

addAsynchronously(numbersToBeAdded[count], numbersToBeAdded[++count], function (err, sum) {
  console.log(sum);
  callback(err, sum, count);
})

function callback(err, sum, count) {
  if (count == 15) {
    console.log("Exiting ......")
    process.exit(1);
  }
  addAsynchronously(sum, numbersToBeAdded[++count], function (err, sum) {
    console.log(count, "With recursion", sum);
    callback(err, sum, count)
  })
}




// this is with callback ....... callbacks

addAsynchronously(numbersToBeAdded[0], numbersToBeAdded[1], function (err, sum) {
  addAsynchronously(numbersToBeAdded[2], sum, function (err, sum) {
    addAsynchronously(numbersToBeAdded[3], sum, function (err, sum) {
      addAsynchronously(numbersToBeAdded[4], sum, function (err, sum) {
        addAsynchronously(numbersToBeAdded[5], sum, function (err, sum) {
          addAsynchronously(numbersToBeAdded[6], sum, function (err, sum) {
            addAsynchronously(numbersToBeAdded[7], sum, function (err, sum) {
              addAsynchronously(numbersToBeAdded[8], sum, function (err, sum) {
                addAsynchronously(numbersToBeAdded[9], sum, function (err, sum) {
                  addAsynchronously(numbersToBeAdded[10], sum, function (err, sum) {
                    addAsynchronously(numbersToBeAdded[11], sum, function (err, sum) {
                      addAsynchronously(numbersToBeAdded[12], sum, function (err, sum) {
                        addAsynchronously(numbersToBeAdded[13], sum, function (err, sum) {
                          addAsynchronously(numbersToBeAdded[14], sum, function (err, sum) {
                            addAsynchronously(numbersToBeAdded[15], sum, function (err, sum) {
                              console.log("With callback hell " + sum)
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})







