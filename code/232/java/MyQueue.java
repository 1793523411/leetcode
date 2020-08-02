class MyQueue{
    public Stack<Integer> s1 = new Stack<Integer>();
    public Stack<Integer> s2 = new Stack<Integer>();

    // stack和queue的区别就是出的区别。如何利用栈让先push的数据在栈顶呢，那么就要把先push的数据放到栈尾。

    // 所以我们利用2个栈。s1栈入栈，入完栈后依次出栈到s2栈。就实现了s1的栈顶数据，入到了s2的栈尾。
    
    // !从s1的入栈效果 + s2的出栈效果，可以queue化等号。
    

    public MyQueue(){

    }

    public void push(int x){
        while(!s2.empty()){
            s1.push(s2.pop());
        }
        s1.push(x);
    }
    public int pop(){
        while(!s1.empty()){
            s2.push(s1.pop());
        }
        return s2.pop();
    }
    public int peek(){
        while(!s1.empty()){
            s2.push(s1.pop());
        }
        return s2.peek();
    }
    //判断s1和s2是否都为空
    public boolean empty(){
        while(!s1.empty()){
            s2.push(s1.pop());
        }
        return s2.empty();
    }
}