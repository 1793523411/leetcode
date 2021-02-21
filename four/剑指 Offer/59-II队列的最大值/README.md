# 队列的最大值

```
请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

示例 1：

输入:
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
示例 2：

输入:
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
 

限制：

1 <= push_back,pop_front,max_v
```

## 维护一个单调队列

使用两个队列，一个队列 queue 用于存放所有元素，另一个辅助队列 dequeue 用来存放当前 queue 中的最大值。

push 操作：

- 将元素放入 queue 中
- 检查元素是否大于 dequeue 队尾元素，如果大于，那么队尾元素出队；直到不再满足大于条件

pop 操作：

- 如果 queue 的队首元素等于 dequeue 的队首元素，那么 dequeue 队首元素需要出队
- queue 队首元素需要出队

题目要求复杂度控制在 O(1)O(1)，所以必须使用双端队列来做辅助队列。因为 push 操作中，需要频繁对辅助队列的队尾元素进行移动操作。

```js
var MaxQueue = function () {
  this.queue = [];
  this.dequeue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  return this.dequeue.length ? this.dequeue[0] : -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value);
  while (this.dequeue.length && value > this.dequeue[this.dequeue.length - 1]) {
    this.dequeue.pop();
  }
  this.dequeue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (!this.dequeue.length) {
    return -1;
  }
  if (this.queue[0] === this.dequeue[0]) {
    this.dequeue.shift();
  }
  return this.queue.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```

## 使用 Math.max()计算最大值

```js
var MaxQueue = function () {
  this.queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (!this.queue.length) return -1;
  return Math.max(...this.queue);
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  return this.queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (!this.queue.length) return -1;
  return this.queue.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```
