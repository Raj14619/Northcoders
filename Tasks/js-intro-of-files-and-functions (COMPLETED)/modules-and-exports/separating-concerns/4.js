const { check, runTest } = require("../../test-api/index.js");
const {addNumbers,multiplyNumbers,squareNumber,divideNumbers,isEven,getSquareRoot,removeDuplicateValues} = require("../separating-concerns/utils/mathFunctions.js")
/*
1. Create your own util function named removeDuplicateValues

The function and tests have already been set up for you to check your util before using it. Remember to export it so it can be used in different modules!

2. Next, complete the function `isArrayTotalEven`. The function takes an array. It should find the total of the array, minus any duplicate values. 

It should then return a boolean depending on whether the total is even or not.

-  use appropriate util functions to get the total of the array (with no duplicates), and check whether the total is even 
*/

function isArrayTotalEven(arr) {
  // remember to require in at least 3 util functions to help you solve this problem!

  newarr = removeDuplicateValues(arr);

  let sum = 0;

  for(let i = 0; i < newarr.length; i++){
    sum += newarr[i]
  }

  if(sum % 2 == 0){
    return true
  }else{
  return false;
  }

}

runTest("isArrayTotalEven() returns appropriate boolean for total", function () {
  check(typeof isArrayTotalEven([])).isEqualTo("boolean");
  check(isArrayTotalEven([1, 1, 1])).isEqualTo(false);
  check(isArrayTotalEven([1, 3, 3])).isEqualTo(true);
  check(isArrayTotalEven([1, 2, 3, 3])).isEqualTo(true);
  check(isArrayTotalEven([1, 20, 20, 20, 1, 2])).isEqualTo(false);
});
