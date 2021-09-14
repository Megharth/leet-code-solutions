/**
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
 

Constraints:

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length <= 3) return nums.reduce((acc, num) => acc + num, 0);    
    
    nums.sort((a, b) => a - b);

    let closeSum = Infinity;

    for(let [ii, num] of Object.entries(nums)) {
        if(ii > 0 && num === nums[ii-1])
            continue;
        
        let left = parseInt(ii) + 1;
        let right = nums.length - 1;
        let sum;
        while(left < right) {
            sum = num + nums[left] + nums[right];
            if(sum === target)
                return sum;
            if(Math.abs(target - sum) < Math.abs(target - closeSum))
                closeSum = sum;
            
            if(sum > target)
                right -= 1;
            else if(sum < target)
                left += 1;
            else{
                res.push([num, nums[left], nums[right]]);
                left += 1;
                while(nums[left] === nums[left-1] && left < right) 
                    left += 1;
            }
        }
    };
    
    return closeSum;
};
