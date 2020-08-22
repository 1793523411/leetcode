class Solution {
    //使用map复制一份链表，然后设置随机值
    public Node copyRandomList(Node head) {
        if (head == null) return null;
        Map<Node, Node> lookup = new HashMap<>();
        Node node = head;
        while (node != null){
            lookup.put(node, new Node(node.val, null, null));
            node = node.next;
        }
        node = head;
        while (node != null){
            lookup.get(node).next = lookup.get(node.next);
            lookup.get(node).random = lookup.get(node.random);
            node = node.next;
        }
        return lookup.get(head);
    }
}