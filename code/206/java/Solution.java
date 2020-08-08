class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while(curr != null){
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
    public ListNode reverseList2(ListNode head) {
        if(head == null||head.next == null) return head;
        ListNode cur = reverseList2(head.next);
        head.next.next = head;
        head.next = null;
        //cur永远指向最后一个
        return cur;
    }
    //这个递归是循环的改造
    ListNode pre = null, tmp = null;
    public ListNode reverseList3(ListNode head) {
        if (head == null)
        return pre;
        tmp = head.next;
        head.next = pre;
        pre = head;
        head = tmp;
        return reverseList(head);
    }
}