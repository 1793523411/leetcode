/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    let list = []
    let stack = []
    let node = root
    while(stack.length || node){
        if(node){
            stack.push(node)
            node = node.left
            continue
        }
        node = stack.pop()
        list.push(node.val)
        node = node.right
    }
    return list
}

//循环中一直往左找，知道为null，在这过程中把每一个节点入栈，因为循环条件是有节点或栈不为零，所以continue不执行，出栈，存取该值到结果数组中，就开始向右找，每次循环都会判断该节点又没有左节点，有的话，入栈，执行continue，循环往复，知道所有节点遍历完，栈里的元素都保存到结果数组中


//简化一下,这样写更容易理解
var inorderTraversal = function(root) {
    let list = []
    let stack = []
    let node = root
    while(stack.length || node){
        while(node){
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        list.push(node.val)
        node = node.right
    }
    return list
}
