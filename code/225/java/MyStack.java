class MyStack {
    Queue<Integer> queue;

    public MyStack(){
        queue = new LinkedList<>();
    }

    public void push(int x){
        queue.add(x);
        for(int i = 1;i<queue.size(); i++)
            queue.add(queue.remove());
    }

    public void pop(){
        //poll：将首个元素从队列中弹出，如果队列是空的，就返回null
        return queue.poll();
    }

    public int top(){
        return queue.peek();
    }

    public boolean empty(){
        return queue.size() == 0;
    }
}