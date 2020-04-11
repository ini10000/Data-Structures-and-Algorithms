// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function charMap(str) {
//         const chars = {};
//         const string = str.replace(/[^\w]/g, '').toLowerCase();

//         for (const char of string) {
//                 chars[char] = chars[char] + 1 || 1;
//         }

//         return chars;
// }

function anagrams(stringA, stringB) {
        // const strA = {};
        // const strB = {};
        // const tempA = stringA.replace(/[^\w]/g, '').toLowerCase();
        // const tempB = stringB.replace(/[^\w]/g, '').toLowerCase();
        // let ana = false;
        // tempA.length !== tempB.length ? (ana = false) : (ana = true);
        // for (const char of tempA) {
        //         if (!strA[char]) {
        //                 strA[char] = 1;
        //         } else {
        //                 strA[char]++;
        //         }
        // }
        // for (const char of tempB) {
        //         if (!strB[char]) {
        //                 strB[char] = 1;
        //         } else {
        //                 strB[char]++;
        //         }
        // }
        // for (char in strA) {
        //         if (strA[char] !== strB[char]) {
        //                 ana = false;
        //         }
        // }
        // return ana;
        // const tempA = charMap(stringA);
        // const tempB = charMap(stringB);
        // if (Object.keys(tempA).length !== Object.keys(tempB).length) {
        //         return false;
        // }
        // // eslint-disable-next-line no-restricted-syntax
        // for (const char in tempA) {
        //         if (tempA[char] !== tempB[char]) {
        //                 return false;
        //         }
        // }
        // return true;
        // eslint-disable-next-line no-use-before-define
        if (cleanString(stringA) !== cleanString(stringB)) {
                return false;
        }

        return true;
}

function cleanString(str) {
        return str
                .replace(/[^\w]/g, '')
                .toLowerCase()
                .split('')
                .sort()
                .join('');
}

module.exports = anagrams;
