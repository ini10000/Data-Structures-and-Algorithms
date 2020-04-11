// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  //   let fib_container = [0, 1];
  //   for (let i = 2; i < n + 1; i++) {
  //     let sum = fib_container[i - 2] + fib_container[i - 1];
  //     fib_container.push(sum);
  //   }
  //   return fib_container[fib_container.length - 1];
  if (n < 2) {
    return n;
  }

  return fib(n - 2) + fib(n - 1);
}

const fib = memoize(slowFib);

module.exports = fib;
