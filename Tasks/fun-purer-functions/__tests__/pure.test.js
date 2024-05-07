const removeLastNumber = require("../removeLastNumber")


describe("remvoeLastNumber", () => {
    test("check that last index is removed from array", () => {

        let input = [1,2,3,4];
        let result = [1,2,3];

        expect(removeLastNumber(input)).toEqual(result)


    });
});