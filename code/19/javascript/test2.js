var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    // 快先走 n 步
    while(--n) {
        fast = fast.next
    }
    //防止只有有一个节点
    if(!fast.next) return head.next
    fast = fast.next
    // fast、slow 一起前进
    while(fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    //只有一个节点，执行此语句报错
    slow.next = slow.next.next
    return head
};
