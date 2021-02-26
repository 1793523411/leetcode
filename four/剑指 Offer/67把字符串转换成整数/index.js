var strToInt = function (str) {
    /* 
          1、过滤前方空格
          2、确定正负号
          3、计算值部分
          4、得到值 且判断是否越界
      */
    if (!str.length) return 0;

    let i = 0,
        sign = 1,
        total = 0,
        num; // i 当前索引 sign 正负号 total 数字部分
    const l = str.length,
        min = -(2 ** 31),
        max = 2 ** 31 - 1;

    // 1、剩余前方空格
    while (str.charAt(i) === " " && i < l) i++;

    // 2、确定正负号
    if (str.charAt(i) === "+" || str.charAt(i) === "-")
        sign = str.charAt(i++) === "+" ? 1 : -1;

    // 3、计算数字部分
    while (i < l) {
        // 遇到字符不在[0-9] 则推出循环
        if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) break;

        // 更新total 巧用 - '0' 隐式转换 [0-9]字符
        total = 10 * total + (str.charAt(i++) - "0");
    }

    num = sign * total;

    return num <= min ? min : num >= max ? max : num;
};