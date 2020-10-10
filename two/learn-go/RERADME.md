## go 语言入门

- go 通过切片模拟栈和队列，参数传递，只能修改，不能新增或者删除原始数据，默认` s=s[0:len(s)]`，取下限不取上限，数学表示为：[)
- map 键需要可比较，不能为 slice、map、function，map 值都有默认值，可以直接操作默认值，如：`m[age]++ `值由 0 变为 1，比较两个 map 需要遍历，其中的 kv 是否相同，因为有默认值关系，所以需要检查 val 和 ok 两个值
- 常用标准库：sort,math,copy

sort 库使用

```go
// int排序
sort.Ints([]int{})
// 字符串排序
sort.Strings([]string{})
// 自定义排序
sort.Slice(s,func(i,j int)bool{return s[i]<s[j]})
```

- 常用类型转换

```go
// byte转数字
s="12345"  // s[0] 类型是byte
num:=int(s[0]-'0') // 1
str:=string(s[0]) // "1"
b:=byte(num+'0') // '1'
fmt.Printf("%d%s%c\n", num, str, b) // 111

// 字符串转数字
num,_:=strconv.Atoi()
str:=strconv.Itoa()
```

## 算法快速入门

+ 遍历：给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从 0 开始)。如果不存在，则返回 -1。
+ 回溯算法：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）

我们大多数时候，刷算法题可能都是为了准备面试，所以面试的时候需要注意一些点：

+ 快速定位到题目的知识点，找到知识点的通用模板，可能需要根据题目特殊情况做特殊处理。
+ 先去朝一个解决问题的方向！先抛出可行解，而不是最优解！先解决，再优化！
+ 代码的风格要统一，熟悉各类语言的代码规范。
  + 命名尽量简洁明了，尽量不用数字命名如：i1、node1、a1、b2
+ 常见错误总结
  + 访问下标时，不能访问越界
  + 空值 nil 问题 run time error

## 二叉树

