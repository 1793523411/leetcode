/**
 * @param {string} s
 * @return {string}
 */
/**
 *利用栈的记忆功能

    外层的解码需要等待内层解码的结果
    先扫描的字符还发挥不了作用，但不能忘了它们
    从内往外，层层解决[] ，需要保持对字符串的记忆，用 stack 实现
 * */
// const decodeString = (s) => {
//     let numStack = []            // 存 倍数num 的栈
//     let strStack = []            // 存 待拼接的str 的栈
//     let num = 0                  // 倍数的“搬运工”
//     let result = ''              // 字符串的“搬运工”
//     for (const char of s) {      // 逐字符扫描
//       if (!isNaN(char)) {        // 遇到数字
//         num = num * 10 + Number(char) // 读取数字
//       } else if (char === '[') { // 遇到 [
//         strStack.push(result)    // result串进入strStack栈等待
//         result = ''              // 完成进栈后 清零
//         numStack.push(num)       // 倍数num进入栈等待
//         num = 0                  // 完成进栈后 清零
//       } else if (char === ']') { // 遇到 ]，两个栈的栈顶出栈
//         let repeatTimes = numStack.pop() // 获取拷贝次数
//         result = strStack.pop() + result.repeat(repeatTimes) // 构建子串
//       } else {                   // 遇到字母，追加给result串
//         result += char
//       }
//     }
//     return result
//   }

var decodeString = function (s) {
  let numStack = [];
  let strStack = [];
  let num = 0;
  let result = "";
  for (const char of s) {
    if (!NaN(char)) {
      num = num * 10 + Number(char);
    } else if (char === "[") {
      strStack.push(result);
      result = "";
      numStack.push(num);
      num = 0;
    } else if (char === "]") {
      let repeatTimes = numStack.pop();
      result = strStack.pop() + result.repeat(repeatTimes);
    } else {
      result += char;
    }
  }
  return result;
};

var decodeString = function (s) {
  const reg = /(\d+)\[([^\[\]]+)\]/g;
  const res = s.replace(reg, (match, p1, p2) => p2.repeat(p1));
  
  return reg.test(res) ? decodeString(res) : res;
};

var decodeString = (s) => {
  let stack = [];
  for (const char of s) {
    if (char !== "]") {
      // ] 前的字符都入栈
      stack.push(char);
      continue;
    }
    let cur = stack.pop(); // 弹出一个来检测
    let str = ""; // 组装字符串
    // 接下来肯定是遇到字母，直到遇到 [
    while (cur !== "[") {
      str = cur + str; // cur字符加在左边
      cur = stack.pop(); // 再拉出一个
    }
    // 此时cur为 [，接下来要遇到数字
    let num = "";
    cur = stack.pop(); // 用下一个将 [ 覆盖
    while (!isNaN(cur)) {
      num = cur + num; // 数字字符加在左边
      cur = stack.pop(); // 再拉出一个
    }
    // 现在要么是字母，要么是 [
    stack.push(cur);
    stack.push(str.repeat(num));
  }
  return stack.join("");
};
