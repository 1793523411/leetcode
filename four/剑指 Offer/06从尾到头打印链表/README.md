# 从尾到头打印链表

```
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]
 

限制：

0 <= 链表长度 <= 10000
```

## 使用 reverse

```js
var reversePrint = function (head) {
  if (head == null) return [];
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res.reverse();
};
```

## 反转链表

```js
var reversePrint = function (head) {
  if (head == null) return [];
  head = reverseLink(head);
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
};

function reverseLink(head) {
  if (head === null || head.next === null) return head;
  let p = head.next;
  head.next = null;
  let tmp = null;
  while (p !== null) {
    tmp = p.next; // tmp 指针前进（保存下一个指针信息）
    p.next = head; // 指针反转
    head = p; // head 指针前进
    p = tmp; // p 指针前进
  }
  return head;
}
```

反转链表这一操作可以使用递归

```js
function reverseLink(head) {
  if (head === null || head.next === null) return head;
  const p = reverseLink(head.next);
  head.next.next = head; // 指针反转
  head.next = null;
  return p; // 返回真正的表头
}
```

## 使用 unshift

```js
var reversePrint = function (head) {
  const res = [];
  while (head != null) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
};
```

还有一种操作是将所有链表元素 push 到一个数组 tmp，然后在定义一个新数组 res 存放最终结果，这行如下语句

```js
while (tmp.length) {
  res.push(tmp.pop());
}
```
