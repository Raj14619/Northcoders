const { check, runTest } = require("../../test-api/index.js");

function updateCharacterLocation() {
  // you will be given a string representing a keyboard input consisting of the "a", "w", "s" and "d", which are used in some games to move a character. 
  // they represent 4 directions as follows: 
  // "a" - left, "w" - up, "s" - down and "d" - right
  // you will also be given the starting coordinates of a character, which you have to update based on the key presses provided
  // make use of the util function updatePosition in section 2.


}

runTest(
  "updateCharacterLocation() will return updated coordinates for a character after moving",
  function () {
    check(updateCharacterLocation("a", [1, 3])).isEqualTo([0, 3]);
    check(updateCharacterLocation("aw", [5, 2])).isEqualTo([4, 3]);
    check(updateCharacterLocation("awsddsws", [0, 0])).isEqualTo([1, -1]);
  }
);
