# 栈的压入、弹出序列

```
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

 

示例 1：

输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
示例 2：

输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
 

提示：

0 <= pushed.length == popped.length <= 1000
0 <= pushed[i], popped[i] < 1000
pushed 是 popped 的排列。
```

## 使用辅助栈

```js
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
```

## 直接对push数组进行操作

```js
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
```