var containsDuplicate = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    }
    obj[nums[i]] = true;
  }
  return false;
};

nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
