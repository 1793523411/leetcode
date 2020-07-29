class MinStack {
    //使用一个栈
    int min = Integer.MAX_VALUE;
    private Stack<Integer> stack;
    public MinStack(){
        stack = new Stack<>();
    }

    public void push(int x) {
        if(x <= min){
            stack.push(min);
            min = x;
        }
        stack.push(x)
    }
    public void pop() {
        if(stack.pop() == min){
            min = stack.pop();
        }
    }
    public int top(){
        return stack.peek();
    }
    public int getMin(){
        return min;
    }
}