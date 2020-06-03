/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

let getValue = (ll) => {
    return ll.next ? ll.val + getValue(ll.next) : ll.val.toString()
}

let addString = (str1, str2) => {
    let carry = 0
    let result = ''
    let min = Math.min(str1.length, str2.length)
    let max = Math.max(str1.length, str2.length)
    
    for(let i=0; i < min; i++) {
        let sum = parseInt(str1.charAt(i)) + parseInt(str2.charAt(i)) + carry
        if(sum > 9) {
            carry = Math.floor(sum / 10)
            sum = sum % 10
        } else { carry = 0 }
        result += sum
    }
    
    let bigString = max === str1.length ? str1 : str2
    
    for(let i=min; i < max; i++){
        if(carry !== 0) {
            let sum = parseInt(bigString.charAt(i)) + carry
            if(sum > 9) {
                carry = Math.floor(sum / 10)
                sum = sum % 10
            } else { carry = 0 }
            result += sum
        } else {
            result += bigString.charAt(i)
        }
    }
    if(carry !== 0)
        result += carry
    
    return result
}

let resultFormat = (val) => {
    return val === '' ? null : {val: val.charAt(0), next: resultFormat(val.slice(1))}
    // return val > 0 ? {next: resultFormat(Math.floor(val/10)), val: val%10} : null
}

let addTwoNumbers = function(l1, l2) {
    let result = addString(getValue(l1), getValue(l2)) 
    return resultFormat(result)  
};
