class Solution {
    //双指针
    public ListNode rotateRight(ListNode head, int k) {

        if(head == null || head.next == null || k == 0) {
            return head;
        }
        int length = 0;
        ListNode tempLength = head;
        while(true) {
            length++;
            if(tempLength.next == null) {
                break;
            }
            tempLength = tempLength.next;
        }
        int changSize = k % length;
        int goSize = length - changSize - 1;
        if(changSize == 0) {
            return head;
        }

        ListNode temp = head;
        ListNode cur = head;
        for(int i = 1; i <= goSize; i++) {
            temp = temp.next;
        }
        for(int i = 1; i <= length - 1; i++) {
            cur = cur.next;
        }

        ListNode newHead = temp.next;
        temp.next = null;
        cur.next = head;

        return newHead;
    }
}
