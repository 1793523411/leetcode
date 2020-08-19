class Solution{
    public ListNode removeElements(ListNode head, int val) {
        while(head != null&&head.val == val){
            head = head.next;
        }
        if(head==null){
            return head;
        }
        ListNode prev = head;
        while(prev.next!=null){
            if(prev.next.val == val){
                prev.next = prev.next.next
            }else{
                prev = prev.next;
            }
        }
        return head;
    }

        public ListNode removeElements2(ListNode head, int val) {
            //创建一个虚拟头结点
            ListNode dummyNode=new ListNode(val-1);
            dummyNode.next=head;
            ListNode prev=dummyNode;
            //确保当前结点后还有结点
            while(prev.next!=null){
                if(prev.next.val==val){
                    prev.next=prev.next.next;
                }else{
                    prev=prev.next;
                }
            }
            return dummyNode.next;
        }

//递归
        public ListNode removeElements3(ListNode head, int val) {
           if(head==null)
               return null;
            head.next=removeElements3(head.next,val);
            if(head.val==val){
                return head.next;
            }else{
                return head;
            }


}

}