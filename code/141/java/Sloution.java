public class Solution{
    //哈希表
    private boolean hashSolution(ListNode head) {
        Set<ListNode> set = new LinkedHashSet<>();
        while (head != null) {
            if (set.contains(head)) {
                return true;
            }
            set.add(head);
            head = head.next;
        }
        return false;
    }
    //快慢指针
    private boolean slowAndFastSolution(ListNode head) {
        if (head == null) {
            return false;
        }
        ListNode slow = head;
        ListNode fast = head.next;
        while (fast != null && fast.next != null) {
            if (slow.equals(fast)) {
                return true;
            }
            slow = slow.next;
            fast = fast.next.next;
        }

        return false;
    }

    //使用异常
    private boolean slowAndFastExceptionSolution(ListNode head) {
        try {
            ListNode slow = head;
            ListNode fast = head.next;
            while (!slow.equals(fast)) {
                slow = slow.next;
                fast = fast.next.next;
            }
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
    //递归，破坏链表结构
    private boolean traverseBreakSolution(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }
        // 判断是否是自环状态
        if (head == head.next) {
            return true;
        }
        // 让遍历过的节点自环
        ListNode breaker = head.next;
        head.next = head;
        return traverseBreakSolution(breaker);
    }
    //标记法
    private boolean traverseMarkSolution(ListNode head) {
        if (head == null) {
            return false;
        }
        if (head.val == 0xcafebabe) {
            return true;
        }
        head.val = 0xcafebabe;
        return traverseMarkSolution(head.next);
    }
}