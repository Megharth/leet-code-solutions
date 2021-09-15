/**
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const map = {}
    
    for (let i = 0; i < lists.length; i++) {
        let curr = lists[i]
        while(curr !== null) {
            if(!map[curr.val]) {
                map[curr.val] = 0;
            }
            ++map[curr.val];            
            curr = curr.next
        }
    }
    
    
    const sortedKeys = Array.from(Object.keys(map)).sort((a,b) => b - a);
    
    let lastNode = undefined;
    for (let i = 0; i < sortedKeys.length; i++) {
        let value = map[sortedKeys[i]];
        
        for (;value > 0; value--) {
            const curr = new ListNode(sortedKeys[i], lastNode)
            
            lastNode = curr;
        }
    }
    
    const headNode = new ListNode(0, lastNode);
    
    
    return headNode.next
};
