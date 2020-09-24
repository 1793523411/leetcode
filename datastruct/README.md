## 队列

- 使用 list 并调用内置方法，进行入队出队操作，指针指向队尾，入队调用 add，出队指针++，判控比较头指针和 list 的 size
- 由于普通的队列不能容纳更多的元素，所以引出了循环队列，使用固定大小的数组和两个指针来指示起始位置和结束位置。 目的是重用我们之前提到的被浪费的存储
- 入队时如果为空，头指针设置成 0，然后插入值移动为指针，出队时，若头和尾指向同一位置，重置该队列，由于是循环队列，下标应该加一后对数组的长度求余数，根据头指针是否为-1 来判断是否为空，根据 ((tail+1)%size) == head 来判断是否满了
- 队列可以用在 BFS 算法中，应用：200，岛屿数量；732,打开密码锁,279，完全平方数
- 刷题过程中发现了双向 BFS，嘤嘤嘤
- 解决问题时使用 list 就可以起到队列的作用，比如 removeFirst(),addLast(),offer(),poll()

## 栈

- 栈的实现比队列简单，是需要使用一个 list 然后不需要设置指针，用 get，和 add，以及，remove 即可
- java 还提供了内置的栈库，就很方便,解决问题时，使用内置的就好，不要重复造轮子
- 栈解决的问题：最小栈，有效括号，每日温度，逆波兰，（忘了给题号，···）
- 使用栈进行 DFS，但找到的不是最短路径
- DFS 解决的问题：200，岛屿数量；133，克隆图；494，目标和

## 动态规划解决的问题

- 出了新手村再来搞
- 279，494

## 数组与字符串

- 读取数组中的元素，是通过访问索引的方式来读取的，索引一般从 0 开始，假如我们想要访问索引为 2 处的元素 "D" 时，计算机会进行以下计算：
  - 找到该数组的索引 0 的内存地址： 2008；
  - 将内存地址加上索引值，作为目标元素的地址，即 2008 + 2 = 2010，对应的元素为 "D"，这时便找到了目标元素。
- 我们知道，计算内存地址这个过程是很快的，而我们一旦知道了内存地址就可以立即访问到该元素，因此它的时间复杂度是常数级别，为 O(1)
- 数组读取，查找，插入删除的时间复杂度
- 数组解决的问题：寻找数组中心索引，搜索插入位置，合并
- 类似一维数组，对于一个二维数组 A = [[1, 2, 3, 4],[2, 4, 5, 6],[1, 4, 6, 8]]，计算机同样会在内存中申请一段 连续 的空间，并记录第一行数组的索引位置，即 A[0][0] 的内存地址，注意，实际数组中的元素由于类型的不同会占用不同的字节数，因此每个方格地址之间的差值可能不为 1。实际题目中，往往使用二维数组处理矩阵类相关问题，包括矩阵旋转、对角线遍历，以及对子矩阵的操作等
- 字符串的基本操作对象通常是字符串整体或者其子串，字符串操作比其他数据类型更复杂（例如比较、连接操作）
- 字符串比较
- 我们可以用 “==” 来比较两个字符串吗？这取决于我们使用的语言是否支持运算符重载
- 如果答案是 yes （例如 C++、Python）。我们可以使用 == 来比较两个字符串；
- 如果答案是 no （例如 Java），我们可能无法使用 == 来比较两个字符串。当我们使用 == 时，它实际上会比较这两个对象是否是同一个对象
- 字符串连接
- 对于不同的编程语言中，字符串可能是可变的，也可能是不可变的。不可变意味着一旦字符串被初始化，你就无法改变它的内容
- 在某些语言（如 C ++）中，字符串是可变的。 也就是说，你可以像在数组中那样修改字符串。我们发现在 C++ 中，进行字符串连接并没有明显的性能影响。
- 在其他一些语言（如 Java、Python，js）中，字符串是不可变的，显然，不可变字符串无法被修改。哪怕你只是想修改其中的一个字符，也必须创建一个新的字符串
- 对于 Java 来说，由于字符串是不可变的，因此在连接时首先为新字符串分配足够的空间，复制旧字符串中的内容并附加到新字符串。因此，总时间复杂度将是：`5+5×2+5×3+…+5×n=5×(1+2+3+…+n)=5×n×(n+1)/2 即 O(N2)O(N^2)O(N2)。`
- 针对 Java 中出现的此问题，提供了以下解决方案：
  - 如果你确实希望你的字符串是可变的，则可以使用 `toCharArray` 将其转换为字符数组。
  - 如果你经常必须连接字符串，最好使用一些其他的数据结构，如 `StringBuilder` 。
  - KMP 算法 28 题 两种思路：1.有限自动机，2.next
  - 如何的得到 next 数组：公共前后缀问题
  - Knuth–Morris–Pratt（KMP）算法是一种改进的字符串匹配算法，它的核心是利用匹配失败后的信息，尽量减少模式串与主串的匹配次数以达到快速匹配的目的。它的时间复杂度是 O(m+n)

Kmp 算法参考代码

```c++
int match (char* P, char* S){ // KMP 算法
    int* next = buildNext(P); // 构造 next 表
    int m = (int) strlen (S), i = 0; // 文本串指针
    int n = (int) strlen(P), j = 0; //模式串指针
    while (j < n && i < m) // 自左向右逐个比对字符
        if (0 > j || S[i] == P[j]) // 若匹配，或 P 已移除最左侧
            {i++; j++} // 则转到下一字符
        else
            j = next[j]; // 模式串右移（注意：文本串不用回退）
    delete [] next; // 释放 next 表
    return i - j;
}

int* buildNext(char* P) { // 构造模式串 P 的 next 表
    size_t m = strlen(P), j = 0; // “主”串指针
    int* N = new int[m]; // next 表
    int  t = N[0] = -1; // 模式串指针
    while (j < m - 1)
        if ( 0 > t || P[j] == P[t]){ // 匹配
            j++; t++;
            N[j] = t; // 此句可改进为 N[j] = (P[j] != P[t] ? t : N[t]);
        }else // 失配
        t = N[t];
    return N;

}
```

- 双指针技巧：从两端向中间迭代数组，经常在排序数组中使用
- 比如反转数组中的元素，经典双指针问题，
- 双指针的方法可以相同也可以不同，上面做的都是反方向的双指针，接下来该同方向的双指针了，即快慢指针，明天开启这一篇章
- 解决这类问题的关键是: 确定两个指针的移动策略。
- 与前一个场景类似，你有时可能需要在使用双指针技巧之前对数组进行排序，也可能需要运用贪心法则来决定你的运动策略

快慢指针实例：给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度

```python
def removeElement(self, nums: List[int], val: int) -> int:
    slow = 0
    n = len(nums)
    for fast in range(n):
        if nums[fast] != val:
            nums[slow] = nums[fast]
            slow += 1
    return slow
```

- 我们可以调用内置函数来对数组进行排序。但是，理解一些广泛使用的排序算法的原理及其复杂度是很有用的，二分查找是一种重要的技术，用于在排序数组中搜索特定的元素，双指针技巧有时与贪心算法有关，它可以帮助我们设计指针的移动策略

## 链表

- 单链表的基本结构

```java
// Definition for singly-linked list.
public class SinglyListNode {
    int val;
    SinglyListNode next;
    SinglyListNode(int x) { val = x; }
}
```

- 给定一个链表，判断链表中是否有环？引出双指针，在链表中使用两个速度不同的指针，这两个指针的适当速度应该是多少？一个安全的选择是每次移动慢指针一步，而移动快指针两步。每一次迭代，快速指针将额外移动一步。如果环的长度为 M，经过 M 次迭代后，快指针肯定会多绕环一周，并赶上慢指针
- 链表中的双指针模板

```java
// Initialize slow & fast pointers
ListNode slow = head;
ListNode fast = head;
/**
 * Change this condition to fit specific problem.
 * Attention: remember to avoid null-pointer error
 **/
while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;           // move slow pointer one step each time
    fast = fast.next.next;      // move fast pointer two steps each time
    if (slow == fast) {         // change this condition to fit specific problem
        return true;
    }
}
return false;   // change return value to fit specific problem
```

- 在调用 next 字段之前，始终检查节点是否为空。获取空节点的下一个节点将导致空指针错误。例如，在我们运行 fast = fast.next.next 之前，需要检查 fast 和 fast.next 不为空。
- 仔细定义循环的结束条件。
- 复杂度分析

```
空间复杂度分析容易。如果只使用指针，而不使用任何其他额外的空间，那么空间复杂度将是 O(1)。但是，时间复杂度的分析比较困难。为了得到答案，我们需要分析运行循环的次数。

在前面的查找循环示例中，假设我们每次移动较快的指针 2 步，每次移动较慢的指针 1 步。

    如果没有循环，快指针需要 N/2 次才能到达链表的末尾，其中 N 是链表的长度。
    如果存在循环，则快指针需要 M 次才能赶上慢指针，其中 M 是列表中循环的长度。

显然，M <= N 。所以我们将循环运行 N 次。对于每次循环，我们只需要常量级的时间。因此，该算法的时间复杂度总共为 O(N)。

自己分析其他问题以提高分析能力。别忘了考虑不同的条件。如果很难对所有情况进行分析，请考虑最糟糕的情况。
```

- 几个经典问题：反转链表，移除链表元素，奇偶链表，回文链表
- 双链表数据结构定义

```java
// Definition for doubly-linked list.
class DoublyListNode {
    int val;
    DoublyListNode next, prev;
    DoublyListNode(int x) {val = x;}
}
```

**链表和其他数据结构之间时间复杂度的比较**
![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/04/29/screen-shot-2018-04-28-at-174531.png)

## 哈希表

- 有两种不同类型的哈希表：哈希集合和哈希映射，在标准模板库的帮助下，哈希表是易于使用的。大多数常见语言（如 Java，C ++ 和 Python）都支持哈希集合和哈希映射，通过选择合适的哈希函数，哈希表可以在插入和搜索方面实现出色的性能
- 哈希表的关键思想是使用哈希函数将键映射到存储桶，当我们插入一个新的键时，哈希函数将决定该键应该分配到哪个桶中，并将该键存储在相应的桶中；当我们想要搜索一个键时，哈希表将使用相同的哈希函数来查找对应的桶，并只在特定的桶中进行搜索。
- 哈希函数的设计是一个开放的问题。其思想是尽可能将键分配到桶中，理想情况下，如果我们的哈希函数是完美的一对一映射，我们将不需要处理冲突。不幸的是，在大多数情况下，哈希函数并不完美，冲突几乎是不可避免的，它需要在桶的数量和桶的容量之间进行权衡
- 假设存储最大键数的桶有 N 个键，通常，如果 N 是常数且很小，我们可以简单地使用一个数组将键存储在同一个桶中。如果 N 是可变的或很大，我们可能需要使用高度平衡的二叉树来代替
- 插入和搜索是哈希表中的两个基本操作，此外，还有基于这两个操作的操作。例如，当我们删除元素时，我们将首先搜索元素，然后在元素存在的情况下从相应位置移除元素
- 官方哈希表解决方案：

哈希集合

```java
class MyHashSet {
    private final int MAX_LEN = 100000; // the amount of buckets
    private List<Integer>[] set;      // hash set implemented by array

    /** Returns the corresponding bucket index. */
    private int getIndex(int key) {
        return key % MAX_LEN;
    }

    /** Search the key in a specific bucket. Returns -1 if the key does not existed. */
    private int getPos(int key, int index) {
        // Each bucket contains a list.
        List<Integer> temp = set[index];
        if (temp == null) {
            return -1;
        }
        // Iterate all the elements in the bucket to find the target key.
        for (int i = 0; i < temp.size(); ++i) {
            if (temp.get(i) == key) {
                return i;
            }
        }
        return -1;
    }

    /** Initialize your data structure here. */
    public MyHashSet() {
        set = (List<Integer>[])new ArrayList[MAX_LEN];
    }

    public void add(int key) {
        int index = getIndex(key);
        int pos = getPos(key, index);
        if (pos < 0) {
            // Add new key if key does not exist.
            if (set[index] == null) {
                set[index] = new ArrayList<Integer>();
            }
            set[index].add(key);
        }
    }

    public void remove(int key) {
        int index = getIndex(key);
        int pos = getPos(key, index);
        if (pos >= 0) {
            // Remove the key if key exists.
            set[index].remove(pos);
        }
    }

    /** Returns true if this set did not already contain the specified element */
    public boolean contains(int key) {
        int index = getIndex(key);
        int pos = getPos(key, index);
        return pos >= 0;
    }
}

```

哈希映射

> 当一个函数返回两个值并且两个值都有重要意义时我们一般会用 Map 的 key 和 value 来表达，但是这样的话就需要两个键值对，用 Map 映射去做处理时，此时的 key 相当于 value 的一个描述或者引用，而具体的信息都保存在 value 中，我们可以通过 key 去获取对应的 value。但是当 key 和 value 都保存具体信息时，我们就需要用到 Pair 对了。Pair 对也是键值对的形式,在 javax.util 包下，有一个简单 Pair 类可以直接调用，用法是直接通过构造函数将所吸引类型的 Key 和 value 存入，这个 key 和 value 没有任何的对应关系类型也是任意定的

```java
import javafx.util.Pair;

class MyHashMap {
    private final int MAX_LEN = 100000;             // the amount of buckets
    private List<Pair<Integer, Integer>>[] map;     // hash map implemented by array

    /** Returns the corresponding bucket index. */
    private int getIndex(int key) {
        return key % MAX_LEN;
    }

    /** Search the key in a specific bucket. Returns -1 if the key does not existed. */
    private int getPos(int key, int index) {
        // Each bucket contains a list.
        List<Pair<Integer, Integer>> temp = map[index];
        if (temp == null) {
            return -1;
        }
        // Iterate all the elements in the bucket to find the target key.
        for (int i = 0; i < temp.size(); ++i) {
            if (temp.get(i).getKey() == key) {
                return i;
            }
        }
        return -1;
    }

    /** Initialize your data structure here. */
    public MyHashMap() {
        map = (List<Pair<Integer, Integer>>[])new ArrayList[MAX_LEN];
    }

    /** value will always be positive. */
    public void put(int key, int value) {
        int index = getIndex(key);
        int pos = getPos(key, index);
        if (pos < 0) {
            // Add new (key, value) pair if key is not existed.
            if (map[index] == null) {
                map[index] = new ArrayList<Pair<Integer, Integer>>();
            }
            map[index].add(new Pair(key, value));
        } else {
            // Update the value if key is existed.
            map[index].set(pos, new Pair(key, value));
        }
    }

    /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
    public int get(int key) {
        int index = getIndex(key);
        int pos = getPos(key, index);
        if (pos < 0) {
            return -1;
        } else {
            return map[index].get(pos).getValue();
        }
    }

    /** Removes the mapping of the specified value key if this map contains a mapping for the key */
    public void remove(int key) {
        int index = getIndex(key);
        int pos = getPos(key, index);
        if (pos >= 0) {
            map[index].remove(pos);
        }
    }
}
```

- 我们来看看 “删除” 操作。在找到元素的位置之后，我们需要从数组列表中删除元素,内置函数中使用的策略是把第 i 个元素后的所有元素向前移动一个位置。也就是说，你必须移动 n - i 次。因此，从数组列表中删除元素的时间复杂度将为 O(n),考虑 i 取不同值的情况。平均而言，我们将移动 ((n - 1) + (n - 2) + ... + 1 + 0) / n = (n - 1) / 2 次,希望有两种解决方案可以将时间复杂度从 O(n) 降低到 O(1)
- 交换:我们可以使用一种巧妙的策略。首先，用存储桶中的最后一个元素交换要移除的元素。然后删除最后一个元素。通过这种方法，我们成功地在 O(1) 的时间复杂度中去除了元素
- 链表:实现此目标的另一种方法是使用链表而不是数组列表。通过这种方式，我们可以在不修改列表中的顺序的情况下删除元素。该策略时间复杂度为 O(1)
- 哈希表的复杂度分析：如果总共有 M 个键，那么在使用哈希表时，可以很容易地达到 O(M) 的空间复杂度，但是，哈希表的时间复杂度与设计有很强的关系，我们中的大多数人可能已经在每个桶中使用数组来将值存储在同一个桶中，理想情况下，桶的大小足够小时，可以看作是一个常数。插入和搜索的时间复杂度都是 O(1)，但在最坏的情况下，桶大小的最大值将为 N。插入时时间复杂度为 O(1)，搜索时为 O(N)
- 内置哈希表的典型设计是：键值可以是任何可哈希化的类型。并且属于可哈希类型的值将具有哈希码。此哈希码将用于映射函数以获取存储区索引；每个桶包含一个数组，用于在初始时将所有值存储在同一个桶中；如果在同一个桶中有太多的值，这些值将被保留在一个高度平衡的**二叉树搜索树**中，插入和搜索的平均时间复杂度仍为 O(1)。最坏情况下插入和搜索的时间复杂度是 O(logN)，使用高度平衡的 BST。这是在插入和搜索之间的一种权衡
- 哈希集是集合的实现之一，它是一种存储不重复值的数据结构

```java
// "static void main" must be defined in a public class.
public class Main {
    public static void main(String[] args) {
        // 1. initialize the hash set
        Set<Integer> hashSet = new HashSet<>();
        // 2. add a new key
        hashSet.add(3);
        hashSet.add(2);
        hashSet.add(1);
        // 3. remove the key
        hashSet.remove(2);
        // 4. check if the key is in the hash set
        if (!hashSet.contains(2)) {
            System.out.println("Key 2 is not in the hash set.");
        }
        // 5. get the size of the hash set
        System.out.println("The size of has set is: " + hashSet.size());
        // 6. iterate the hash set
        for (Integer i : hashSet) {
            System.out.print(i + " ");
        }
        System.out.println("are in the hash set.");
        // 7. clear the hash set
        hashSet.clear();
        // 8. check if the hash set is empty
        if (hashSet.isEmpty()) {
            System.out.println("hash set is empty now!");
        }
    }
}
```

- 插入新值并检查值是否在哈希集中是简单有效的,因此，通常，使用哈希集来检查该值是否已经出现过
- 给定一个整数数组，查找数组是否包含任何重复项。这是一个典型的问题，可以通过哈希集来解决,可以简单地迭代每个值并将值插入集合中。 如果值已经在哈希集中，则存在重复

```java
boolean findDuplicates(List<Type>& keys) {
    // Replace Type with actual type of your key
    Set<Type> hashset = new HashSet<>();
    for (Type key : keys) {
        if (hashset.contains(key)) {
            return true;
        }
        hashset.insert(key);
    }
    return false;
}
```

- 哈希映射是用于存储 (key, value) 键值对的一种实现

```java
// "static void main" must be defined in a public class.
public class Main {
    public static void main(String[] args) {
        // 1. initialize a hash map
        Map<Integer, Integer> hashmap = new HashMap<>();
        // 2. insert a new (key, value) pair
        hashmap.putIfAbsent(0, 0);
        hashmap.putIfAbsent(2, 3);
        // 3. insert a new (key, value) pair or update the value of existed key
        hashmap.put(1, 1);
        hashmap.put(1, 2);
        // 4. get the value of specific key
        System.out.println("The value of key 1 is: " + hashmap.get(1));
        // 5. delete a key
        hashmap.remove(2);
        // 6. check if a key is in the hash map
        if (!hashmap.containsKey(2)) {
            System.out.println("Key 2 is not in the hash map.");
        }
        // 7. get the size of the hash map
        System.out.println("The size of hash map is: " + hashmap.size()); 
        // 8. iterate the hash map
        for (Map.Entry<Integer, Integer> entry : hashmap.entrySet()) {
            System.out.print("(" + entry.getKey() + "," + entry.getValue() + ") ");
        }
        System.out.println("are in the hash map.");
        // 9. clear the hash map
        hashmap.clear();
        // 10. check if the hash map is empty
        if (hashmap.isEmpty()) {
            System.out.println("hash map is empty now!");
        }
    }
}
```

```java
/*
 * Template for using hash map to find duplicates.
 * Replace ReturnType with the actual type of your return value.
 */
ReturnType aggregateByKey_hashmap(List<Type>& keys) {
    // Replace Type and InfoType with actual type of your key and value
    Map<Type, InfoType> hashmap = new HashMap<>();
    for (Type key : keys) {
        if (hashmap.containsKey(key)) {
            if (hashmap.get(key) satisfies the requirement) {
                return needed_information;
            }
        }
        // Value can be any information you needed (e.g. index)
        hashmap.put(key, value);    
    }
    return needed_information;
}
```

+ 给定一个字符串，找到它中的第一个非重复字符并返回它的索引。如果它不存在，则返回 -1。

```java
/*
 * Template for using hash map to find duplicates.
 * Replace ReturnType with the actual type of your return value.
 */
ReturnType aggregateByKey_hashmap(List<Type>& keys) {
    // Replace Type and InfoType with actual type of your key and value
    Map<Type, InfoType> hashmap = new HashMap<>();
    for (Type key : keys) {
        if (hashmap.containsKey(key)) {
            hashmap.put(key, updated_information);
        }
        // Value can be any information you needed (e.g. index)
        hashmap.put(key, value);    
    }
    return needed_information;
}
```

+ 在上面的问题中，键的选择相对简单。不幸的是，有时你必须考虑在使用哈希表时设计合适的键
+ 举个栗子：给定一组字符串，将字母异位词组合在一起。
+ 实际上，设计关键是在原始信息和哈希映射使用的实际键之间建立映射关系，设计键时，需要保证：1. 属于同一组的所有值都将映射到同一组中。2. 需要分成不同组的值不会映射到同一组。此过程类似于设计哈希函数，但这是一个本质区别。哈希函数满足第一个规则但可能不满足第二个规则。但是你的映射函数应该满足它们
+ 在上面的示例中，我们的映射策略可以是：对字符串进行排序并使用排序后的字符串作为键。也就是说，“eat” 和 “ate” 都将映射到 “aet”。
+ 一些关于如何设计键的建议:
  + 当字符串 / 数组中每个元素的顺序不重要时，可以使用排序后的字符串 / 数组作为键
  + 如果只关心每个值的偏移量，通常是第一个值的偏移量，则可以使用偏移量作为键
  + 在树中，你有时可能会希望直接使用 TreeNode 作为键。 但在大多数情况下，采用子树的序列化表述可能是一个更好的主意
  + 在矩阵中，你可能希望使用行索引或列索引作为键
  + 在数独中，可以将行索引和列索引组合来标识此元素属于哪个块。
  + 有时，在矩阵中，您可能希望将值聚合在同一对角线中。

## 二叉树

+ 树 是一种经常用到的数据结构，用来模拟具有树状结构性质的数据集合，树里的每一个节点有一个值和一个包含所有子节点的列表。从图的观点来看，树也可视为一个拥有N 个节点和N-1 条边的一个有向无环图，二叉树是一种更为典型的树状结构。如它名字所描述的那样，二叉树是每个节点最多有两个子树的树结构，通常子树被称作“左子树”和“右子树”。
+ ----------------
+ 递归方法解决树的为前序遍历、中序遍历和后序遍历问题，迭代方法解决树的为前序遍历、中序遍历和后序遍历问题，广度优先搜索解决树的层序遍历问题
+ 当你删除树中的节点时，删除过程将按照后序遍历的顺序进行。 也就是说，当你删除一个节点时，你将首先删除它的左节点和它的右边的节点，然后再删除节点本身
+ 另外，后序在数学表达中被广泛使用。 编写程序来解析后缀表示法更为容易，可以使用中序遍历轻松找出原始表达式。 但是程序处理这个表达式时并不容易，因为你必须检查操作的优先级，如果你想对这棵树进行后序遍历，使用栈来处理表达式会变得更加容易。 每遇到一个操作符，就可以从栈中弹出栈顶的两个元素，计算并将结果返回到栈中
+ 层序遍历就是逐层遍历树结构,广度优先搜索是一种广泛运用在树或图这类数据结构中，遍历或搜索的算法。 该算法从一个根节点开始，首先访问节点本身。 然后遍历它的相邻节点，其次遍历它的二级邻节点、三级邻节点，以此类推,当我们在树中进行广度优先搜索时，我们访问的节点的顺序是按照层序遍历顺序的
+ 自顶向下的递归：“自顶向下” 意味着在每个递归层级，我们将首先访问节点来计算一些值，并在递归调用函数时将这些值传递到子节点。 所以 “自顶向下” 的解决方案可以被认为是一种前序遍历
+ z自顶向下求一棵二叉树最大深度

```java
private int answer;		// don't forget to initialize answer before call maximum_depth
private void maximum_depth(TreeNode root, int depth) {
    if (root == null) {
        return;
    }
    if (root.left == null && root.right == null) {
        answer = Math.max(answer, depth);
    }
    maximum_depth(root.left, depth + 1);
    maximum_depth(root.right, depth + 1);
}
```
+ “自底向上” 是另一种递归方法。 在每个递归层次上，我们首先对所有子节点递归地调用函数，然后根据返回值和根节点本身的值得到答案。 这个过程可以看作是后序遍历的一种
+ 自底向上求最大深度

```java
public int maximum_depth(TreeNode root) {
	if (root == null) {
		return 0;                                   // return 0 for null node
	}
	int left_depth = maximum_depth(root.left);
	int right_depth = maximum_depth(root.right);
	return Math.max(left_depth, right_depth) + 1;	// return depth of the subtree rooted at root
}
```
+ 何时使用自顶向下：你能确定一些参数，从该节点自身解决出发寻找答案吗？你可以使用这些参数和节点本身的值来决定什么应该是传递给它子节点的参数吗？如果答案都是肯定的，那么请尝试使用 “自顶向下” 的递归来解决此问题
+ 何时使用自底向上：对于树中的任意一个节点，如果你知道它子节点的答案，你能计算出该节点的答案吗？ 如果答案是肯定的，那么 “自底向上” 的递归可能是一个不错的解决方法

## 二叉树搜索树

+ 二叉搜索树是二叉树的一种特殊形式。 二叉搜索树具有以下性质：每个节点中的值必须大于（或等于）其左侧子树中的任何值，但小于（或等于）其右侧子树中的任何值。
+ 像普通的二叉树一样，我们可以按照前序、中序和后序来遍历一个二叉搜索树。 但是值得注意的是，对于二叉搜索树，我们可以通过中序遍历得到一个递增的有序序列。因此，中序遍历是二叉搜索树中最常用的遍历方法
+ 