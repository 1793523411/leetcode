/**循环队列 */
class MyQueue {
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
            this.head = 0
            if(addTail){//当前头指针在尾指针后面
                while(this.head<=this.tail){
                    nowArr.push(this.arr[this.head]);
                    this.head++;
                }
            }
            //下面这种写法是错的吧，我觉得不对，但是与上面那种写法一样，都可以通过？？？
            // if(addTail){//当前头指针在尾指针后面
            //     while(this.tail >= 0){
            //         nowArr.push(this.arr[this.tail]);
            //         this.tail--;
            //     }
            // }
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
    /**从队列首部移除元素 */
    pop() {
        let value = this.arr[this.head];
        if(this.head == this.tail){
            this.head = this.tail = -1;
        }else{
            this.head = (this.head + 1) % this.cap;
        }
        return value;
    }
    /**返回队列首部的元素 */
    peek() {
        return this.arr[this.head];
    }
    /**返回队列是否为空 */
    empty() {
        return this.head == -1;
    }
}