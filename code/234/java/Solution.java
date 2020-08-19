class Solution {
    //*利用数组
	public boolean isPalindrome(ListNode head) {
		if(head==null || head.next==null) {
			return true;
		}
		java.util.ArrayList<Integer> arr = new java.util.ArrayList<Integer>();
		//申请一个容器，然后把元素都放到数组中
		while(head!=null) {
			arr.add(head.val);
			head = head.next;
		}
		int i = 0;
		int j = arr.size()-1;
		//用i和j两个指针，一个往后，一个往前，不断迭代
		//如果i的值不等于j说明不是回文，反之是回文
		while(i<j) {
			if(arr.get(i).compareTo(arr.get(j))!=0) {
				return false;
			}
			++i;
			--j;
		}
		return true;
    }
    //双指针+反转链表
    public boolean isPalindrome(ListNode head) {
		//边界条件不用忘记了
		if(head==null || head.next==null) {
			return true;
		}
		ListNode p = new ListNode(-1);
		ListNode low = p;
		ListNode fast = p;
		p.next = head;
		//快慢指针不断迭代，找到中间节点
		while(fast!=null && fast.next!=null) {//?============
			low = low.next;
			fast = fast.next.next;
		}
		ListNode cur = low.next;
		ListNode pre = null;
		low.next = null;
		low = p.next;
		//将链表一分为二之后，反转链表后半部分
		while(cur!=null) {
			ListNode tmp = cur.next;
			cur.next = pre;
			pre = cur;
			cur = tmp;
		}
		//将链表前半部分和 反转的后半部分对比
		while(pre!=null) {
			if(low.val!=pre.val) {
				return false;
			}
			low = low.next;
			pre = pre.next;
		}
		return true;
	}
}
