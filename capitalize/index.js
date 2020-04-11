// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
        //         const word = str.split(' ');
        //         const cap = [];

        //         for (const char of word) {
        //                 cap.push(char[0].toUpperCase() + char.slice(1));
        //         }

        //         return cap.join(' ');
        let result = str[0].toUpperCase();

        // eslint-disable-next-line no-plusplus
        for (let i = 1; i < str.length; i++) {
                if (str[i - 1] === ' ') {
                        result += str[i].toUpperCase();
                } else {
                        result += str[i];
                }
        }

        return result;
}

module.exports = capitalize;
