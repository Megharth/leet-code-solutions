/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
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
var isPalindrome = function(x) {
    // if(x < 0) {
    //     x = -x
    // }
    x = x.toString()
    let len = x.length
    if(len % 2 == 0) {
        let mid = len / 2
        if(x.charAt(mid-1) === x.charAt(mid)) {
            let result = checkPropogation(x, mid, true, 1)
            if(result.length === len)
                return true
        }
        return false
    } else {
        let mid = Math.floor(len/2)
        let result = checkPropogation(x, mid, false, 1)
        if(result.length === len)
            return true
    }
    return false
};
