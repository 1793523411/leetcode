六种解法

```
提交时间 提交结果 运行时间 内存消耗 语言(顺序反过来)
几秒前	通过	11 ms	40.1 MB	Java
几秒前	通过	12 ms	40.1 MB	Java
几秒前	通过	4 ms	39.8 MB	Java
几秒前	通过	3 ms	39.8 MB	Java
1 分钟前	通过	26 ms	40.2 MB	Java
1 分钟前	通过	8 ms	40.1 MB	Java
```

1，我们使用两个指针，一个 i 一个 j，最开始的时候 i 和 j 指向第一个元素，然后 i 往后移，把扫描过的元素都放到 map 中，如果 i 扫描过的元素没有重复的就一直往后移，顺便记录一下最大值 max，如果 i 扫描过的元素有重复的，就改变 j 的位置

```java
    public int lengthOfLongestSubstring(String s) {
        if (s.length() == 0)
            return 0;
        HashMap<Character, Integer> map = new HashMap<>();
        int max = 0;
        for (int i = 0, j = 0; i < s.length(); ++i) {
            if (map.containsKey(s.charAt(i))) {
                j = Math.max(j, map.get(s.charAt(i)) + 1);
            }
            map.put(s.charAt(i), i);
            max = Math.max(max, i - j + 1);
        }
        return max;
    }
```

2，我们还可以用一个队列，把元素不停的加入到队列中，如果有相同的元素，就把队首的元素移除，**这样我们就可以保证队列中永远都没有重复的元素**

```java
    public int lengthOfLongestSubstring(String s) {
        //用链表实现队列，队列是先进先出的
        Queue<Character> queue = new LinkedList<>();
        int res = 0;
        for (char c : s.toCharArray()) {
            while (queue.contains(c)) {
                //如果有重复的，队头出队
                queue.poll();
            }
            //添加到队尾
            queue.add(c);
            res = Math.max(res, queue.size());
        }
        return res;
    }
```

3，由于都是字符，所以我们还可以使用数组来代替map

```java
    public int lengthOfLongestSubstring(String s) {
        int[] map = new int[128];
        int start = 0, end = 0, len = 0;
        while (end < s.length()) {
            if (map[s.charAt(end++)]++ == 0) {
                len = Math.max(len, end - start);
            } else {
                while (map[s.charAt(end - 1)] > 1) {
                    map[s.charAt(start++)]--;
                }
            }
        }
        return len;
    }
```
4,我们还可以再优化一下减少一层while循环
```java
    public int lengthOfLongestSubstring(String s) {
        int[] dict = new int[128];
        Arrays.fill(dict, -1);
        int longest = 0, m = 0;
        for (int i = 0; i < s.length(); i++) {
            m = Math.max(dict[s.charAt(i)] + 1, m);
            dict[s.charAt(i)] = i;
            longest = Math.max(longest, i - m + 1);
        }
        return longest;
    }
```

5，同样我们还可以使用集合set来代替队列，用两个指针，一个left一个right，如果有重复的就把left指向的给移除（left相当于队首，right相当于队尾）
```java
    public int lengthOfLongestSubstring(String s) {
        int maxLen = 0;
        Set<Character> set = new HashSet<>();
        int left = 0, right = 0;
        while (right < s.length()) {
            while (set.contains(s.charAt(right)))
                set.remove(s.charAt(left++));
            set.add(s.charAt(right++));
            maxLen = Math.max(maxLen, right - left);
        }
        return maxLen;
    }
```

6,这里我们还可以改一下，把right-left改为set.size(),顺便再减少一层while循环
```java
   public int lengthOfLongestSubstring(String s) {
        int left = 0, right = 0, max = 0;
        Set<Character> set = new HashSet<>();
        while (right < s.length()) {
            if (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left++));
            } else {
                set.add(s.charAt(right++));
                max = Math.max(max, set.size());
            }
        }
        return max;
    }
```