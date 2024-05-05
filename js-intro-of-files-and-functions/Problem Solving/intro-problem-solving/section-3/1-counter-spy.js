const { check, runTest, skipTest } = require("../test-api/index.js");

function counterSpy(people) {

   arr = [];

    for(let i = 0; i < people.length; i++){

      if(people[i].toLowerCase().includes("s") || people[i].toLowerCase().includes("p") || people[i].toLowerCase().includes("y")){

      }else{
        arr.push(people[i])
      }

    }

    arr.sort();


  return arr;


  /*
This function takes an array of names.
The function should return an array containing the names of the people who aren't spies.

Recent intelligence has revealed that all spies codenames include the letters 's', 'p' or 'y'.
You can't afford to take any chances, and all names that include those letters should be removed.
  */
}

console.log("counterSpy()");

runTest("returns an empty array if the only person is a spy", function () {
  check(counterSpy(["Daryl"])).isEqualTo([]);
});

runTest("returns an array with all spys removed", function () {
  check(counterSpy(["Daryl", "Harriet", "James"])).isEqualTo(["Harriet"]);
  check(counterSpy(["Chris", "Daryl", "Harriet", "Mauro", "Sam"])).isEqualTo([
    "Harriet",
    "Mauro"
  ]);
});

/*
EXTRA CREDIT:

Also, our spy admin team have asked that the names come back in alphabetical order, for spy filing purposes.
So if you could do that you'd really be saving them a lot of work. Thanks.
*/
runTest("returns an array with names in alphabetical order", function () {
  check(counterSpy(["Sam", "Harriet", "Adrian", "Mauro"])).isEqualTo([
    "Adrian",
    "Harriet",
    "Mauro"
  ]);
});
