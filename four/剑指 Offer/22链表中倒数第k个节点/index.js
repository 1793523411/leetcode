var getKthFromEnd = function(head, k) {
    let fast = head
    let slow = head
    let i = 0
    while(i++ < k) {
        fast = fast.next
    }

    while(fast) {
        fast = fast.next
        slow = slow.next
    }

    return slow
};

var getKthFromEnd = function(head, k) {
    //栈方法
    var stack = []
    var ans
    //所有节点入栈
    while(head){
        stack.push(head)
        head = head.next
    }
    //出栈第k个节点
    while(k > 0){
        ans = stack.pop()
        k--
    }
    return ans
};