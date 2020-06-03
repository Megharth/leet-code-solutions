/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

let convert = function(s, numRows) {
    let rows = []
    for(let i=0; i<numRows; i++) {
        rows.push(new Array())
    }
    
    let c = 0, down = true, lastRow = 0
    for(let col=0; c<s.length; col++ ) {
        if(down) {
            for(let row=0; row<numRows; row++) {
                rows[row].push(s.charAt(c)) 
                c++
                lastRow = row
            }
            down = false
        } else {
            if(lastRow > 1) {
                lastRow--
                rows[lastRow].push(s.charAt(c))
                c++
                for(let row=0; row<numRows; row++) {
                    if(row !== lastRow)
                        rows[row].push('')
                }
            } else {
                down = true
            }
        }
    }
    
    return rows.reduce((acc, cv) => acc + cv.join(''), '')
};
