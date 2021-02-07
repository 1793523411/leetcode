# 包含min函数的栈

```
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

 

示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
 

提示：

各函数的调用总次数不超过 20000 次
```

## 写法一

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.q = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.q.unshift([x,Math.min(this.q[0] ? this.q[0][1] : Infinity, x)])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.q.shift()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.q[0][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.q[0][1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

## 写法二

(这种写过在这这不去，但在最小栈那一题可以过去)

```js
class MinStack {
    constructor() {
        this.stack = []
    }
    push(x) {
        this.stack.push({
            val: x,
            min: this.size ? Math.min(x, this.getMin()) : x
        })
    }
    pop() {
        this.stack.pop()
    }
    top() {
        return this.stack[this.size - 1].val
    }
    getMin() {
        return this.stack[this.size - 1].min
    }
    get size() {
        return this.stack.length
    }
}

```