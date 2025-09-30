// 1.	Write a program to check if a number is even or odd.

// const chechOddEven = (num) => {
//   return num % 2 == 0 ? "even" : "odd";
// };

// console.log(chechOddEven(8));
// console.log(chechOddEven(5));

// 2.	Find the largest of three numbers.

// function largestOfThreeNum(a, b, c) {
//   return a > b ? (a > c ? a : c) : b > c ? b : c;
// }

// console.log(largestOfThreeNum(3, 4, 5));
// console.log(largestOfThreeNum(3, 6, 5));
// console.log(largestOfThreeNum(7, 4, 5));

// 3.	Swap two numbers without using a third variable.

// let a = 4,
//   b = 7;

// const swapNumber = function (a, b) {
//   console.log(`Before swapping a=${a} and b=${b}`);
//   a = a + b;
//   b = b - a;
//   a = a - b;
//   console.log(`After swapping a=${a} and b=${b}`);
// };

// swapNumber(a, b);

// 4.	Reverse a string without using built-in functions.

// let str = "anish";
// const reverseStr = (strr) => {
//   let len = strr.length;
//   let tempStr = "";

//   while (len) {
//     tempStr += strr[len - 1];
//     len--;
//   }
//   return tempStr;
// };

// console.log(reverseStr(str));

// 5.	Count vowels and consonants in a string.

// const countVowCons = (str) => {
//   let vowCount = 0,
//     consCount = 0;
//   for (char of str) {
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       vowCount++;
//     } else consCount++;
//   }
//   console.log(`vowel count = ${vowCount} and consonant count = ${consCount}`);
// };

// countVowCons("abdefghi");

// 6.	Check if a string is a palindrome.

// const checkPalindrome = (str) => {
//   const reverseStr = (strr) => {
//     let len = strr.length;
//     let tempStr = "";

//     while (len) {
//       tempStr += strr[len - 1];
//       len--;
//     }
//     return tempStr;
//   };

//   str = str.toLowerCase();
//   let revStr = reverseStr(str);
//   return str === revStr;
// };

// console.log(checkPalindrome("anIshsina"));

// 7.	Find the factorial of a number using recursion.

// const findFact = (num) => {
//   if (num == 0 || num == 1) return 1;
//   let result = num * findFact(num - 1);
//   return result;
// };

// console.log(findFact(6));
// console.log(findFact(7));
// console.log(findFact(0));
// console.log(findFact(1));

// 8.	Print Fibonacci series up to n terms.

// const printFibonacci = (num) => {
//   let Fibonacci = [];

//   Fibonacci[0] = 1;
//   Fibonacci[1] = 1;
//   let i = 0;

//   while (num > i) {
//     if (i == 0 || i == 1) {
//       Fibonacci[i] = 1;
//     } else {
//       Fibonacci[i] = Fibonacci[i - 1] + Fibonacci[i - 2];
//     }
//     i++;
//   }
//   return Fibonacci;
// };

// console.log(printFibonacci(20));

// 9.	Check if a number is prime.

// const checkPrime = (num) => {
//   if (num < 0) {
//     return "Invalid Number";
//   } else if (num == 1) {
//     return "Not Prime";
//   } else {
//     let i = 2;
//     while (i < num / 2) {
//       if (num % i == 0) {
//         return "Not Prime";
//       }
//       i++;
//     }
//     return "Prime";
//   }
// };

// console.log(checkPrime(2));
// console.log(checkPrime(3));
// console.log(checkPrime(5));
// console.log(checkPrime(7));
// console.log(checkPrime(13));
// console.log(checkPrime(47));

// 10.	Find the sum of digits of a number.

// const findSumOfDigit = (num) => {
//   let sum = 0;
//   while (num / 10 > 0) {
//     let rem = Math.floor(num % 10);

//     sum += rem;
//     num /= 10;
//   }
//   return sum;
// };

// console.log(findSumOfDigit(12200330));

// 11.	Reverse a number (e.g., 123 → 321).

// const reverseNum = (num) => {
//   let result = 0;
//   while (num > 0) {
//     result = 10 * result + Math.floor(num % 10);
//     num = Math.floor(num / 10);
//   }
//   return result;
// };

// console.log(reverseNum(1234));

// 12.	Find the greatest common divisor (GCD) of two numbers.

// const findGcd = (num1, num2) => {
//   let div1 = [];
//   let min = Math.min(num1, num2);
//   for (let i = 1; i < min; i++) {
//     if (num1 % i == 0 && num2 % i == 0) {
//       div1.push(i);
//     }
//   }
//   return div1[div1.length - 1];
// };

// console.log(findGcd(16, 20));

// 13.	Find the least common multiple (LCM) of two numbers.

// const findLcm = (num1, num2) => {
//   let maxNum = Math.max(num1, num2);
//   let range = num1 * num2;
//   for (let i = maxNum; i <= range; i++) {
//     if (i % num1 == 0 && i % num2 == 0) {
//       return i;
//     }
//   }
// };

// console.log(findLcm(4, 6));

// 14.	Check if a year is a leap year.

// const findLeapYear = (year) => {
//   return year % 400 === 0
//     ? "Leap Year"
//     : year % 100 === 0
//     ? "Not Leap Year"
//     : year % 4 === 0
//     ? "Leap Year"
//     : "Not Leap Year";
// };

// console.log(findLeapYear(1200));
// console.log(findLeapYear(1100));
// console.log(findLeapYear(2024));

// 15.	Convert Celsius to Fahrenheit and vice versa.

// // Celsius to Fahrenheit
// const celsiusToFahrenheit = (celsius) => {
//   return (celsius * 9) / 5 + 32;
// };

// // Fahrenheit to Celsius
// const fahrenheitToCelsius = (fahrenheit) => {
//   return ((fahrenheit - 32) * 5) / 9;
// };

// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(100));

// console.log(fahrenheitToCelsius(-42));
// console.log(fahrenheitToCelsius(212));

// 16.	Count words in a sentence.

// const countWords = (sentence) => {
//   let wordsArray = sentence.split(" ");
//   return wordsArray.length;
// };

// console.log(countWords("hello ji kya haal chal"));

// 17.	Find the ASCII value of a character.

// const findASCII = (char) => {
//   return char.charCodeAt(0);
// };

// console.log(findASCII("A"));
// console.log(findASCII("a"));
// console.log(findASCII("Z"));
// console.log(findASCII("z"));
// console.log(findASCII("0"));

// 18.	Check if two strings are anagrams.

// 19.	Print multiplication table of a number.

// const printTable = (num) => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
//   }
// };

// printTable(6);

// 20.	Find minimum and maximum in an array.

// const finMinMax = (arr) => {
//   let min = arr[0];
//   let max = arr[0];
//   for (num of arr) {
//     if (num > max) {
//       max = num;
//     }
//     if (num < min) {
//       min = num;
//     }
//   }
//   return `min = ${min},max = ${max}`;
// };

// console.log(finMinMax([12, 4, 2, 5, 3, 64, 0]));

// 21.	Find the second largest number in an array.

// const secondLargest = (arr) => {
//   if (arr.length < 2) return null;

//   let first = -Infinity;
//   let second = -Infinity;

//   for (let num of arr) {
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num < first) {
//       second = num;
//     }
//   }

//   return second === -Infinity ? null : second;
// };

// console.log(secondLargest([10, 20, 4, 45, 99]));
// console.log(secondLargest([5, 5, 5]));
// console.log(secondLargest([1]));

// 22.	Remove duplicates from an array.

// let arr = [1, 2, 2, 3, 4, 4, 5];

// // Using Set
// let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);

// // Using filter
// let uniqueArr2 = arr.filter((value, index) => arr.indexOf(value) === index);
// console.log(uniqueArr2);

// 23.	Sort an array without using sort().

// 24.	Find the sum of all elements in an array.
// let arr1 = [3, 5, 6, 2, 4, 5];

// const sumOfArray = (arr) => {
//   let sum = 0;
//   for (ele of arr) {
//     sum += ele;
//   }
//   return sum;
// };

// console.log(sumOfArray(arr1));

// 25.	Count occurrences of an element in an array.

// let arr1 = [-1, 5, 2, 3, -1, -1, 4, 2, 1, 3, 4, 5];
// let num = -1;

// const findOccurence = (arr, n) => {
//   let nOccur = 0;
//   for (item of arr) {
//     if (item === n) nOccur++;
//   }
//   return nOccur;
// };

// console.log(findOccurence(arr1, num));

// 26.	Find missing number in a sequence (1–n).

// let arr1 = [1, 2, 3, 4, 6, 7, 8];

// const findMissingNum = (arr) => {
//   for (let i = 0, j = 1; i < arr1.length; i++, j++) {
//     if (arr[j] - arr[i] > 1) {
//       return arr[j] - 1;
//     }
//   }
// };

// console.log(findMissingNum(arr1));

// 27.	Check if a number is an Armstrong number.

// let num = 1634;
// let num = 8208;

// const findArmstronNumber = (n) => {
//   let tempN = n;
//   let armNum = 0;
//   while (n > 0) {
//     armNum += Math.pow(Math.floor(n % 10), 4);
//     n = Math.floor(n / 10);
//   }

//   if (tempN === armNum) return "Yes, this is armstrong number";
//   else return "No, its not";
// };

// console.log(findArmstronNumber(num));

// 28.	Generate a random number between 1–100.

// const genrateRandomNum = (n1, n2) => {
//   let randomNum = Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
//   return randomNum;
// };

// console.log(genrateRandomNum(1, 5));

// 29.	Find square root of a number without using Math.sqrt().

// const findSqrt = (num) => {
//   return Math.sqrt(num);
// };
// console.log(findSqrt(0));

// 30.	Reverse words in a sentence.

// In detail
// const reverseWords = (str) => {
//   let strArray = str.split(" ");
//   console.log(strArray);
//   let tempArr1 = strArray.map((word) => word.split("").reverse().join(""));
//   let tempArr2 = tempArr1.join(" ");
//   console.log(tempArr2);
// };

// In one line
const reverseWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

// reverseWords("hi there, heloo");
console.log(reverseWords("hi there, heloo"));

// ________________________________________
// 🟡 Medium Level (31–70)
// 31.	Implement binary search.
// 32.	Implement linear search.
// 33.	Find longest word in a sentence.
// 34.	Capitalize the first letter of each word in a string.
// 35.	Flatten a nested array.
// 36.	Find intersection of two arrays.
// 37.	Find union of two arrays.
// 38.	Remove falsy values from an array.
// 39.	Find all prime numbers up to n.
// 40.	Convert a number to binary.
// 41.	Convert binary to decimal.
// 42.	Find frequency of characters in a string.
// 43.	Find longest substring without repeating characters.
// 44.	Implement a stack using arrays.
// 45.	Implement a queue using arrays.
// 46.	Find factorial of a number using loop.
// 47.	Implement a debounce function.
// 48.	Implement a throttle function.
// 49.	Find the sum of first n natural numbers.
// 50.	Rotate array by k positions.
// 51.	Find the median of an array.
// 52.	Find the mode of an array.
// 53.	Implement bubble sort.
// 54.	Implement insertion sort.
// 55.	Implement selection sort.
// 56.	Implement merge sort.
// 57.	Implement quick sort.
// 58.	Reverse a linked list (simulate using arrays).
// 59.	Find duplicate elements in an array.
// 60.	Find first non-repeated character in a string.
// 61.	Check if brackets are balanced in a string.
// 62.	Find power of a number (x^y) without using Math.pow().
// 63.	Shuffle elements of an array randomly.
// 64.	Implement memoization for factorial.
// 65.	Count pairs with a given sum in an array.
// 66.	Convert binary to hexadecimal.
// 67.	Implement string compression (e.g., aaabb → a3b2).
// 68.	Check if a number is a perfect square.
// 69.	Check if a number is palindrome (e.g., 121).
// 70.	Find longest common prefix among an array of strings.
// ________________________________________
// 🔴 Advanced Level (71–100)
// 71.	Implement a custom deep clone function.
// 72.	Implement function currying.
// 73.	Implement custom bind() method.
// 74.	Implement custom call() method.
// 75.	Implement custom apply() method.
// 76.	Implement an event emitter (publish/subscribe).
// 77.	Implement a Promise manually.
// 78.	Implement async/await using Promises.
// 79.	Implement retry logic for API calls.
// 80.	Implement caching for function results.
// 81.	Write code for a rate limiter function.
// 82.	Solve the merge intervals problem.
// 83.	Find kth largest element in an array.
// 84.	Find majority element in an array.
// 85.	Find subarray with maximum sum (Kadane’s algorithm).
// 86.	Find minimum number of coins (coin change problem).
// 87.	Find longest increasing subsequence in an array.
// 88.	Find shortest path in a grid (BFS approach).
// 89.	Solve Tower of Hanoi using recursion.
// 90.	Solve the N-Queens problem.
// 91.	Implement a binary tree in JavaScript.
// 92.	Implement depth-first search (DFS).
// 93.	Implement breadth-first search (BFS).
// 94.	Serialize and deserialize a binary tree.
// 95.	Detect cycle in a linked list.
// 96.	Detect cycle in a graph.
// 97.	Implement Dijkstra’s algorithm.
// 98.	Implement A* algorithm (pathfinding).
// 99.	Implement LRU cache.
// 100.	Implement a simple blockchain in JavaScript.
