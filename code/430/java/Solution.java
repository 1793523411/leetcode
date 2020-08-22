class Solution {
    public Node flatten(Node head) {
        if (head == null) {
            return null;
        }
        dfs(head);
        head.prev = null;
        return head;
    }

    /**
     * 展开链表，展开后链表的头结点的 prev 指向尾结点
     *
     * @param head 头结点
     * @return 展开后链表的头结点
     */
    private Node dfs(Node head) {
        Node cur = head;
        while (cur != null) {
            head.prev = cur;    // 更改头结点的 prev 指向尾结点
            Node next = cur.next;
            if (cur.child != null) {
                Node h = dfs(cur.child);
                cur.child = null;
                Node t = h.prev;
                // 链接 cur、h、t、next
                cur.next = h;
                h.prev = cur;
                t.next = next;
                if (next != null) {
                    next.prev = t;
                }
                head.prev = t;  // 更改头结点的 prev 指向尾结点
            }
            cur = next;
        }
        return head;
    }
}
