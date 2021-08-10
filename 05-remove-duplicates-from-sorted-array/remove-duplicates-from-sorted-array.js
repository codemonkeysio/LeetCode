/* 

Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-duplicates-from-sorted-array/

*/

// Implementation
var removeDuplicates = function (nums) {
  const numsLength = nums.length;

  if (numsLength === 0) {
    return 0;
  }

  let j = 1;
  for (let i = 0; i < numsLength - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }

  return j;
};

nums = [1, 1, 1, 2, 2];
console.log("k =", removeDuplicates(nums), "nums =", nums);
