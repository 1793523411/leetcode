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