// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  if (Number.isInteger(year))
    if (Number.isInteger(month)) if (Number.isInteger(day)) return true;
  return false;
}
console.log(checkParamsFn("199", 7, 5));

// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
  let yearx = new Date();
  let monthx = new Date();
  let dayx = new Date();

  if (yearx.getFullYear() < year + 18) return false;
  else if (yearx.getFullYear() > year + 18) return true;
  else if (monthx.getMonth() + 1 < month) return false;
  else if (monthx.getMonth() + 1 > month) return true;
  else if (dayx.getDate() < day) return false;
  else if (dayx.getDate() >= day) return true;
}
console.log(checkOverEighteenFn(2003, 5, 20));

function calculateAgeFn(year, month, day) {
  let yearx = new Date();
  if (!checkParamsFn) return "error: check previous ";
  else if (!checkOverEighteenFn) return "error: check previous";
  else {
    return yearx.getFullYear() - year;
  }
}
console.log(calculateAgeFn(1997, 2, 24));
// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;
