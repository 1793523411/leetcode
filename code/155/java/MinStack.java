class MinStack {
    //使用两个栈
    private Stack<Integer> stack;
    private Stack<Integer> minStack;
    public MinStack(){
        stack = new Stack<>();
        minStack = new Stack<>();
    }

    public void push(int x) {
        stack.push(x);
        if(!minStack.isEmpty()){
            if(x <= minStack.peek()){
                minStack.push(x);
            }
        }else{
            minStack.push(x);
        }
    }
    public void pop() {
        int pop = stack.pop();
        int top = minStack.peek();
        if(pop == top){
            minStack.pop();
        }
    }
    public int top(){
        return stack.peek();
    }
    public int getMin(){
        return minStack.peek();
    }
}