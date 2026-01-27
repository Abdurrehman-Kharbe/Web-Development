// Question 1: Print Only Odd Numbers
let arr1 = [1, 2, 3, 4, 5];
console.log("Odd Numbers in the array:");
function printOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}
printOdd(arr1);

// Question 2: Count Odd Numbers
let arr2 = [3, 6, 9, 10];
console.log("Count of Odd Numbers in the array:");
function countOdd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}
console.log(countOdd(arr2));

// Question 3: Print Array in Reverse
let arr3 = [10, 20, 30];
console.log("Array in Reverse Order:");
function printReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printReverse(arr3);

// Question 4: Multiply Each Element by 5
let arr4 = [2, 4];
console.log("Array elements multiplied by 5:");
function multiplyByFive(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 5);
  }
  return result;
}
console.log(multiplyByFive(arr4));

// Question 5: Find the Smallest Number

let arr5 = [8, 3, 6, 1];
console.log("Smallest number in the array:");
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin(arr5));

// Question 6: Print Positive Numbers
let arr6 = [-2, 5, -1, 7];
console.log("Positive Numbers in the array:");
function printPositive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(arr[i]);
    }
  }
}
printPositive(arr6);

// Question 7: Count Numbers Greater Than 10
let arr7 = [5, 12, 20, 8];
console.log("Count of numbers greater than 10 in the array:");
function countGreater(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      count++;
    }
  }
  return count;
}
console.log(countGreater(arr7));

// Question 8: Convert to Negative Numbers
let arr8 = [2, -4, 5];
console.log("Array with all numbers as negative:");
function makeNegative(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(-arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(makeNegative(arr8));

// Question 9: Print Index with Value
let arr9 = [10, 20];
console.log("Index and corresponding values in the array:");
function printIndexValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Index " + i + " : " + arr[i]);
  }
}
printIndexValue(arr9);

// Question 10: Sum of Even Numbers
let arr10 = [1, 2, 4, 5];
console.log("Sum of even numbers in the array:");
function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumEven(arr10));

// Question 11: Increment Array Values
let arr11 = [4, 7];
console.log("Array with each element incremented by 1:");
function incrementArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 1);
  }
  return result;
}
console.log(incrementArray(arr11));

// Question 12: Check Zero in Array
let arr12 = [3, 0, 5];
console.log("Check if array contains zero:");
function hasZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      return true;
    }
  }
  return false;
}
console.log(hasZero(arr12));
