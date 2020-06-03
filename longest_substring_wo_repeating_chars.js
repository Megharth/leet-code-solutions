/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

let lengthOfLongestSubstring = function(s) {
    let ss = new Set()
    let c_sstr = s.split('')
    let i=0, j=0, ans=0
    while(i < s.length && j < s.length) {

        if(!ss.has(s.charAt(j))) {
            ss.add(s.charAt(j))
            j++
            ans = Math.max(ans, j-i)
        } else {
            ss.delete(s.charAt(i))
            i++
        }
    }
    return ans
};
