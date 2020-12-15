/**
 * @param {string} s
 * @return {number}
*/
//内置api
var myAtoi = function (str) {
    const number = parseInt(str, 10);

    if (isNaN(number)) {
        return 0;
    } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
        return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    } else {
        return number;
    }
};

//正则
var myAtoi = function (s) {
    const re = new RegExp(/^(-|\+)?\d+/);
    let str = s.trim().match(re);
    let res = str ? Number(str[0]) : 0
    return res >= 0 ? Math.min(res, 2 ** 31 - 1) : Math.max(res, -(2 ** 31))
};
//状态机
var myAtoi = function (str) {
    // 自动机类
    class Automaton {
        constructor() {
            // 执行阶段，默认处于开始执行阶段
            this.state = 'start';
            // 正负符号，默认是正数
            this.sign = 1;
            // 数值，默认是0
            this.answer = 0;
            /*
            关键点：
            状态和执行阶段的对应表
            含义如下：
            [执行阶段, [空格, 正负, 数值, 其他]]
            */
            this.map = new Map([
                ['start', ['start', 'signed', 'in_number', 'end']],
                ['signed', ['end', 'end', 'in_number', 'end']],
                ['in_number', ['end', 'end', 'in_number', 'end']],
                ['end', ['end', 'end', 'end', 'end']]
            ])
        }

        // 获取状态的索引
        getIndex(char) {
            if (char === ' ') {
                // 空格判断
                return 0;
            } else if (char === '-' || char === '+') {
                // 正负判断
                return 1;
            } else if (typeof Number(char) === 'number' && !isNaN(char)) {
                // 数值判断
                return 2;
            } else {
                // 其他情况
                return 3;
            }
        }

        /*
        关键点：
        字符转换执行函数
        */
        get(char) {
            /*
            易错点：
            每次传入字符时，都要变更自动机的执行阶段
            */
            this.state = this.map.get(this.state)[this.getIndex(char)];

            if (this.state === 'in_number') {
                /*
                小技巧：
                在JS中，对字符串类型进行减法操作，可以将得到一个数值型（Number）的值
        
                易错点：
                本处需要利用括号来提高四则运算的优先级
                */
                this.answer = this.answer * 10 + (char - 0);

                /*
                易错点：
                在进行负数比较时，需要将INT_MIN变为正数
                */
                this.answer = this.sign === 1 ? Math.min(this.answer, Math.pow(2, 31) - 1) : Math.min(this.answer, -Math.pow(-2, 31));
            } else if (this.state === 'signed') {
                /*
                优化点：
                对于一个整数来说，非正即负，
                所以正负号的判断，只需要一次。
                故，可以降低其判断的优先级
                */
                this.sign = char === '+' ? 1 : -1;
            }
        }
    }

    // 生成自动机实例
    let automaton = new Automaton();

    // 遍历每个字符
    for (let char of str) {
        // 依次进行转换
        automaton.get(char);
    }

    // 返回值，整数 = 正负 * 数值
    return automaton.sign * automaton.answer;
};
