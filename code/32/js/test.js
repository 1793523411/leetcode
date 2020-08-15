const longestValidParentheses = (s) => {
  let maxLen = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c == "(") {
      // 左括号的索引入栈
      stack.push(i);
      continue; // 跳过，考察下一个符号
    }
    stack.pop(); // 遇到右括号，栈顶出栈
    if (stack.length == 0) {
      // 栈变空了，右括号匹配不到人了
      stack.push(i); // 说明它要充当“参照物”了
    } else {
      // 右括号找到匹配，计算有效的连续长度，挑战最大
      maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
    }
  }
  return maxLen;
};
