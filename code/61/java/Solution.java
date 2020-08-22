/**
 * Definition for singly-linked list.
 * public  
 */
class Solution {
    // 使用双端队列
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null) {
            return null;
        }
        Deque<ListNode> deque = new LinkedList<>();
        while (head != null) {
            deque.offerLast(head);
            head = head.next;
        }
        for (int i = 0; i < k % deque.size(); i++) {
            deque.offerFirst(deque.pollLast());
        }
        ListNode listNode = new ListNode(0);
        ListNode curr = listNode;
        while (!deque.isEmpty()) {
            curr.next = deque.pollFirst();
            curr = curr.next;
        }
        curr.next = null;
        return listNode.next;
    }
}
