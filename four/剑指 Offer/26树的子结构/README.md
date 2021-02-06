# 树的子结构

```
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false
示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true
限制：

0 <= 节点个数 <= 10000
```

## 递归

```js
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  // 约定空树不是任意一个树的子结构
  if (!A || !B) {
    return false;
  }
  return (
    isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );
};

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSameTree = function (A, B) {
  // B子树是空子树 ok
  if (!B) {
    return true;
  }
  // A子树是空子树 且 B 非空，不 ok
  if (!A) {
    return false;
  }
  // 当前节点的值不相等，不 ok
  if (A.val !== B.val) {
    return false;
  }
  // 递归考察左子树、右子树
  return isSameTree(A.left, B.left) && isSameTree(A.right, B.right);
};
```

## 迭代

```js
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) {
    return false;
  }
  const levelOrderA = levelOrder(A);
  // console.log(levelOrderA)
  const levelOrderB = levelOrder(B);
  // console.log(levelOrderB)
  return checkSubStructure(levelOrderA, levelOrderB);
};

// checkSubStructure
function checkSubStructure(levelOrderA, levelOrderB) {
  // console.log(levelOrderA, levelOrderB)
  for (let levelA = 0; levelA < levelOrderA.length; levelA++) {
    for (let i = 0; i < levelOrderA[levelA].length; i++) {
      if (matchAB(levelOrderA, levelOrderB, levelA, i)) {
        return true;
      }
    }
  }
  return false;
}

//
function matchAB(levelOrderA, levelOrderB, levelA, i) {
  // 确定 root 位置 levelOrderA[levelA][i]
  if (levelOrderA[levelA][i] !== levelOrderB[0][0]) {
    return false;
  }

  // 从第"1"层开始计算
  for (let levelB = 1; levelB < levelOrderB.length; levelB++) {
    for (let j = 0; j < levelOrderB[levelB].length; j++) {
      // console.log('levelA', levelA, i, levelOrderA[levelA + levelB])
      // console.log('levelB', levelB, j, levelOrderB[levelB])
      if (!levelOrderA[levelA + levelB]) {
        return false;
      }
      // console..log(levelOrderB[levelB][j], levelOrderA[levelA + levelB][i + j])
      if (
        levelOrderB[levelB] !== null &&
        levelOrderA[levelA + levelB] !== null &&
        levelOrderB[levelB][j] !== null &&
        levelOrderB[levelB][j] !== levelOrderA[levelA + levelB][i + j]
      ) {
        return false;
      }
    }
  }
  return true;
}

// bfs
function levelOrder(root) {
  const ret = [];
  if (!root) return ret;

  const q = [];
  q.push(root);
  while (q.length !== 0) {
    const currentLevelSize = q.length;
    ret.push([]);
    for (let i = 1; i <= currentLevelSize; ++i) {
      const node = q.shift();
      if (node) {
        ret[ret.length - 1].push(node.val);
      } else {
        ret[ret.length - 1].push(null);
        continue;
      }

      // 只要有子树，就继续
      if (node.left || node.right) {
        q.push(node.left);
        q.push(node.right);
      }
    }
  }
  return ret;
}
```
