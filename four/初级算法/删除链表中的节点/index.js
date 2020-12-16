/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */


//这题的描述·····

//删除节点一般需要该节点的前一个节点，但是这里不能获取到前面的节点，所以就采取值覆盖的形式

var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};




// ------------删除链表中的节点操作---剑指offer------------
//设置哨兵节点
var deleteNode = function (head, val) {
    let pre = new ListNode(-1);
    pre.next = head;

    let node = pre;
    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next;
            break
        }
        node = node.next
    }
    return pre.next
};

//普通解法：可能删除的是末尾节点
var deleteNode = function (head, toDelete) {
    if (!toDelete || !head) {
        return null
    }

    if (!toDelete.next) {
        let pre = new ListNode(-1)
        pre.next = head

        let node = pre;
        while (node.next !== toDelete) {
            node = node.next
        }
        node.next = null;
        return pre.next
    } else {
        toDelete.val = toDelete.next.val;
        toDelete.next = toDelete.next.next
        return head
    }
};

//递归操作
var deleteNode = function (head, val) {
    if (head.val == val) {
        return head.next
    }
    head.next = deleteNode(head.next, val)
    return head
};