/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * The following solution: 
 * Runtime: 116 ms, faster than 91.28% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 44.2 MB, less than 52.70% of JavaScript online submissions for Add Two Numbers.
 */


var addTwoNumbers = function(l1, l2) {
    
    let carry = l1.val + l2.val >= 10 ? 1: 0;
    
    let sumList = new ListNode(((l1.val + l2.val) % 10), null); 
    let pointerN = sumList; 
    
    let nl1 = 0, nl2 = 0, sum = 0; 
    
    while(l1.next || l2.next) {
        
        nl1 = l1.next ? l1.next.val: 0; 
        nl2 = l2.next ? l2.next.val: 0;
        
        l1 = l1.next ? l1.next: l1;
        l2 = l2.next ? l2.next: l2;
        
        sum = (nl1 + nl2 + carry) % 10; 
        carry = nl1 + nl2 + carry >= 10 ? 1: 0; 
        
        let node = new ListNode(sum, null); 
        pointerN.next = node; 
        pointerN = node; 
        
    }
    
    if(carry === 1){
        let node = new ListNode(carry, null); 
        pointerN.next = node; 
        pointerN = node; 
    }
    
    return sumList;     
};

