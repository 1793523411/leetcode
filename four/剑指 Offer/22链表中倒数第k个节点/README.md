# 链表中倒数第k个节点

```
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 2 个节点是值为 4 的节点。

 

示例：

给定一个链表: 1->2->3->4->5, 和 k = 2.
```

## 快慢指针

```js
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
```

## 使用栈

```js
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
```