// this is to add digits together until it can no longer be added

var addDigits = function(num) {
    if (num >= 0 && num <= 9) {
      return num
    } else {
      let splitNum = num.toString().split("").map(Number)
      return addDigits(splitNum.reduce((a, b) => a+b))
    }
}; 

console.log(addDigits(38))

// prime ugly numbers is 2, 3, 5
var isUgly = function(n) {
  if (n <= 0) return "false"
    while (n > 1) {
      if (n % 2 === 0) {
        n/= 2
      } else if (n % 3 === 0) {
        n/= 3
      } else if ( n % 5 === 0) {
        n/=5
      } else {
        return "false"
      }
    }
    return "true"
};

console.log(isUgly(14))