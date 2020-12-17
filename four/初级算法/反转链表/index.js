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
//两个指针原地反转
var reverseList = function (head) {
    let prev = null, cur = head, temp;
    while (cur) {
        temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp
    }
    return prev
};

//使用递归
var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head
    }

    let newReverseList = reverseList(head.next);
    let newReverseListTail = head.next;
    newReverseListTail.next = head;
    head.next = null

    return newReverseList
};