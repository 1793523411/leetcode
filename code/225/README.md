## go解法

我只想说这道题出的真有意思，js数组随便搞，java有提供了双向链表，可能符合要求的解法就只有只是用队列的入队，出队操作，但所有解法都可以通过，哈哈哈，想不到到go这更有意思，不过下面三种都不符合要求，找了找go的解法如下：

Go标准库里没有队列，可以用数组（切片）或链表来实现：

+ 使用数组切片；push就是append，pop就是调整切片长度，top就是返回最后一个元素
+ 使用标准库container/list包装
+ 自定义list，标准库的list是个双链表且将值定为interface{}类型，这里可以简化为单链表并确定数据类型为int，（其实就是用链表实现队列，以前学数据结构的时候用c语言写过）

```go
type MyStack struct {
    slice []int
}

/** Initialize your data structure here. */
func Constructor() MyStack {
    return MyStack{}
}

/** Push element x onto stack. */
func (s *MyStack) Push(x int)  {
    s.slice = append(s.slice, x)
}

/** Removes the element on top of the stack and returns that element. */
func (s *MyStack) Pop() int {
    if len(s.slice) == 0 {return -1}
    r := s.slice[len(s.slice)-1]
    s.slice = s.slice[:len(s.slice)-1]
    return r
}

/** Get the top element. */
func (s *MyStack) Top() int {
    if len(s.slice) == 0 {return -1}
    return s.slice[len(s.slice)-1]
}

/** Returns whether the stack is empty. */
func (s *MyStack) Empty() bool {
    return len(s.slice) == 0
}
```

```go
import(
    "list"
)
type MyStack struct {
    *list.List
}

/** Initialize your data structure here. */
func Constructor() MyStack {
    return MyStack{list.New()}
}

/** Push element x onto stack. */
func (s *MyStack) Push(x int)  {
    s.PushBack(x)
}

/** Removes the element on top of the stack and returns that element. */
func (s *MyStack) Pop() int {
    if s.Len() == 0 {return -1}
    return s.Remove(s.Back()).(int)
}

/** Get the top element. */
func (s *MyStack) Top() int {
    if s.Len() == 0 {return -1}
    return s.Back().Value.(int)
}

/** Returns whether the stack is empty. */
func (s *MyStack) Empty() bool {
    return s.Len() == 0
}
```

```go
type Node struct {
    Next *Node
    Val int
}
type MyStack struct {
    top *Node
}

/** Initialize your data structure here. */
func Constructor() MyStack {
    return MyStack{}
}

/** Push element x onto stack. */
func (s *MyStack) Push(x int) {
    node := &Node{Next: s.top, Val: x}
    s.top = node
}

/** Removes the element on top of the stack and returns that element. */
func (s *MyStack) Pop() int {
    if s.top == nil {return -1}
    r := s.top.Val
    s.top.Next, s.top = nil, s.top.Next // 这里注意把pop的节点的Next置为nil，防止内存泄露
    return r
}

/** Get the top element. */
func (s *MyStack) Top() int {
    if s.top==nil {return -1}
    return s.top.Val
}

/** Returns whether the stack is empty. */
func (s *MyStack) Empty() bool {
    return s.top == nil
}

```

## java的Deque

```java
import java.util.Deque;
import java.util.LinkedList;

public class DequeTest {

    public static void main(String[] args) {
        
        Deque<String> deque = new LinkedList<String>();
        deque.add("d");
        deque.add("e");
        deque.add("f");
        
        //从队首取出元素，不会删除
        System.out.println("队首取出元素:"+deque.peek());
        System.out.println("队列为:"+deque);
        
        //从队首加入元素(队列有容量限制时用，无则用addFirst)
        deque.offerFirst("c");
        System.out.println("队首加入元素后为："+deque);
        //从队尾加入元素(队列有容量限制时用，无则用addLast)
        deque.offerLast("g");
        System.out.println("队尾加入元素后为："+deque);
        
        //队尾加入元素
        deque.offer("h");
        System.out.println("队尾加入元素后为："+deque);
        
        //获取并移除队列第一个元素,pollFirst()也是，区别在于队列为空时,removeFirst会抛出NoSuchElementException异常，后者返回null
        deque.removeFirst();
        System.out.println("获取并移除队列第一个元素后为:"+deque);
        
        //获取并移除队列第一个元素,此方法与pollLast 唯一区别在于队列为空时,removeLast会抛出NoSuchElementException异常，后者返回null
        deque.removeLast();
        System.out.println("获取并移除队列最后一个元素后为:"+deque);
        
        //获取队列第一个元素.此方法与 peekFirst 唯一的不同在于：如果此双端队列为空，它将抛出NoSuchElementException，后者返回null
        System.out.println("获取队列第一个元素为:"+deque.getFirst());
        System.out.println("获取队列第一个元素后为:"+deque);
        
        //获取队列最后一个元素.此方法与 peekLast 唯一的不同在于：如果此双端队列为空，它将抛出NoSuchElementException，后者返回null
        System.out.println("获取队列最后一个元素为:"+deque.getLast());
        System.out.println("获取队列第一个元素后为:"+deque);
        
        //循环获取元素并在队列移除元素
        while(deque.size()>0){
            System.out.println("获取元素为："+ deque.pop()+" 并删除");
        }
        System.out.println("队列为:"+deque);
    }

}
```