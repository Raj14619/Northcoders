const { check, runTest } = require("../../test-api/index.js");
const {addNumbers,multiplyNumbers,squareNumber,divideNumbers,isEven,getSquareRoot} = require("../separating-concerns/utils/mathFunctions.js")

/*
Complete the function below. It will take two numbers.
You should add these two numbers together, then return a boolean as to whether this total is even or not

example:
isTotalEven(1, 2) // returns false as 3 is not even

Complete this challenge using ONLY the functions from mathFunctions.js
HINT: You will need to export multiple functions from the same file

 */

function isTotalEven(num1, num2) {
  // remember to use 2 util functions to complete this task

  totalOfNum1AndNum2 = addNumbers(num1,num2);

  return isEven(totalOfNum1AndNum2)


}

runTest("isTotalEven() should return appropriate boolean for total ", function () {
  check(typeof isTotalEven()).isEqualTo("boolean");
  check(isTotalEven(1, 1)).isEqualTo(true);
  check(isTotalEven(10, 20)).isEqualTo(true);
  check(isTotalEven(100, 50)).isEqualTo(true);
  check(isTotalEven(1, 2)).isEqualTo(false);
  check(isTotalEven(10, 19)).isEqualTo(false);
  check(isTotalEven(100, 49)).isEqualTo(false);
});
