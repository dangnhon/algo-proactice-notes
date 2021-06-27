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


// Brute force method for searchInsert
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

var lengthOfLastWord = function(s) {
  let arr = s.trim().split(" ")
  return arr.pop().length
};

console.log(lengthOfLastWord("b   a    "))

var plusOne = function(digits) {
// turn array of digits into one number 
//increment by 1
// turn it back into array with single digits
  return digits
};

console.log(plusOne([9, 9]))

//HackerRank problem, tricky but utilised hashObject for fast storage and lookup check
function priceCheck(prod, proPrices, prodSold, soldPrice) {
  let count = 0
  let cata = {} 
  for (let i = 0; i < prod.length; i++) {
    cata[prod[i]] = proPrices[i]
  }
  for (let i = 0; i < prodSold.length; i++) {
    if (prodSold[i] in cata && soldPrice[i] !== cata[prodSold[i]]) {
      count ++
    }
  }
  return count
}

console.log(priceCheck(["egg", "milk", "cheese"], [2.89, 3.29, 5.79], ["egg", "egg", "cheese", "milk"], [2.89, 2.99, 5.97, 3.29]))

// This one took a bit to understand the exact problem and what it wanted for a solution
// When the signal matches, the maxPower level is the waveLength listed,
// The maxPower wavelength only increases and cannot go down,
// Count how many times the maxPower level increases
function updateTimes(signalOne, signalTwo) {
  let matchLength = 0
  let count = 0
  for (let i = 0; i < signalOne.length; i++) {
      if (signalOne[i] === signalTwo[i] && matchLength < signalOne[i]) {
          matchLength = signalOne[i]
          count++
      }
  }
  return count
}

console.log(updateTimes([1,2,3,3,4,6], [1,2,3,4,5,6]))

// delete duplicates of linked list and return the linked list in sorted order
var deleteDuplicates = function(head) {
    let currNode = head 
    while (currNode !== null && currNode.next !== null) {
        if (currNode.val === currNode.next.val) {
            currNode.next = currNode.next.next
        } else {
            currNode = currNode.next
        }
    }
    return head 
};

// fiind unique intersection between 2 arrays
var intersection = function(nums1, nums2) {
  let hash = [] 
  
  for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
          hash.push(nums1[i])
      }
  }
    return [...new Set(hash)]
  
};

// median of two sorted array hard leetcode problem
var findMedianSortedArrays = function(nums1, nums2) {
  let allNums = [...nums1, ...nums2].sort((a, b) => a -b)
  let midPoint = Math.floor(allNums.length / 2)

  if (allNums.length % 2 === 1) {
    return allNums[midPoint]
  } else {
    return ((allNums[midPoint - 1] + allNums[midPoint]) / 2) 
  }
};