/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
  let thead = new ListNode(0);
  thead.next = head;
  let tmp = thead;
  while (tmp.next != null && tmp.next.next != null) {
    let start = tmp.next;
    let end = tmp.next.next;
    tmp.next = end;
    start.next = end.next;
    end.next = start;
    tmp = start
  }
  return thead.next
};

var swapPairs = function (head){
    if(head == null || head.next == null){
        return head
    }
    let next = head.next
    head.next = swapPairs(next.next)
    next.next = head
    return next;
}