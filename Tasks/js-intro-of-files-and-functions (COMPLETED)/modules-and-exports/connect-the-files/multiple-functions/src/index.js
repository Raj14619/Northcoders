const { check, runTest } = require("../../../../test-api");
// do not change the above line

const mystery = require('../utils/utils') // enter the correct filepath

runTest("mystery variable is an object", function () {
  check(typeof mystery).isEqualTo('object');
});

runTest("function on mystery object can be invoked to add two numbers", function () {
  check(mystery.add(2, 7)).isEqualTo(9);
});

runTest("function on mystery object can be invoked to subtract two numbers", function () {
  check(mystery.subtract(2, 7)).isEqualTo(-5);
});