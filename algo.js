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


//Brute force method for searchInsert
var searchInsert = function(nums, target) {
  let endBound = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i
    } else if (target > nums[i] && target < nums[i+1]) {
      return i + 1
    } else if (target > nums[endBound]) {
      return endBound + 1
    } else if (target < nums[0]) {
      return i
    }
  }
};

// Binary Search, faster method with better time complexity
var binarySearchInsert = function(nums, target) {
  let startPoint = 0
  let endPoint = nums.length - 1

  while (startPoint <= endPoint) {
    let midPoint = Math.floor((startPoint + endPoint) / 2)
    if (nums[midPoint] === target) {
      return midPoint
    } else if (nums[midPoint] < target) {
      startPoint = midPoint + 1
    } else {
      endPoint = midPoint - 1
    }
  }
  if (startPoint > endPoint) {
    return startPoint
  } else {
    return endPoint
  }
}

console.log(binarySearchInsert([1,3,5,6], 7)) 