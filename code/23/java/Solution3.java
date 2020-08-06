class Solution3 {
	public ListNode mergeKLists(ListNode[] lists) {
		if(lists==null || lists.length==0) {
			return null;
		}
		//将lists[0]作为最终合并的链表，然后将list[0]和lists[1]合并成lists[0-1]
		//再将lists[0-1]和lists[2]合并，如此反复最终lists[0]就是最终结果
		ListNode res = lists[0];
		for(int i=1;i<lists.length;i++) {
			res = merge(res,lists[i]);
		}
		return res;
	}
	
	//合并两个有序链表
	private ListNode merge(ListNode a, ListNode b) {
		if(a==null || b==null) {
			return (a==null) ? b : a;
		}
		if(a.val<=b.val) {
			a.next = merge(a.next,b);
			return a;
		} else {
			b.next = merge(a,b.next);
			return b;
		}
	}
}
