/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    strs.sort((a, b) => a.length - b.length);
    
    let substr = '';
    for(let [ii, char] of strs[0].split('').entries()) {
       const matches = strs.filter((str) => str[ii] === char);
        if(matches.length < strs.length)
            break;
        else
            substr += char;
    };
    
    return substr;
};
