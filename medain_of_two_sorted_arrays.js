/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2)
    nums.sort((a,b) => a - b)
    let len = nums.length
    let remainder = len%2
    if(remainder === 0) {
        let medianIndex = len / 2
        return (nums[medianIndex - 1] + nums[medianIndex])/2
    } else {
        let medianIndex = Math.floor(len/2)
        console.log(nums)
        return nums[medianIndex]
    }
};
