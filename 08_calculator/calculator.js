const add = function(...args) {
	 let values = args.flat();
   let total = 0;
   for (val of values) total += val;
   return total;
};

const subtract = function(minuend, subtraend) {
	return minuend - subtraend;
};

const sum = function(...args) {
  let values = args.flat();
  let total = 0;
  for (val of values) total += val;
  return total;
};

const multiply = function(...args) {
  let values = args.flat();
  let total = 0;
  if (args.length > 0 ) {
    total = 1;
    for (val of values) total*=val;
  }
  return total;
};

const power = function(base, exp) {
	if (exp === 0) return 1;
  let res = 1;
  for (let i = 1; i<=exp; i++) res*=base;
  return res;
};

const factorial = function(val) {
	if (val === 0) return 1;
  let res = val;
  for (let i = val - 1; i >= 1; i--) res *= i;
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
