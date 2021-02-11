# 两个链表的第一个公共节点

```
输入两个链表，找出它们的第一个公共节点。
```

[题目描述链接](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)

## 这题很浪漫

双指针同时跑，但是因为 2 个链表长度不一样。如果长度一样很容易就能找到相交点。
可以使得 2 个链表加上彼此，这样就能保证链表长度一样了，即同时遍历，能找到相交点。

我们使用两个指针 node1，node2 分别指向两个链表 headA，headB 的头结点，然后同时分别逐结点遍历，当 node1 到达链表 headA 的末尾时，重新定位到链表 headB 的头结点；当 node2 到达链表 headB 的末尾时，重新定位到链表 headA 的头结点。

这样，当它们相遇时，所指向的结点就是第一个公共结点

两个结点不断的去对方的轨迹中寻找对方的身影，只要二人有交集，就终会相遇 ❤

```js
var getIntersectionNode = function (headA, headB) {
  var h1 = headA;
  var h2 = headB;

  while (h1 !== h2) {
    // 如果相交、或者没有相交
    h1 = h1 === null ? headB : h1.next; // h1结束 接入对方
    h2 = h2 === null ? headA : h2.next; // h2结束 接入对方
  }

  return h1;
};
```

## 快慢指针


遍历得到两个链表的长度，以及长度差 diff

将慢指针 slow 指向较长链表，快指针 fast 指向较短链表

slow 向前移动 diff 个距离

slow 和 fast 同时向前移动，每次移动一个距离。若存在公共节点，那么它们一定会遇上。


```js
var getIntersectionNode = function (headA, headB) {
  let node = headA;
  let lengthA = 0;
  while (node) {
    ++lengthA;
    node = node.next;
  }
  if (!lengthA) return null;

  node = headB;
  let lengthB = 0;
  while (node) {
    ++lengthB;
    node = node.next;
  }
  if (!lengthB) return null;

  let diff = 0,
    slow,
    fast;
  if (lengthA > lengthB) {
    slow = headA;
    fast = headB;
    diff = lengthA - lengthB;
  } else {
    slow = headB;
    fast = headA;
    diff = lengthB - lengthA;
  }

  while (diff--) {
    slow = slow.next;
  }

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
```

## 使用 Map

```js
var getIntersectionNode = function (headA, headB) {
  const map = new Map();
  let node = headA;
  while (node) {
    map.set(node, true);
    node = node.next;
  }

  node = headB;
  while (node) {
    if (map.has(node)) return node;
    node = node.next;
  }
  return null;
};
```
