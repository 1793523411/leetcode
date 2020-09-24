public class Codec {
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if (root == null) {
            return "";
        }
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        StringBuffer res = new StringBuffer();
        queue.offer(root);
        while (!queue.isEmpty()) {
            TreeNode curNode = queue.poll();
            if (curNode != null) {
                res.append(curNode.val+",");
                queue.offer(curNode.left);
                queue.offer(curNode.right);
            } else {
                res.append("null,");
            }
        } 
        return res.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if (data=="") {
            return null;
        }
        String[] val = data.substring(0, data.length() - 1).split(",");
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        TreeNode root = new TreeNode(Integer.parseInt(val[0]));
        int cur = 1;
        queue.offer(root);
        while (!queue.isEmpty()) { 
            TreeNode curNode = queue.poll();
            if (!"null".equals(val[cur])){
                curNode.left = new TreeNode(Integer.valueOf(val[cur]));
                queue.offer(curNode.left);
            }
            cur++; 
            if (!"null".equals(val[cur])) {
                curNode.right = new TreeNode(Integer.valueOf(val[cur]));
                queue.offer(curNode.right);
            }
            cur++;
        }
        return root;
    }
}