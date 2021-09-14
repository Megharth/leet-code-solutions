/**
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return [];    
    nums.sort((a, b) => a - b);

    const res = [];
    for(let [ii, num] of Object.entries(nums)) {
        if(ii > 0 && num === nums[ii-1])
            continue;
        
        let left = parseInt(ii) + 1;
        let right = nums.length - 1;
        let sum;
        while(left < right) {
            sum = num + nums[left] + nums[right];
            if(sum > 0)
                right -= 1;
            else if(sum < 0)
                left += 1;
            else{
                res.push([num, nums[left], nums[right]]);
                left += 1;
                while(nums[left] === nums[left-1] && left < right) 
                    left += 1;
            }
        }
    };
    
    return res;
};
