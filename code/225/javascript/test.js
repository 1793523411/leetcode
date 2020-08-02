class MyStack {
    /**初始化队列容量 */
    constructor(_cap = 10) {
        /**队列容量 */
        this.cap = _cap;
        /**队列头部 */
        this.head = -1;
        /**队列尾部 */
        this.tail = -1;
        /**数据源 */
        this.arr = [];
    }
    /**将一个元素放入队列的尾部 */
    push(value) {
        /**队列是否已满,已满则扩容 */
        if(this.head == (this.tail + 1) % this.cap){
            let nowArr = [];
            let addTail = this.head > this.tail;
            while(this.head < this.arr.length){
                nowArr.push(this.arr[this.head]);
                this.head++;
            }
            if(addTail){//当前头指针在尾指针后面
                while(this.tail >= 0){
                    nowArr.push(this.arr[this.tail]);
                    this.tail--;
                }
            }
            this.head = 0;
            this.tail = nowArr.length - 1;
            this.arr = nowArr;
            this.cap *= 2;
        }

        if (this.empty()) {
            this.head = 0;
        }

        this.tail = (this.tail + 1) % this.cap;
        this.arr[this.tail] = value;
    }
    /**移除栈顶元素 */
    pop() {
        let value = this.arr[this.tail];
        if(this.head == this.tail){
            this.head = this.tail = -1;
        }else{
            this.tail = (this.tail - 1) % this.cap;
        }
        return value;
    }
    /**获取栈顶元素 */
    top() {
        return this.arr[this.tail];
    }
    /**返回队列是否为空 */
    empty() {
        return this.head == -1;
    }
}
