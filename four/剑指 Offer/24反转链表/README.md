# 反转链表

```
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

 

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 

限制：

0 <= 节点个数 <= 5000
```

## 迭代反转

```js
var reverseList = function (head) {
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
```

## 递归反转

```js
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
```

## 使用栈

```js
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
```