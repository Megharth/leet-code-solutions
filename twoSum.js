/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
    let map = new Map()
    let ans = []
    nums.forEach((num, index) => {
        let complement = target - num
        if(map.has(complement)) {
            ans.push(map.get(complement))
            ans.push(index)
        }
        map.set(num, index)
    })
    if(ans.length > 0)
        return ans
};
