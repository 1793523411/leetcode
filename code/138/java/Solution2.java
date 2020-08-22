class Solution {
    //原地复制链表，改变了链表结构，复制随机指向，在拆分链表
    public Node copyRandomList(Node head) {
        if (head == null) return null;
        // 复制
        Node cur = head;
        while (cur != null) {
            Node tmp = cur.next;
            cur.next = new Node(cur.val, null, null );
            cur.next.next = tmp;
            cur = tmp;
        }
        // 置随机指针
        cur = head;
        while (cur != null) {
            if (cur.random != null) cur.next.random = cur.random.next;
            cur = cur.next.next;
        }
        // 拆分
        cur = head;
        Node copy_head = cur.next;
        Node copy_cur = copy_head;
        while (copy_cur.next != null) {
            cur.next = cur.next.next;
            cur = cur.next;

            copy_cur.next = copy_cur.next.next;
            copy_cur = copy_cur.next;
        }
        // 结束标志null
        cur.next = null;
        return copy_head;
    }
}
