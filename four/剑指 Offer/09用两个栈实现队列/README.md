# 用两个栈实现队列

```
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

 

示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用
```

## 双栈法

定义两个栈一个吃数据，一个吐数据，吐不出来的话去吃出数据的栈里取，否则取不到用-1 表示（1 <= values <= 10000,）

```js
// 如 现在有两个栈
stack1 = [];
stack2 = [];

// 我们用 push  往stack1里加入几个元素
stack1 = [1, 2, 3];

// 现在我们要一个一个地取出头部的元素
// 我们可以循环 stack1,  把 stack1 元素一个个取出来 放入到 stack2中
stack1 = [];
stack2 = [3, 2, 1];
// 这样就可以用 pop 取出 头部元素了, 其实就是翻转数组
// 如果stack2不为空 我们就一直从 stack2 中取, 直到为空了 又重新把 stack1 中的元素放入 stack2 中

//如
stack1 = [4, 5];
stack2 = [3, 2];
// 现在 2 中有元素, 要出队的话直接从 2 中出, 直到为空
stack2.pop();
stack2.pop(); // 现在为空了
// 重新循环 1 , 回到了上面开始的情况
stack1 = [];
stack2 = [5, 4];
```

```js
var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length) return this.stack2.pop();
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  return this.stack2.pop() || -1;
};
```

哈哈哈~~~

实际上现实中也有使用两个栈来实现队列的情况，那么为什么我们要用两个stack来实现一个queue？

其实使用两个栈来替代一个队列的实现是为了在多进程中分开对同一个队列对读写操作。一个栈是用来读的，另一个是用来写的。当且仅当读栈满时或者写栈为空时，读写操作才会发生冲突。

当只有一个线程对栈进行读写操作的时候，总有一个栈是空的。在多线程应用中，如果我们只有一个队列，为了线程安全，我们在读或者写队列的时候都需要锁住整个队列。而在两个栈的实现中，只要写入栈不为空，那么push操作的锁就不会影响到pop

## 一个中间栈

定义一个数组来模拟栈，append的时候定义中间栈将value置入栈底并还原栈

```js
var CQueue = function () {
  this.statck = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  let tmpStack = [];
  let val;
  while ((val = this.statck.pop())) {
    tmpStack.push(val);
  }
  tmpStack.push(value);
  while ((val = tmpStack.pop())) {
    this.statck.push(val);
  }
  return null;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.statck.length) {
    return -1;
  }
  return this.statck.pop();
};
```
