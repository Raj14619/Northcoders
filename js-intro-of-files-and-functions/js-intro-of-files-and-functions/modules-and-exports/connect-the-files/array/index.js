const { check, runTest } = require("../../../test-api");
// do not change the above line

const mystery = require('../array/data') // enter the correct filepath

runTest("mystery variable is an array", function () {
  check(Array.isArray(mystery)).isEqualTo(true);
});

runTest("array content check", function () {
  check(mystery[2]).isEqualTo(462);
});