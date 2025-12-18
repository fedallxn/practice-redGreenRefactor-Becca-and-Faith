function countVowels (string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    //refactored
    if (!string || '') {
        return ("Please input a string");
    }
    //
    string.toLowerCase().split('').forEach(char => {
        if (vowels.includes(char)) {
            count++;
        }
    });

    return count;
}

console.log(countVowels('hello'));

module.exports = {countVowels};