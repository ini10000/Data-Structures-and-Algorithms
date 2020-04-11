/* eslint-disable no-param-reassign */
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, i = 0, stair = '') {
        // const midpoint = Math.floor((2 * n - 1) / 2);
        // for (let i = 0; i < n; i++) {
        //         let stair = '';
        //         for (let j = 0; j < 2 * n - 1; j++) {
        //                 // if (j > n - i - 2 && j < n + i) {
        //                 if (midpoint - i <= j && midpoint + i >= j) {
        //                         stair += '#';
        //                 } else {
        //                         stair += ' ';
        //                 }
        //         }
        //         console.log(stair);
        // }
        if (n === i) {
                return;
        }

        if (2 * n - 1 === stair.length) {
                // eslint-disable-next-line no-console
                console.log(stair);
                return pyramid(n, i + 1);
        }

        if (stair.length < n + i && stair.length > n - i - 2) {
                stair += '#';
        } else {
                stair += ' ';
        }

        pyramid(n, i, stair);
}

module.exports = pyramid;
