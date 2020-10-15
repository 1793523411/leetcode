/**
 * @param {string[]} deadends 雷区
 * @param {string} target 密码锁密码
 * @return {number}
 */
var openLock = function(deadends, target) {
    /**密码锁的密码个数 */
    const limits = target.length;
    /**过滤集合 */
    let close = new Set(deadends);
    let start = new Array(limits).fill("0").join("");
    if(close.has(start)){
        return -1;
    }
    /**队列 先进先出 */
    let queue = [start];
    close.add(start);
    /**最少转动次数 */
    let times = 0;
    while(queue.length) {
        /**当前轮次的个数 */
        //忽略过滤集合 第一轮由0000衍生出来8个  第二轮由第一轮8个衍生出来8*8=64个
        //只有遍历完当前轮次的个数，最少转动次数times才会加一
        let thisTimes = queue.length;
        while(thisTimes){
            thisTimes--;
            /**当前要衍变的值 */
            let curr = queue.shift();
            if(curr == target){
                return times;
            }
            let loop = limits;
            while(loop){
                loop--;
                let upNext = getNext(curr, loop, true);
                if(!close.has(upNext)){
                    close.add(upNext);
                    queue.push(upNext);
                }
                let downNext = getNext(curr, loop, false);
                if(!close.has(downNext)){
                    close.add(downNext);
                    queue.push(downNext);
                }
            }
        }
        times++;
    }
    return -1;
};
/**
 * @param {string} curr 当前要衍变的值
 * @param {number} num 演变位数
 * @param {boolean} isUp 是否向上衍变
 * @return {string}
 */
var getNext = (curr, num, isUp) => {
    let arr = curr.split("");
    let char = parseInt(arr[num]) + (isUp ? 1 : -1);
    if(char > 9) char = 0;
    if(char < 0) char = 9;
    arr[num] = String(char);
    return arr.join("");
}
