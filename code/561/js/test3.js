//桶排序将时间复杂度变为o（n）

//  数组元素的范围是[-10000, 10000]，则我们创建一个长度为20001的数组

const arrayPairSum = (nums) => {
  if (!nums || nums.length == 0) return 0;
  let bucket = new Array(20001).fill(0); // 创建足够大的数组，作为桶
  for (let i = 0; i < nums.length; i++) {
    bucket[nums[i] + 10000]++; // 将所有元素放到一个个桶里，转为正数存
  }
  let flag = true;
  let res = 0;
  for (let i = 0; i < bucket.length; i++) {
    // 遍历bucket数组
    while (bucket[i] > 0) {
      // bucket[i]>0说明还能从中取出数
      if (flag) {
        // 奇次就累加，偶次就不累加
        res += i - 10000; // 累加的时候 -10000 还原回原本的数
      }
      flag = !flag;
      bucket[i]--; // 从桶中取一次就少一个数
    }
  }
  return res;
};

//js中比其他方法快好多
// 执行用时：120 ms, 在所有 JavaScript 提交中击败了96.24% 的用户
// 内存消耗：44 MB, 在所有 JavaScript 提交中击败了15.69% 的用户