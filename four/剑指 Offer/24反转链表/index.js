var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

var reverseList = function(head) {
    //处理特殊情况
    if(head===null){
        return null;
    }
    //创建栈用来存储链表节点
    var stack=[];
    while(head!==null){
        stack.push(head);
        head=head.next;
    }
    //记录新链表的头节点即老链表的尾节点
    var newHead=stack[stack.length-1];
    //反转链表
    while(stack.length>1){
        var node=stack.pop();
        node.next=stack[stack.length-1];
    }
    //处理剩余的一个节点，防止产生环
    var tmp=stack.pop();
    tmp.next=null;
    
    return newHead;
};