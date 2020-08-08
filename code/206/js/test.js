var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while (curr) {
        let tmp = curr.next;    // 1. 临时存储当前指针后续内容
        curr.next = prev;       // 2. 反转链表
        prev = curr;            // 3. 接收反转结果
        curr = tmp;             // 4. 接回临时存储的后续内容
    }
    return prev;
};

var reverseList = function(head) {
    if (!head || !head.next) return head;
    let next = head.next; // next节点，反转后是最后一个节点
    let reverseHead = reverseList(next);
    head.next = null; // 裁减 head
    next.next = head; // 尾接
    return reverseHead;
};

var reverseList = function(head) {
    return reverse(null, head);
};

function reverse (prev, curr) {
    if (!curr) return prev;
    // [curr.next, prev, curr] = [prev, curr.next, curr.next];
    let tmp = curr.next;
    curr.next = prev;
    return reverse(curr, tmp);
}
