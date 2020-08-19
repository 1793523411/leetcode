class Solution {

    //双指针
    public ListNode oddEvenList(ListNode head) {
        if (head == null) return null;
        ListNode head2 = head.next;
        ListNode temp1 = head;
        ListNode temp2 = head2;
        while (temp2 != null && temp1.next != null && temp2.next != null) {
            temp1.next = temp1.next.next;
            temp2.next = temp2.next.next;
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
        temp1.next = head2;
        return head;
    }
}
