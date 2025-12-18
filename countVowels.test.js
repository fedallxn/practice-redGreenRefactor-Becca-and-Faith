const {countVowels} = require ('./countVowels');

describe("countVowels", () => {
    test("return a message when string is not input", function () {
        expect(countVowels('')).toBe('Please input a string');
    });
});