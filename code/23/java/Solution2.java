/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
//s使用最小堆
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if(lists == null || lists.length == 0){
            return null;
        }

        PriorityQueue<ListNode> queue = new PriorityQueue(new Comparator<ListNode>(){
            public int compare(ListNode o1,ListNode o2){
                return (o1.val - o2.val);
            }
        });
        for(int i=0;i<lists.length;i++){
            while(lists[i]!=null){
                queue.add(lists[i]);
                lists[i] = lists[i].next;
            }
        }
        ListNode dummy = new ListNode(-1);
        ListNode head = dummy;
        while(!queue.isEmpty()){
            dummy.next = queue.poll();
            dummy = dummy.next;
        }
        dummy.next = null;
        return head.next;
    }
//对上面进行优化
    public ListNode mergeKLists2(ListNode[] lists) {
        if(lists == null || lists.length == 0){
            return null;
        }
        PriorityQueue<ListNode> queue = new PriorityQueue(new Comparator<ListNode>(){
            public int compare(ListNode o1,ListNode,o2){
                return (o1.val = o2.val);
            }
        });
        ListNode dummy = new ListNode(-1);
        ListNode cur = dummy;
        //这里跟上一版不一样，不再是一股脑全部放到堆中
		//而是只把k个链表的第一个节点放入到堆中
        for(int i=0;i<lists.length;i++){
            ListNode head = lists[i];
            if(head != null){
                queue.add(head);
            }
        }
        //之后不断从堆中取出节点，如果这个节点还有下一个节点，
		//就将下个节点也放入堆中
        while(queue.size()>0){
            ListNode node = queue.poll();
            cur.next = node;
            cur = cur.next;
            if(node.next!=null){
                queue.add(node.next);
            }
        }
        cur.next = null;
        return dummy.next;
    }
}
