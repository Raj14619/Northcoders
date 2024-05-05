const { check, runTest } = require("../../../../test-api");
// do not change the above line

const mystery = require('../utils/utils') // enter the correct filepath

runTest("mystery variable is a function", function () {
  check(typeof mystery).isEqualTo('function');
});

runTest("function can be invoked to add two numbers", function () {
  check(mystery(2, 7)).isEqualTo(9);
});