/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
      
      let pointer1 = list1;
      let pointer2 = list2;
      let head = new ListNode(0);
      let tail = head;
      while (pointer1 !== null && pointer2 !== null){
        if (pointer1.val <= pointer2.val){
          tail.next = pointer1;
          pointer1 = pointer1.next;
          tail = tail.next;
        }
        else {
          tail.next = pointer2;
          pointer2 = pointer2.next;
          tail = tail.next;
        }
      }
      while (pointer1 !== null){
        tail.next = pointer1;
        pointer1 = pointer1.next;
        tail = tail.next;
      }
      while (pointer2 !== null){
        tail.next = pointer2;
        pointer2 = pointer2.next;
        tail = tail.next;
      }
    
      return head.next;
       }

}












