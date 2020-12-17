/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//非常规做法 很慢
var hasCycle = function (head) {
    try {
        JSON.stringify(head)
        return false
    } catch {
        return true
    }
};

//快慢指针，如果有换肯定会相遇
var hasCycle = function (head) {
    if (!head || head.next == null) return false
    let low = head, fast = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        low = low.next
        if (low == fast) return true
    }
    return false
};

//记录值
var hasCycle = function (head) {
    while(head){
        if(head.val === "visited"){
            return true
        }else{
            head.val = "visited"
        }
        head = head.next
    }
    return false
};