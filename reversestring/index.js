// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
        // const reversed = str
        //         .split('')
        //         .reverse()
        //         .join('');

        // let reversed = '';
        // for (const character of str) {
        //         reversed = character + reversed;
        // }
        // return reversed;
        debugger;
        return str.split('').reduce((reversed, character) => character + reversed, '');
}

reverse('hello');

module.exports = reverse;
