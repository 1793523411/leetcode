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
