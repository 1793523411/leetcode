/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    if(postorder.length <=2)return true
    //后序遍历结果：左右根
    //左子树比根节点小，右子树比根节点大
    const root = postorder.pop()
    let i =0
    while (postorder[i]< root) {
        i++
    }
    //i及后面的节点都应该大于root
    const rightResult =  postorder.slice(i).every(item=>item>root)
    //对左右子树递归判断。如果所有的都满足就返回true，否则返回false
    return rightResult && verifyPostorder(postorder.slice(0,i)) && verifyPostorder(postorder.slice(i))
};

var verifyPostorder = function(postorder) {
    var root = Number.MAX_VALUE
    var stack = [] 
    for(let i = postorder.length - 1;i >= 0;i--)
    {
        if(postorder[i] > root) return false
        while(stack.length && postorder[i] < stack[stack.length -1])
        {
            root = stack.pop()
            // console.log(root)
        }
        stack.push(postorder[i])
    }
    return true
    
};

verifyPostorder([1,3,2,6,5])