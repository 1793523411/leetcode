// 数组加双向链表，y = x ％ length 作为哈希函数
class MyHashSet {
    
    class Node{
        int val;
        Node prev, next;
        
        Node (int val) {
            this.val = val;
        }
    }

    private int length = 100;
    private Node[] data = new Node[length];
    
    /** Initialize your data structure here. */
    public MyHashSet() {
        
    }
    
    public void add(int key) {
        int index = key % length;
        Node curr = data[index];
        if (curr == null) {
            Node node = new Node(key);
            data[index] = node;
            return;
        }
        while(true) {
            if (curr.val == key) {
                return;
            }
            if(curr.next == null) {
                Node node = new Node(key);
                node.prev = curr;
                curr.next = node;
                return;
            } else {
                curr = curr.next;
            }
        }
    }
    
    public void remove(int key) {
        int index = key % length;
        Node curr = data[index];
        if (curr != null && curr.val == key) {
            Node next = curr.next;
            if (next != null) {
                next.prev = null;
            }
            data[index] = next;
            return;
        }
        while(curr != null) {
            if (curr.val == key) {
                Node next = curr.next;
                Node prev = curr.prev;
                if (next != null) {
                    next.prev = prev;
                }
                if (prev != null) {
                    prev.next = next;
                }
                return;
            }
            curr = curr.next;
        }   
    }
    
    /** Returns true if this set contains the specified element */
    public boolean contains(int key) {
        int index = key % length;
        Node curr = data[index];
        while(curr != null) {
            if (curr.val == key) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
}
