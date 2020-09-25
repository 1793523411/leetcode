详细解法值得一看：https://leetcode-cn.com/problems/validate-binary-search-tree/solution/zong-jie-java-quan-jie-fa-by-1yx/

中序遍历

```java
class Solution {
    public boolean isValidBST(TreeNode root) {
        return dfs(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }
    boolean dfs(TreeNode node, long lower, long upper) {
        if (node == null)
            return true;
        if (node.val <= lower)
            return false;
        if (node.val >= upper)
            return false;
        if (!dfs(node.left, lower, node.val))
            return false;
        if (!dfs(node.right, node.val, upper))
            return false;
        return true;
    }
}
```

更简洁的写法

```java
class Solution {
    public boolean isValidBST(TreeNode root) {
        return dfs(root, java.lang.Long.MIN_VALUE, java.lang.Long.MAX_VALUE);
    }
    boolean dfs(TreeNode node, long min, long max) {
        return (node == null) || node.val > min && node.val < max && dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }
}
```

```java
class Solution {
    Stack<TreeNode> st = new Stack<>();
    Stack<Long> upperList = new Stack<>(),
        lowerList = new Stack<>();

    public boolean isValidBST(TreeNode root) {
        long lower = Long.MIN_VALUE, upper = Long.MAX_VALUE, val;
        update(root, lower, upper);
        while (!st.empty()) {
            root = st.pop();
            lower = lowerList.pop();
            upper = upperList.pop();
            if (root == null) continue;
            val = (long)root.val;
            if (val <= lower) return false;
            if (val >= upper) return false;
            update(root.right, val, upper);
            update(root.left, lower, val);
        }
        return true;
    }

    void update(TreeNode node, long lower, long upper) {
        st.push(node);
        lowerList.push(lower);
        upperList.push(upper);
    }
}
```

队列广度优先

```java
class Solution {
    Queue<TreeNode> queue = new LinkedList<>();
    Queue<Long> upperList = new LinkedList<>(), 
        lowerList = new LinkedList<>();
        
    public boolean isValidBST(TreeNode root) {
        long lower = Long.MIN_VALUE, upper = Long.MAX_VALUE, val;
        update(root, lower, upper);
        while (!queue.isEmpty()) {
            root = queue.poll();
            lower = lowerList.poll();
            upper = upperList.poll();
            if (root == null) continue;
            val = root.val;
            if (val <= lower) return false;
            if (val >= upper) return false;
            update(root.left, lower, val);
            update(root.right, val, upper);
        }
        return true;
    }

    void update(TreeNode root, long lower, long upper) {
        queue.offer(root);
        lowerList.offer(lower);
        upperList.offer(upper);
    }
}
```


醉了。。。