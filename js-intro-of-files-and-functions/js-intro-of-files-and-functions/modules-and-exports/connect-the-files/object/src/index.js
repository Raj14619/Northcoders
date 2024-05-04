const { check, runTest } = require("../../../../test-api");
// do not change the above line

const mystery = require('../data/data') // enter the correct filepath

runTest("mystery variable is an object", function () {
  check(typeof mystery).isEqualTo('object');
});

runTest("mystery variable has key of name with string value", function () {
  check(mystery.name).isEqualTo('David');
});