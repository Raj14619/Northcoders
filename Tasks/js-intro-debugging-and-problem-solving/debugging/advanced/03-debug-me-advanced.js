const { check, runTest, skipTest } = require("../../test-api/index.js");

function capitalArtists(arr) {

  
  const artists = arr.map((pair) => {
    var remove_after = pair.indexOf("-");
    var result = pair.substring(0,remove_after);
    return result.toUpperCase().trim();
  });

  return artists;
}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest("An empty array should return an empty array", function () {
  check(capitalArtists([])).isEqualTo([]);
});
runTest("Returns an array of 1 capitalised music artist", function () {
  check(capitalArtists(["Cher - Believe"])).isEqualTo(["CHER"]);
});
runTest("Returns an array of capitalised music artists ", function () {
  check(
    capitalArtists(["Cher - Believe", "Adele - Hello", "Coldplay - Yellow"])
  ).isEqualTo(["CHER", "ADELE", "COLDPLAY"]);
});