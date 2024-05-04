const { check, runTest } = require("../../../test-api");
// do not change the above line

const mystery = require('../primitive/data') // enter the correct filepath

runTest("mystery variable is correct greeting", function () {
  check(mystery).isEqualTo("Hello!");
});
