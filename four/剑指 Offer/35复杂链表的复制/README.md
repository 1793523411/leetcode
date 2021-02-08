# 复杂链表的复制

```
请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

```
[题目描述地址](https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/)


## 哈希

```js
var copyRandomList = function (head) {
    if (!head) return null;
    let m = new Map();
    let node = head;
    while (node) {
        m.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;
    while (node) {
        m.get(node).next = node.next ? m.get(node.next) : null;
        m.get(node).random = node.random ? m.get(node.random) : null;
        node = node.next;
    }
    return m.get(head)
};
```

## 原地操作

```js
var copyRandomList = function(head) {
   if (head == null) {
            return head;
        }
        //将拷贝节点放到原节点后面，例如1->2->3这样的链表就变成了这样1->1'->2'->3->3'
        for (let node = head, copy = null; node != null; node = node.next.next) {
            copy = new Node(node.val);
            copy.next = node.next;
            node.next = copy;
        }
        //把拷贝节点的random指针安排上
        for (let node = head; node != null; node = node.next.next) {
            if (node.random != null) {
                node.next.random = node.random.next;
            }
        }
        //分离拷贝节点和原节点，变成1->2->3和1'->2'->3'两个链表，后者就是答案
        let newHead = head.next;
        for (let node = head, temp = null; node != null && node.next != null;) {
            temp = node.next;
            node.next = temp.next;
            node = temp;
        }

        return newHead;
};
```