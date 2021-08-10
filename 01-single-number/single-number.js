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

nums = [2, 2, 1];
console.log(singleNumber(nums));
