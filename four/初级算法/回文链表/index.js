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
var isPalindrome = function (head) {
    let s = []
    while (head) {
        s.push(head.val)
        head = head.next;
    }
    return s.toString() === s.reverse().toString()
};

//反转链表
var isPalindrome = function (head) {
    let foot = reverse(head)
    while (head) {
        if (head.val !== foot.val) return false
        head = head.next;
        foot = foot.next
    }
    return true
};

function reverse(head) {
    let listed = head;
    let res = null;
    while (listed) {
        let cur = new ListNode(listed.val)
        cur.next = res;
        res = cur;
        listed =
            listed.next
    }
    return res
}

//反转链表+快慢指针
var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next
    }

    if (fast != null) {
        slow = slow.next
    }

    fast = head;
    slow = reverse(slow)

    while (slow != null) {
        if (fast.val != slow.val) return false
        fast = fast.next;
        slow = slow.next
    }
    return true
};