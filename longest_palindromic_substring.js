/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

let checkPropogation = function(s, mid, even, propogation) {
    if(even) {
        if(mid-propogation >= 1) {
            if(s.charAt(mid-1-propogation) == s.charAt(mid+propogation)) {
                return checkPropogation(s, mid, true, propogation+1)
            }
        }
        propogation--
        return s.slice(mid-1-propogation, mid+propogation+1)
    } else {
        if(mid-propogation >= 0) {
            if(s.charAt(mid-propogation) == s.charAt(mid+propogation)) {
                return checkPropogation(s, mid, false, propogation+1)
            }
        }
        propogation--
        return s.slice(mid-propogation, mid+propogation+1)
        
    }
}

var longestPalindrome = function(s) {
   let len = s.length
   
   if(len === 0)
       return ''
    
   let ss = ''
   
   // Check for even palindromes (aaaa, aa, baab)
   for(let mid=1; mid < len; mid++) {
       if(s.charAt(mid-1) === s.charAt(mid)) {
           let result = checkPropogation(s, mid, true, 1)
           if(result.length > ss.length)
               ss = result
           if(ss.length === len)
               return ss
       } else if(len === 2)
            return s.charAt(0)
   }
    
   // Check for odd palindromes (adam, abacab, badab) 
   for(let mid=0; mid<len; mid++) {
       let result = checkPropogation(s, mid, false, 1)
       if(result.length > ss.length)
           ss = result
       if(ss.length === len)
           return ss           
   }
    
    return ss
};
