/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    //辅助栈
    const stack = [];
    //指向poped当前的下标
    let index = 0;
    //把pushed的元素一个一个入栈
    for(let i = 0,len=pushed.length-1;i<=len;i++){
        stack.push(pushed[i])
        //把入栈的当前元素和pushed当前指向的元素进行对比
        //相等话就把辅助栈出栈
        //pushed下标往右移动
        while(stack.length !== 0 && stack[stack.length-1] === popped[index]){
            stack.pop()
            index++
        }
    }
    //如果stack为空，说明符合题目
    return !stack.length
};

var validateStackSequences = function(pushed, popped) {
    //记录压栈位置
    let i=0;
    while(pushed.length){
        if(pushed[i] == popped[0]){
            //如果当前压栈位置与弹出序列首位相同，则弹出当前位置
            pushed.splice(i,1);
            popped.shift();
            i--;
        }else if(pushed[i] != popped[0] && i == pushed.length-1){
            //压栈序列压完了，但当前位置与弹出序列首位不同，返回false
            return false
        }else{
            //继续压栈
            i++;
        }
    }
    //全部弹出，返回true
    return true
};