const { check, runTest } = require("../../test-api/index.js");

const getArrayTotal = require("../separating-concerns/utils/getArrayTotal.js")

/*
The function should take an array
It should calculate the total of the numbers in the array
It should then print a string that includes the total 

    example:
    const numbers = [1, 2, 3];
    printTotal(numbers)
    returns 'The array has a total of 6'
 */

function printArrayTotal(arr) {

    result = getArrayTotal(arr);
    return ('The array has a total of '+ result)

}

runTest("printArrayTotal() returns a string", function () {
  check(typeof printArrayTotal([])).isEqualTo("string");
});
runTest("printArrayTotal() returns correct message with total", function () {
  check(printArrayTotal([1, 1, 1])).isEqualTo("The array has a total of 3");
  check(printArrayTotal([10, 10, 10])).isEqualTo("The array has a total of 30");
  check(printArrayTotal([5, -1, 2])).isEqualTo("The array has a total of 6");
});
