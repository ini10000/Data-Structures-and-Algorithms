// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
        const chars = {};
        let max = 0;
        let maxValue = '';

        for (const char of str) {
                if (!chars[char]) {
                        chars[char] = 1;
                } else {
                        // eslint-disable-next-line no-plusplus
                        chars[char]++;
                }
        }

        // eslint-disable-next-line no-restricted-syntax
        for (const char in chars) {
                if (chars[char] > max) {
                        max = chars[char];
                        maxValue = char;
                }
        }
        return maxValue;
}

module.exports = maxChar;
