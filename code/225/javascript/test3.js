/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
//只用push和shift
MyStack.prototype.push = function (x) {
    // 入栈的元素直接加入队列
    this.q.push(x);
  
    // 将队尾的元素依次出队，同时入队，如此操作this.q.length - 1次。
    // 操作之后队列就按照出栈顺序进行排列，出队操作即为出栈。
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift());
    }
  };
  
  /**
   * Removes the element on top of the stack and returns that element.
   * @return {number}
   */
  MyStack.prototype.pop = function () {
    return this.q.shift();
  };
  
  /**
   * Get the top element.
   * @return {number}
   */
  MyStack.prototype.top = function () {
    return this.q[0];
  };
  
  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  MyStack.prototype.empty = function () {
    return !this.q.length;
  };
  