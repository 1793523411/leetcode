class MyQueue {
    constructor(){
        this.pushArr = []
        this.popArr = []
    }
    push(value){
        // this.pushArr.push(value)
        if(!this.pushArr.length){
            while(this.popArr.length){
                this.pushArr.push(this.popArr())
            }
        }
        this.pushArr.push(value)
    }
    pop(){
        if(!this.popArr.length){
            while(this.pushArr.length){
                this.popArr.push(this.pushArr.pop())
            }
        }
        return this.popArr.pop()
    }
    peek(){
        if(!this.popArr.length){
            while(this.pushArr.length){
                this.popArr.push(this.pushArr.pop())
            }
        }
        return this.popArr[this.popArr.length-1]
    }
    empty(){
        return this.pushArr.length==0 && this.popArr.length==0
    }
}