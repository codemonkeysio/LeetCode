// Single Number
// https://leetcode.com/problems/single-number/

// Given a non-empty array of integers nums
// Every element appears twice except for one

// Find that single one

// Implement a solution with linear runtime complexity
// Only use constant extra space

// Linear Runtime -> O(n), ok to use a solution that uses
// a loop but not a nested loop

// Given space complexity is O(n) since we're given an 
// array of length n
// We only want to use constant extra space, so our 
// solution must have at most O(n) space complexity

// Example 1:
// Input: nums = [2, 2, 1]
// Output: 1

// Example 2:
// Input: nums = [4, 1, 2, 1, 2]
// Output: 4

// Example 3: 
// Input: nums = [1]
// Output: 1

// Constraints:
// 1 <= nums.length <= 3 * 10^4
// -3 * 10^4 <= nums[i] <= 3 * 10^4
// Each element in the array appears twice except for 
// one element which only appears once

// Thought Process
// Need to iterate over the entire array since we need to find 
// out which element appears only once, so we'll use a for loop

// Now to keep track of how many times a value has appeared in 
// our array we can use a hash table - basically gives us key 
// value pairs

// Where the key represents the element in the array and the 
// value can be set to true if it has only appeared once 
// If the key appears again we can remove it since we know every 
// element other than the unique element appears twice and we want 
// to find the unique element

// Then we just need to return the key of our object

// Implementation
var singleNumber = function (nums) {
    const myObj = {};
    for (let i = 0; i < nums.length; i++) {
      if (myObj[nums[i]]) {
        delete myObj[nums[i]];
      } else {
        myObj[nums[i]] = true;
      }
    }
    return Object.keys(myObj)[0];
  };

nums = [2, 2, 1]

// Summary of the implementation  
// myObj = { key: elementInNums, value: true }
// 1st iteration: myObj = { key: 2, value: true }
// 2nd iteration: delete the key value pair where the key is 2
// 3rd iteration: myObj = { key: 1, value: true }

console.log(singleNumber(nums));