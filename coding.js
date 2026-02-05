// ========================================
// 🟡 MEDIUM LEVEL (31-70)
// ========================================

// 31. Implement binary search
// Binary search works on SORTED arrays by repeatedly dividing search interval in half
// Time Complexity: O(log n) | Space: O(1)
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Find middle index (avoiding overflow with large numbers)
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  return -1; // Target not found
};

// console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // Output: 3
// console.log(binarySearch([1, 3, 5, 7, 9, 11], 6)); // Output: -1

// 32. Implement linear search
// Checks each element sequentially until target is found
// Time Complexity: O(n) | Space: O(1)
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return index when found
    }
  }
  return -1; // Not found
};

// console.log(linearSearch([4, 2, 7, 1, 9], 7)); // Output: 2

// 33. Find longest word in a sentence
// Time Complexity: O(n) where n is total characters
const findLongestWord = (sentence) => {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};

// console.log(findLongestWord("The quick brown fox jumped")); // Output: "jumped"

// 34. Capitalize the first letter of each word in a string
// Time Complexity: O(n)
const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// console.log(capitalizeWords("hello world from javascript")); 
// Output: "Hello World From Javascript"

// 35. Flatten a nested array
// Recursively flattens arrays of any depth
// Time Complexity: O(n) where n is total elements
const flattenArray = (arr) => {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      // Recursively flatten nested arrays
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
};

// Modern approach using flat()
const flattenArrayModern = (arr, depth = Infinity) => {
  return arr.flat(depth);
};

// console.log(flattenArray([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]

// 36. Find intersection of two arrays
// Returns elements common to both arrays
// Time Complexity: O(n + m)
const findIntersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const intersection = arr2.filter((item) => set1.has(item));
  return [...new Set(intersection)]; // Remove duplicates
};

// console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]

// 37. Find union of two arrays
// Returns all unique elements from both arrays
// Time Complexity: O(n + m)
const findUnion = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

// console.log(findUnion([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]

// 38. Remove falsy values from an array
// Falsy values: false, 0, "", null, undefined, NaN
// Time Complexity: O(n)
const removeFalsyValues = (arr) => {
  return arr.filter(Boolean);
};

// console.log(removeFalsyValues([0, 1, false, 2, "", 3, null, undefined, NaN]));
// Output: [1, 2, 3]

// 39. Find all prime numbers up to n (Sieve of Eratosthenes)
// Efficient algorithm for finding all primes up to n
// Time Complexity: O(n log log n)
const findPrimesUpToN = (n) => {
  if (n < 2) return [];

  // Create array of true values
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  // Mark multiples of each prime as false
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Collect all prime numbers
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) primes.push(i);
  }
  return primes;
};

// console.log(findPrimesUpToN(30)); 
// Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

// 40. Convert a number to binary
// Time Complexity: O(log n)
const numberToBinary = (num) => {
  if (num === 0) return "0";

  let binary = "";
  while (num > 0) {
    binary = (num % 2) + binary; // Prepend remainder
    num = Math.floor(num / 2);
  }
  return binary;
};

// Built-in method
const numberToBinaryBuiltIn = (num) => {
  return num.toString(2);
};

// console.log(numberToBinary(10)); // Output: "1010"

// 41. Convert binary to decimal
// Time Complexity: O(n) where n is length of binary string
const binaryToDecimal = (binary) => {
  let decimal = 0;
  let power = 0;

  // Process from right to left
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);
    }
    power++;
  }
  return decimal;
};

// Built-in method
const binaryToDecimalBuiltIn = (binary) => {
  return parseInt(binary, 2);
};

// console.log(binaryToDecimal("1010")); // Output: 10

// 42. Find frequency of characters in a string
// Time Complexity: O(n)
const characterFrequency = (str) => {
  const frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
};

// console.log(characterFrequency("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }

// 43. Find longest substring without repeating characters
// Sliding window approach
// Time Complexity: O(n) | Space: O(min(n, m)) where m is charset size
const longestSubstringWithoutRepeating = (str) => {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    // If character is already in map and within current window
    if (charMap.has(char) && charMap.get(char) >= start) {
      start = charMap.get(char) + 1; // Move start pointer
    }

    charMap.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

// console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: 3 ("abc")

// 44. Implement a stack using arrays
// LIFO (Last In First Out) data structure
class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to top - O(1)
  push(element) {
    this.items.push(element);
  }

  // Remove and return top element - O(1)
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // Return top element without removing - O(1)
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty - O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Get stack size - O(1)
  size() {
    return this.items.length;
  }

  // Clear all elements - O(1)
  clear() {
    this.items = [];
  }

  // Display stack
  print() {
    console.log(this.items.toString());
  }
}

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// console.log(stack.pop()); // 20
// console.log(stack.peek()); // 10

// 45. Implement a queue using arrays
// FIFO (First In First Out) data structure
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to rear - O(1)
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return front element - O(n) due to shift
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  // Return front element without removing - O(1)
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  // Check if queue is empty - O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Get queue size - O(1)
  size() {
    return this.items.length;
  }

  // Clear all elements - O(1)
  clear() {
    this.items = [];
  }

  // Display queue
  print() {
    console.log(this.items.toString());
  }
}

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// console.log(queue.dequeue()); // 10
// console.log(queue.front()); // 20

// 46. Find factorial of a number using loop
// Iterative approach is more efficient than recursion for this
// Time Complexity: O(n) | Space: O(1)
const factorialIterative = (num) => {
  if (num < 0) return null; // Factorial not defined for negative numbers
  if (num === 0 || num === 1) return 1;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// console.log(factorialIterative(5)); // Output: 120

// 47. Implement a debounce function
// Delays function execution until after specified time has elapsed since last call
// Useful for: search inputs, window resize events, scroll events
const debounce = (func, delay) => {
  let timeoutId;

  return function (...args) {
    // Clear previous timeout
    clearTimeout(timeoutId);

    // Set new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// Usage example:
// const debouncedSearch = debounce((searchTerm) => {
//   console.log("Searching for:", searchTerm);
// }, 500);

// 48. Implement a throttle function
// Ensures function is called at most once per specified time period
// Useful for: scroll events, mouse movements, button clicks
const throttle = (func, limit) => {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

// Usage example:
// const throttledScroll = throttle(() => {
//   console.log("Scroll event");
// }, 1000);

// 49. Find the sum of first n natural numbers
// Formula: n * (n + 1) / 2
// Time Complexity: O(1) using formula, O(n) using loop
const sumOfNaturalNumbers = (n) => {
  // Using formula (optimal)
  return (n * (n + 1)) / 2;
};

// Using loop
const sumOfNaturalNumbersLoop = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// console.log(sumOfNaturalNumbers(100)); // Output: 5050

// 50. Rotate array by k positions (to the right)
// Time Complexity: O(n) | Space: O(1)
const rotateArray = (arr, k) => {
  const n = arr.length;
  k = k % n; // Handle k > n

  // Reverse entire array
  reverse(arr, 0, n - 1);
  // Reverse first k elements
  reverse(arr, 0, k - 1);
  // Reverse remaining elements
  reverse(arr, k, n - 1);

  return arr;
};

// Helper function to reverse array in place
const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

// 51. Find the median of an array
// Median: middle value in sorted array
// Time Complexity: O(n log n) due to sorting
const findMedian = (arr) => {
  // Sort array first
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  // If odd length, return middle element
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  }
  // If even length, return average of two middle elements
  return (sorted[mid - 1] + sorted[mid]) / 2;
};

// console.log(findMedian([3, 1, 4, 2, 5])); // Output: 3
// console.log(findMedian([1, 2, 3, 4])); // Output: 2.5

// 52. Find the mode of an array
// Mode: most frequently occurring element
// Time Complexity: O(n)
const findMode = (arr) => {
  const frequency = {};
  let maxFreq = 0;
  let mode = null;

  // Count frequencies
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = num;
    }
  }

  return mode;
};

// console.log(findMode([1, 2, 2, 3, 3, 3, 4])); // Output: 3

// 53. Implement bubble sort
// Repeatedly swaps adjacent elements if they're in wrong order
// Time Complexity: O(n²) | Space: O(1)
// Good for: small datasets, nearly sorted data
const bubbleSort = (arr) => {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swaps made, array is sorted
    if (!swapped) break;
  }

  return arr;
};

// console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// 54. Implement insertion sort
// Builds sorted array one element at a time
// Time Complexity: O(n²) | Space: O(1)
// Good for: small datasets, nearly sorted data
const insertionSort = (arr) => {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
};

// console.log(insertionSort([12, 11, 13, 5, 6]));

// 55. Implement selection sort
// Finds minimum element and swaps with first unsorted element
// Time Complexity: O(n²) | Space: O(1)
const selectionSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find minimum element in unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap minimum with first unsorted element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

// console.log(selectionSort([64, 25, 12, 22, 11]));

// 56. Implement merge sort
// Divide and conquer algorithm
// Time Complexity: O(n log n) | Space: O(n)
// Good for: large datasets, stable sorting needed
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  // Divide array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort and merge
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let i = 0,
    j = 0;

  // Merge two sorted arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
};

// console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

// 57. Implement quick sort
// Divide and conquer using pivot element
// Time Complexity: O(n log n) average, O(n²) worst | Space: O(log n)
// Good for: general purpose sorting, in-place sorting
const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    // Partition array and get pivot index
    const pivotIndex = partition(arr, low, high);

    // Recursively sort elements before and after partition
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
};

const partition = (arr, low, high) => {
  const pivot = arr[high]; // Choose last element as pivot
  let i = low - 1; // Index of smaller element

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};

// console.log(quickSort([10, 7, 8, 9, 1, 5]));

// 58. Reverse a linked list (simulated using arrays)
// Time Complexity: O(n) | Space: O(1)
const reverseLinkedList = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

// console.log(reverseLinkedList([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// 59. Find duplicate elements in an array
// Time Complexity: O(n) | Space: O(n)
const findDuplicates = (arr) => {
  const seen = new Set();
  const duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates];
};

// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3])); // Output: [2, 3]

// 60. Find first non-repeated character in a string
// Time Complexity: O(n) | Space: O(n)
const firstNonRepeatedChar = (str) => {
  const charCount = {};

  // Count frequency of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeated character found
};

// console.log(firstNonRepeatedChar("aabccdeef")); // Output: "b"

// 61. Check if brackets are balanced in a string
// Uses stack to match opening and closing brackets
// Time Complexity: O(n) | Space: O(n)
const areBracketsBalanced = (str) => {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    // If opening bracket, push to stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    // If closing bracket
    else if (char === ")" || char === "}" || char === "]") {
      // Check if matches top of stack
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  // Stack should be empty if balanced
  return stack.length === 0;
};

// console.log(areBracketsBalanced("{[()()]}")); // Output: true
// console.log(areBracketsBalanced("{[(])}")); // Output: false

// 62. Find power of a number (x^y) without using Math.pow()
// Time Complexity: O(log y) using fast exponentiation
const power = (x, y) => {
  if (y === 0) return 1;
  if (y < 0) return 1 / power(x, -y);

  // Fast exponentiation using divide and conquer
  if (y % 2 === 0) {
    const half = power(x, y / 2);
    return half * half;
  } else {
    return x * power(x, y - 1);
  }
};

// Iterative approach
const powerIterative = (x, y) => {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
};

// console.log(power(2, 10)); // Output: 1024

// 63. Shuffle elements of an array randomly (Fisher-Yates algorithm)
// Time Complexity: O(n) | Space: O(1)
const shuffleArray = (arr) => {
  const shuffled = [...arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

// console.log(shuffleArray([1, 2, 3, 4, 5]));

// 64. Implement memoization for factorial
// Caches results to avoid redundant calculations
// Time Complexity: O(1) for cached values, O(n) for new values
const memoizedFactorial = (() => {
  const cache = {};

  return function factorial(n) {
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;

    // Return cached result if available
    if (cache[n]) {
      return cache[n];
    }

    // Calculate and cache result
    cache[n] = n * factorial(n - 1);
    return cache[n];
  };
})();

// console.log(memoizedFactorial(5)); // Calculates
// console.log(memoizedFactorial(5)); // Returns from cache

// 65. Count pairs with a given sum in an array
// Time Complexity: O(n) | Space: O(n)
const countPairsWithSum = (arr, targetSum) => {
  const seen = new Set();
  let count = 0;

  for (let num of arr) {
    const complement = targetSum - num;

    if (seen.has(complement)) {
      count++;
    }
    seen.add(num);
  }

  return count;
};

// console.log(countPairsWithSum([1, 5, 7, -1, 5], 6)); // Output: 3
// Pairs: (1, 5), (7, -1), (1, 5)

// 66. Convert binary to hexadecimal
// Time Complexity: O(n)
const binaryToHexadecimal = (binary) => {
  // First convert binary to decimal
  const decimal = parseInt(binary, 2);
  // Then convert decimal to hexadecimal
  return decimal.toString(16).toUpperCase();
};

// console.log(binaryToHexadecimal("11111111")); // Output: "FF"

// 67. Implement string compression (e.g., aaabb → a3b2)
// Time Complexity: O(n) | Space: O(n)
const compressString = (str) => {
  if (!str) return "";

  let compressed = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    // If same character, increment count
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      // Add character and count to result
      compressed += str[i - 1] + count;
      count = 1;
    }
  }

  // Return original if compression doesn't reduce size
  return compressed.length < str.length ? compressed : str;
};

// console.log(compressString("aaabbbccc")); // Output: "a3b3c3"
// console.log(compressString("abc")); // Output: "abc" (no compression)

// 68. Check if a number is a perfect square
// Time Complexity: O(log n) using binary search
const isPerfectSquare = (num) => {
  if (num < 0) return false;
  if (num === 0 || num === 1) return true;

  let left = 1;
  let right = Math.floor(num / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

// console.log(isPerfectSquare(16)); // Output: true
// console.log(isPerfectSquare(15)); // Output: false

// 69. Check if a number is palindrome (e.g., 121)
// Time Complexity: O(log n)
const isPalindromeNumber = (num) => {
  if (num < 0) return false; // Negative numbers are not palindromes

  let original = num;
  let reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return original === reversed;
};

// console.log(isPalindromeNumber(121)); // Output: true
// console.log(isPalindromeNumber(123)); // Output: false

// 70. Find longest common prefix among an array of strings
// Time Complexity: O(n * m) where n is number of strings, m is length of shortest
const longestCommonPrefix = (strs) => {
  if (!strs || strs.length === 0) return "";

  // Start with first string as prefix
  let prefix = strs[0];

  // Compare with each string
  for (let i = 1; i < strs.length; i++) {
    // Reduce prefix until it matches start of current string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }

  return prefix;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

// ========================================
// 🔴 ADVANCED LEVEL (71-100)
// ========================================

// 71. Implement a custom deep clone function
// Creates a complete copy of nested objects/arrays
// Time Complexity: O(n) where n is total elements
const deepClone = (obj) => {
  // Handle primitive types and null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle Object
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
};

// const original = { a: 1, b: { c: 2 }, d: [3, 4] };
// const cloned = deepClone(original);
// cloned.b.c = 99;
// console.log(original.b.c); // Output: 2 (unchanged)

// 72. Implement function currying
// Transforms function with multiple arguments into sequence of functions
const curry = (fn) => {
  return function curried(...args) {
    // If enough arguments provided, call original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // Otherwise, return function that takes remaining arguments
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
};

// Example usage:
// const add = (a, b, c) => a + b + c;
// const curriedAdd = curry(add);
// console.log(curriedAdd(1)(2)(3)); // Output: 6
// console.log(curriedAdd(1, 2)(3)); // Output: 6

// 73. Implement custom bind() method
// Creates new function with specified 'this' context
Function.prototype.customBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

// Example:
// const obj = { name: "John" };
// function greet(greeting) {
//   return `${greeting}, ${this.name}`;
// }
// const boundGreet = greet.customBind(obj);
// console.log(boundGreet("Hello")); // Output: "Hello, John"

// 74. Implement custom call() method
// Calls function with specified 'this' value and arguments
Function.prototype.customCall = function (context, ...args) {
  // If context is null/undefined, use global object
  context = context || globalThis;

  // Create unique symbol to avoid property conflicts
  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  // Call function and get result
  const result = context[fnSymbol](...args);

  // Clean up
  delete context[fnSymbol];

  return result;
};

// Example:
// function greet(greeting) {
//   return `${greeting}, ${this.name}`;
// }
// const person = { name: "Alice" };
// console.log(greet.customCall(person, "Hi")); // Output: "Hi, Alice"

// 75. Implement custom apply() method
// Similar to call() but takes arguments as array
Function.prototype.customApply = function (context, args = []) {
  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};

// Example:
// console.log(greet.customApply(person, ["Hey"])); // Output: "Hey, Alice"

// 76. Implement an event emitter (publish/subscribe pattern)
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe to event
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // Unsubscribe from event
  off(event, listenerToRemove) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }

  // Emit event
  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((listener) => {
      listener.apply(this, args);
    });
  }

  // Subscribe once (automatically unsubscribes after first call)
  once(event, listener) {
    const onceWrapper = (...args) => {
      listener.apply(this, args);
      this.off(event, onceWrapper);
    };
    this.on(event, onceWrapper);
  }
}

// const emitter = new EventEmitter();
// emitter.on("greet", (name) => console.log(`Hello, ${name}`));
// emitter.emit("greet", "World"); // Output: "Hello, World"

// 77. Implement a Promise manually
class CustomPromise {
  constructor(executor) {
    this.state = "pending"; // pending, fulfilled, rejected
    this.value = undefined;
    this.handlers = [];

    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }

  _resolve(value) {
    if (this.state !== "pending") return;
    this.state = "fulfilled";
    this.value = value;
    this.handlers.forEach((handler) => this._handle(handler));
  }

  _reject(error) {
    if (this.state !== "pending") return;
    this.state = "rejected";
    this.value = error;
    this.handlers.forEach((handler) => this._handle(handler));
  }

  _handle(handler) {
    if (this.state === "pending") {
      this.handlers.push(handler);
    } else {
      if (this.state === "fulfilled" && handler.onFulfilled) {
        handler.onFulfilled(this.value);
      }
      if (this.state === "rejected" && handler.onRejected) {
        handler.onRejected(this.value);
      }
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      this._handle({
        onFulfilled: (value) => {
          if (!onFulfilled) {
            resolve(value);
          } else {
            try {
              resolve(onFulfilled(value));
            } catch (error) {
              reject(error);
            }
          }
        },
        onRejected: (error) => {
          if (!onRejected) {
            reject(error);
          } else {
            try {
              resolve(onRejected(error));
            } catch (err) {
              reject(err);
            }
          }
        },
      });
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// const promise = new CustomPromise((resolve) => {
//   setTimeout(() => resolve("Done!"), 1000);
// });
// promise.then((value) => console.log(value));

// 78. Implement async/await using Promises
// async/await is syntactic sugar over Promises
async function asyncExample() {
  // Simulating async operation
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data fetched"), 1000);
    });
  };

  try {
    const data = await fetchData();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Manual implementation without async/await keyword
function manualAsync(promise) {
  return promise
    .then((result) => {
      console.log("Success:", result);
      return result;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

// 79. Implement retry logic for API calls
// Retries failed requests with exponential backoff
async function retryWithBackoff(fn, maxRetries = 3, delay = 1000) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      // If last attempt, throw error
      if (attempt === maxRetries - 1) {
        throw error;
      }

      // Wait before retrying (exponential backoff)
      const waitTime = delay * Math.pow(2, attempt);
      console.log(`Retry ${attempt + 1} after ${waitTime}ms`);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
  }
}

// Example usage:
// const fetchData = () => fetch('https://api.example.com/data');
// retryWithBackoff(fetchData, 3, 1000)
//   .then(data => console.log(data))
//   .catch(error => console.error('Failed after retries:', error));

// 80. Implement caching for function results
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    // Create cache key from arguments
    const key = JSON.stringify(args);

    // Return cached result if exists
    if (cache.has(key)) {
      console.log("Returning from cache");
      return cache.get(key);
    }

    // Calculate and cache result
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Example:
// const expensiveOperation = (n) => {
//   console.log("Computing...");
//   return n * n;
// };
// const memoizedOp = memoize(expensiveOperation);
// console.log(memoizedOp(5)); // Computing... 25
// console.log(memoizedOp(5)); // Returning from cache 25

// 81. Write code for a rate limiter function
// Limits number of function calls within time window
class RateLimiter {
  constructor(maxCalls, timeWindow) {
    this.maxCalls = maxCalls; // Max calls allowed
    this.timeWindow = timeWindow; // Time window in ms
    this.calls = []; // Timestamps of calls
  }

  tryCall(fn, ...args) {
    const now = Date.now();

    // Remove calls outside time window
    this.calls = this.calls.filter((time) => now - time < this.timeWindow);

    // Check if limit reached
    if (this.calls.length < this.maxCalls) {
      this.calls.push(now);
      return fn(...args);
    } else {
      console.log("Rate limit exceeded. Try again later.");
      return null;
    }
  }
}

// Example:
// const limiter = new RateLimiter(3, 10000); // 3 calls per 10 seconds
// limiter.tryCall(() => console.log("API call 1"));
// limiter.tryCall(() => console.log("API call 2"));

// 82. Solve the merge intervals problem
// Merges overlapping intervals
// Time Complexity: O(n log n) | Space: O(n)
const mergeIntervals = (intervals) => {
  if (intervals.length <= 1) return intervals;

  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    // If current overlaps with last merged interval
    if (current[0] <= lastMerged[1]) {
      // Merge by extending end time
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, add as new interval
      merged.push(current);
    }
  }

  return merged;
};

// console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Output: [[1, 6], [8, 10], [15, 18]]

// 83. Find kth largest element in an array
// Using QuickSelect algorithm (optimal)
// Time Complexity: O(n) average | Space: O(1)
const findKthLargest = (arr, k) => {
  // Convert to kth smallest by reversing k
  return quickSelect(arr, 0, arr.length - 1, arr.length - k);
};

const quickSelect = (arr, left, right, k) => {
  if (left === right) return arr[left];

  // Partition array
  const pivotIndex = partition2(arr, left, right);

  // If pivot is the kth element
  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex + 1, right, k);
  }
};

const partition2 = (arr, left, right) => {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
};

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5

// 84. Find majority element in an array
// Element appearing more than n/2 times
// Boyer-Moore Voting Algorithm
// Time Complexity: O(n) | Space: O(1)
const majorityElement = (arr) => {
  let candidate = null;
  let count = 0;

  // Find candidate
  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Verify candidate (optional, depends on problem guarantee)
  count = 0;
  for (let num of arr) {
    if (num === candidate) count++;
  }

  return count > arr.length / 2 ? candidate : null;
};

// console.log(majorityElement([3, 2, 3])); // Output: 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

// 85. Find subarray with maximum sum (Kadane's Algorithm)
// Time Complexity: O(n) | Space: O(1)
const maxSubarraySum = (arr) => {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Either extend existing subarray or start new one
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
// Subarray: [4, -1, 2, 1]

// 86. Find minimum number of coins (Coin Change Problem)
// Dynamic Programming approach
// Time Complexity: O(amount * coins.length) | Space: O(amount)
const coinChange = (coins, amount) => {
  // Create DP array initialized to Infinity
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Base case: 0 coins needed for amount 0

  // For each amount from 1 to target
  for (let i = 1; i <= amount; i++) {
    // Try each coin
    for (let coin of coins) {
      if (coin <= i) {
        // Update minimum coins needed
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

// console.log(coinChange([1, 2, 5], 11)); // Output: 3 (5+5+1)
// console.log(coinChange([2], 3)); // Output: -1 (impossible)

// 87. Find longest increasing subsequence in an array
// Dynamic Programming approach
// Time Complexity: O(n²) | Space: O(n)
const longestIncreasingSubsequence = (arr) => {
  if (arr.length === 0) return 0;

  // dp[i] = length of LIS ending at index i
  const dp = new Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

// console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
// Output: 4 (subsequence: [2, 3, 7, 101])

// 88. Find shortest path in a grid (BFS approach)
// Time Complexity: O(rows * cols) | Space: O(rows * cols)
const shortestPathGrid = (grid, start, end) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [[...start, 0]]; // [row, col, distance]
  const visited = new Set([`${start[0]},${start[1]}`]);

  // Directions: up, right, down, left
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [row, col, dist] = queue.shift();

    // If reached end
    if (row === end[0] && col === end[1]) {
      return dist;
    }

    // Explore neighbors
    for (let [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      const key = `${newRow},${newCol}`;

      // Check if valid and not visited
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 0 && // 0 = walkable, 1 = wall
        !visited.has(key)
      ) {
        visited.add(key);
        queue.push([newRow, newCol, dist + 1]);
      }
    }
  }

  return -1; // No path found
};

// Example:
// const grid = [
//   [0, 0, 0],
//   [1, 1, 0],
//   [0, 0, 0]
// ];
// console.log(shortestPathGrid(grid, [0, 0], [2, 2])); // Output: 4

// 89. Solve Tower of Hanoi using recursion
// Classic recursive problem
// Time Complexity: O(2^n) | Space: O(n) for call stack
const towerOfHanoi = (n, source, auxiliary, destination) => {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  // Move n-1 disks from source to auxiliary using destination
  towerOfHanoi(n - 1, source, destination, auxiliary);

  // Move nth disk from source to destination
  console.log(`Move disk ${n} from ${source} to ${destination}`);

  // Move n-1 disks from auxiliary to destination using source
  towerOfHanoi(n - 1, auxiliary, source, destination);
};

// console.log("Tower of Hanoi for 3 disks:");
// towerOfHanoi(3, "A", "B", "C");

// 90. Solve the N-Queens problem
// Place N queens on N×N board so no two attack each other
// Time Complexity: O(N!) | Space: O(N²)
const solveNQueens = (n) => {
  const board = Array(n)
    .fill()
    .map(() => Array(n).fill("."));
  const solutions = [];

  const isSafe = (row, col) => {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check upper left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Check upper right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  };

  const solve = (row) => {
    // If all queens placed, save solution
    if (row === n) {
      solutions.push(board.map((r) => r.join("")));
      return;
    }

    // Try placing queen in each column
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        solve(row + 1);
        board[row][col] = "."; // Backtrack
      }
    }
  };

  solve(0);
  return solutions;
};

// console.log(solveNQueens(4));
// Output: All valid 4-queens solutions

// 91. Implement a binary tree in JavaScript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert node (for BST)
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Search for value
  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

// const tree = new BinaryTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// console.log(tree.search(5)); // true

// 92. Implement depth-first search (DFS)
// Three types: preorder, inorder, postorder
const dfsPreorder = (root) => {
  if (!root) return [];

  const result = [];

  const traverse = (node) => {
    if (!node) return;

    result.push(node.value); // Visit root
    traverse(node.left); // Traverse left
    traverse(node.right); // Traverse right
  };

  traverse(root);
  return result;
};

const dfsInorder = (root) => {
  if (!root) return [];

  const result = [];

  const traverse = (node) => {
    if (!node) return;

    traverse(node.left); // Traverse left
    result.push(node.value); // Visit root
    traverse(node.right); // Traverse right
  };

  traverse(root);
  return result; // Returns sorted order for BST
};

const dfsPostorder = (root) => {
  if (!root) return [];

  const result = [];

  const traverse = (node) => {
    if (!node) return;

    traverse(node.left); // Traverse left
    traverse(node.right); // Traverse right
    result.push(node.value); // Visit root
  };

  traverse(root);
  return result;
};

// 93. Implement breadth-first search (BFS)
// Level-order traversal
const bfs = (root) => {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
};

// 94. Serialize and deserialize a binary tree
// Convert tree to string and back
const serialize = (root) => {
  if (!root) return "null";

  return `${root.value},${serialize(root.left)},${serialize(root.right)}`;
};

const deserialize = (data) => {
  const values = data.split(",");

  const buildTree = () => {
    const val = values.shift();

    if (val === "null") return null;

    const node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();

    return node;
  };

  return buildTree();
};

// 95. Detect cycle in a linked list (Floyd's Cycle Detection)
// Using slow and fast pointers
// Time Complexity: O(n) | Space: O(1)
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const hasCycle = (head) => {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // Move 1 step
    fast = fast.next.next; // Move 2 steps

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false;
};

// 96. Detect cycle in a graph (DFS approach)
// Time Complexity: O(V + E) where V = vertices, E = edges
const hasCycleGraph = (graph) => {
  const visited = new Set();
  const recStack = new Set();

  const dfsCheckCycle = (node) => {
    visited.add(node);
    recStack.add(node);

    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        if (dfsCheckCycle(neighbor)) return true;
      } else if (recStack.has(neighbor)) {
        return true; // Back edge found (cycle)
      }
    }

    recStack.delete(node);
    return false;
  };

  // Check all nodes
  for (let node in graph) {
    if (!visited.has(node)) {
      if (dfsCheckCycle(node)) return true;
    }
  }

  return false;
};

// Example:
// const graph = {
//   0: [1, 2],
//   1: [2],
//   2: [0, 3],
//   3: [3]
// };
// console.log(hasCycleGraph(graph)); // true

// 97. Implement Dijkstra's algorithm (shortest path)
// Finds shortest path from source to all vertices
// Time Complexity: O((V + E) log V) with priority queue
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node, priority) {
    this.values.push({ node, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

const dijkstra = (graph, start) => {
  const distances = {};
  const pq = new PriorityQueue();

  // Initialize distances
  for (let vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity;
  }

  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { node: current } = pq.dequeue();

    for (let neighbor in graph[current]) {
      const distance = distances[current] + graph[current][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        pq.enqueue(neighbor, distance);
      }
    }
  }

  return distances;
};

// Example:
// const graph = {
//   A: { B: 4, C: 2 },
//   B: { A: 4, C: 1, D: 5 },
//   C: { A: 2, B: 1, D: 8 },
//   D: { B: 5, C: 8 }
// };
// console.log(dijkstra(graph, 'A'));

// 98. Implement A* algorithm (pathfinding)
// Heuristic-based pathfinding (used in games, maps)
// Time Complexity: O(E) where E = edges
const aStarPathfinding = (grid, start, goal) => {
  const heuristic = (a, b) => {
    // Manhattan distance
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  };

  const openSet = [{ pos: start, f: 0, g: 0 }];
  const closedSet = new Set();
  const cameFrom = new Map();

  while (openSet.length > 0) {
    // Get node with lowest f score
    openSet.sort((a, b) => a.f - b.f);
    const current = openSet.shift();

    if (current.pos[0] === goal[0] && current.pos[1] === goal[1]) {
      // Reconstruct path
      const path = [current.pos];
      let temp = current.pos.toString();
      while (cameFrom.has(temp)) {
        temp = cameFrom.get(temp);
        path.unshift(temp.split(",").map(Number));
      }
      return path;
    }

    closedSet.add(current.pos.toString());

    // Check neighbors (up, right, down, left)
    const directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];

    for (let [dr, dc] of directions) {
      const neighbor = [current.pos[0] + dr, current.pos[1] + dc];
      const neighborKey = neighbor.toString();

      // Skip if out of bounds or wall or already visited
      if (
        neighbor[0] < 0 ||
        neighbor[0] >= grid.length ||
        neighbor[1] < 0 ||
        neighbor[1] >= grid[0].length ||
        grid[neighbor[0]][neighbor[1]] === 1 ||
        closedSet.has(neighborKey)
      ) {
        continue;
      }

      const gScore = current.g + 1;
      const hScore = heuristic(neighbor, goal);
      const fScore = gScore + hScore;

      // Add to open set if not already there with better score
      const inOpenSet = openSet.find(
        (n) => n.pos[0] === neighbor[0] && n.pos[1] === neighbor[1]
      );

      if (!inOpenSet || gScore < inOpenSet.g) {
        cameFrom.set(neighborKey, current.pos.toString());
        if (inOpenSet) {
          inOpenSet.g = gScore;
          inOpenSet.f = fScore;
        } else {
          openSet.push({ pos: neighbor, f: fScore, g: gScore });
        }
      }
    }
  }

  return null; // No path found
};

// 99. Implement LRU (Least Recently Used) cache
// Cache with limited capacity that evicts least recently used items
// Time Complexity: O(1) for get and put operations
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Maintains insertion order
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    // Move to end (most recently used)
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    // If exists, remove old entry
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // Add new entry
    this.cache.set(key, value);

    // If over capacity, remove least recently used (first item)
    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

// const cache = new LRUCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1)); // 1
// cache.put(3, 3); // Evicts key 2
// console.log(cache.get(2)); // -1 (not found)

// 100. Implement a simple blockchain in JavaScript
// Basic blockchain with proof-of-work
const crypto = require("crypto"); // For hashing

class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0; // For proof of work
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto
      .createHash("sha256")
      .update(
        this.index +
          this.previousHash +
          this.timestamp +
          JSON.stringify(this.data) +
          this.nonce
      )
      .digest("hex");
  }

  // Proof of work: find hash starting with certain number of zeros
  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log(`Block mined: ${this.hash}`);
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2; // Mining difficulty
  }

  createGenesisBlock() {
    return new Block(0, Date.now(), "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // Verify current block's hash
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      // Verify link to previous block
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

// Example usage:
// const myBlockchain = new Blockchain();
// console.log("Mining block 1...");
// myBlockchain.addBlock(new Block(1, Date.now(), { amount: 100 }));
// console.log("Mining block 2...");
// myBlockchain.addBlock(new Block(2, Date.now(), { amount: 50 }));
// console.log("Is blockchain valid?", myBlockchain.isChainValid());
// console.log(JSON.stringify(myBlockchain, null, 2));

/* 
==============================================
SUMMARY OF KEY CONCEPTS
==============================================

DATA STRUCTURES:
- Arrays, Stacks, Queues, Linked Lists, Trees, Graphs
- Hash Maps/Sets for O(1) lookups
- Priority Queues for efficient min/max operations

ALGORITHMS:
- Searching: Binary Search O(log n), Linear Search O(n)
- Sorting: Bubble O(n²), Insertion O(n²), Selection O(n²), 
          Merge O(n log n), Quick O(n log n)
- Graph: DFS, BFS, Dijkstra, A*
- Dynamic Programming: Memoization, Bottom-up approach
- Greedy: Taking locally optimal choices
- Divide & Conquer: Breaking problem into subproblems

PATTERNS:
- Two Pointers: For array/string problems
- Sliding Window: For substring/subarray problems
- Fast & Slow Pointers: For cycle detection
- Recursion: For tree/graph traversal
- Backtracking: For combinatorial problems

TIME COMPLEXITIES:
- O(1): Constant - hash map operations
- O(log n): Logarithmic - binary search
- O(n): Linear - single loop
- O(n log n): Linearithmic - merge/quick sort
- O(n²): Quadratic - nested loops
- O(2ⁿ): Exponential - recursive fibonacci
- O(n!): Factorial - permutations

BEST PRACTICES:
1. Always consider edge cases (empty input, single element, etc.)
2. Optimize space vs time complexity based on constraints
3. Use appropriate data structures for the problem
4. Consider iterative vs recursive approaches
5. Add comments explaining complex logic
6. Test with various inputs including edge cases
*/
