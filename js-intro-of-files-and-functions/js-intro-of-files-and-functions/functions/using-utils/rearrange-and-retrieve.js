const { check, runTest } = require("../../test-api/index.js");

function rearrangeAndRetrieve(array, moveIndex, retrieveNumber) {
  // make use of the util functions in section 3 called moveItemToEnd and getFirstNItems
}

runTest(
  "rearrangeAndRetrieve will rearrange a given array based on the two indexs given",
  function () {
    check(rearrangeAndRetrieve(["a", "b", "c"], 0, 1)).isEqualTo("b");
    check(rearrangeAndRetrieve([true, false, false, true], 1, 4)).isEqualTo([
      true,
      false,
      true,
      false,
    ]);
  }
);
