/**
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    
    const alphabets = Array.from(Array(26)).map((_e, i) => i + 97).map((el) => String.fromCharCode(el));
    const arrs = [];
    digits.split('').forEach((digit) => {
        if(digit === '7') {
            arrs.push(alphabets.slice(3*(digit-2), 3*(digit-1) + 1));
        } else if(digit === '8') {
            arrs.push(alphabets.slice(3*(digit-2) + 1, 3*(digit-1) + 1));        
        } else if(digit === '9') {
            arrs.push(alphabets.slice(3*(digit-2) + 1, 3*(digit-1) + 2));
        }else {
            arrs.push(alphabets.slice(3*(digit-2), 3*(digit-1)));        
        }
    });
    
    if(arrs.length === 1) return arrs[0];

    let res = arrs[0];
    for(let i=1; i<arrs.length; i++) {
        const temp = [];
        for(let j=0; j<res.length; j++) {
            for(let k=0; k<arrs[i].length; k++) {
                temp[((arrs[i].length)*j) + k] = res[j] + arrs[i][k];
            }
        }
        res = temp;
    }
    
    return res;
};
