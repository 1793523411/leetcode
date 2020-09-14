`https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/leetcodesuan-fa-xiu-lian-dong-hua-yan-shi-xbian-2/`
# 有关二叉树的前中后序遍历

## 递归解法

```java
public static void preOrderRecur(TreeNode head) {
    if (head == null) {
        return;
    }
    System.out.print(head.value + " ");
    preOrderRecur(head.left);
    preOrderRecur(head.right);
}
```
```java
public static void preOrderRecur(TreeNode head) {
    if (head == null) {
        return;
    }
    preOrderRecur(head.left);
    System.out.print(head.value + " ");
    preOrderRecur(head.right);
}
```
```java
public static void postOrderRecur(TreeNode head) {
    if (head == null) {
        return;
    }
    postOrderRecur(head.left);
    postOrderRecur(head.right);
    System.out.print(head.value + " ");
}
```
## 迭代解法

本质上是在模拟递归，因为在递归的过程中使用了系统栈，所以在迭代的解法中常用Stack来模拟系统栈

### 前序
首先我们应该创建一个Stack用来存放节点，首先我们想要打印根节点的数据，此时Stack里面的内容为空，所以我们优先将头结点加入Stack，然后打印。

之后我们应该先打印左子树，然后右子树。所以先加入Stack的就是右子树，然后左子树。
此时你能得到的流程如下

```java
public static void preOrderIteration(TreeNode head) {
	if (head == null) {
		return;
	}
	Stack<TreeNode> stack = new Stack<>();
	stack.push(head);
	while (!stack.isEmpty()) {
		TreeNode node = stack.pop();
		System.out.print(node.value + " ");
		if (node.right != null) {
			stack.push(node.right);
		}
		if (node.left != null) {
			stack.push(node.left);
		}
	}
}

```

### 中序

同理创建一个Stack，然后按 左 中 右的顺序输出节点。

尽可能的将这个节点的左子树压入Stack，此时栈顶的元素是最左侧的元素，其目的是找到一个最小单位的子树(也就是最左侧的一个节点)，并且在寻找的过程中记录了来源，才能返回上层,同时在返回上层的时候已经处理完毕左子树了。。

当处理完最小单位的子树时，返回到上层处理了中间节点。（如果把整个左中右的遍历都理解成子树的话，就是处理完 左子树->中间(就是一个节点)->右子树）

如果有右节点，其也要进行中序遍历。

```java
public static void inOrderIteration(TreeNode head) {
	if (head == null) {
		return;
	}
	TreeNode cur = head;
	Stack<TreeNode> stack = new Stack<>();
	while (!stack.isEmpty() || cur != null) {
		while (cur != null) {
			stack.push(cur);
			cur = cur.left;
		}
		TreeNode node = stack.pop();
		System.out.print(node.value + " ");
		if (node.right != null) {
			cur = node.right;
		}
	}
}

```

### 后序


前序遍历的过程 是 中左右。

将其转化成 中右左。也就是压栈的过程中优先压入左子树，在压入右子树。

然后将这个结果返回来，这里是利用栈的先进后出倒序打印。

```java
public static void postOrderIteration(TreeNode head) {
		if (head == null) {
			return;
		}
		Stack<TreeNode> stack1 = new Stack<>();
		Stack<TreeNode> stack2 = new Stack<>();
		stack1.push(head);
		while (!stack1.isEmpty()) {
			TreeNode node = stack1.pop();
			stack2.push(node);
			if (node.left != null) {
				stack1.push(node.left);
			}
			if (node.right != null) {
				stack1.push(node.right);
			}
		}
		while (!stack2.isEmpty()) {
			System.out.print(stack2.pop().value + " ");
		}
	}

```
