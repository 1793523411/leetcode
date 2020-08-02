/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //!所操作的是同一条链表
    let preHead = new ListNode(0)
    //此处不是next，无法删除第一个节点
    preHead.next = head
    let fast = preHead,slow = preHead
    while(n--){
        fast = fast.next
    }
    while(fast && fast.next){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return preHead.next
}