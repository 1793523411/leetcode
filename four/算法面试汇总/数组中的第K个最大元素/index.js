/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//直接排序
let findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a).slice(0, k);
    console.log(nums)
    return nums[k - 1]
};

//--------------------------
//小顶堆
let findKthLargest = function (nums, k) {
    // 从 nums 中取出前 k 个数，构建一个小顶堆
    let heap = [,], i = 0
    while (i < k) {
        heap.push(nums[i++])
    }
    buildHeap(heap, k)

    // 从 k 位开始遍历数组
    for (let i = k; i < nums.length; i++) {
        if (heap[1] < nums[i]) {
            // 替换并堆化
            heap[1] = nums[i]
            heapify(heap, k, 1)
        }
    }

    // 返回堆顶元素
    return heap[1]
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (arr, k) => {
    if (k === 1) return
    // 从最后一个非叶子节点开始，自上而下式堆化
    for (let i = Math.floor(k / 2); i >= 1; i--) {
        heapify(arr, k, i)
    }
}

// 堆化
let heapify = (arr, k, i) => {
    // 自上而下式堆化
    while (true) {
        let minIndex = i
        if (2 * i <= k && arr[2 * i] < arr[i]) {
            minIndex = 2 * i
        }
        if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
            minIndex = 2 * i + 1
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex)
            i = minIndex
        } else {
            break
        }
    }
}

// 交换
let swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
//--------------------------------------
//快速选择（quickselect）算法--快速排序
let quickSort = (arr) => {
    quick(arr, 0, arr.length - 1)
}

let quick = (arr, left, right) => {
    let index
    if (left < right) {
        // 划分数组
        index = partition(arr, left, right)
        if (left < index - 1) {
            quick(arr, left, index - 1)
        }
        if (index < right) {
            quick(arr, index, right)
        }
    }
}

// 一次***
let partition = (arr, left, right) => {
    // 取中间项为基准
    var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
        i = left,
        j = right
    // 开始调整
    while (i <= j) {

        // 左指针右移
        while (arr[i] < datum) {
            i++
        }

        // 右指针左移
        while (arr[j] > datum) {
            j--
        }

        // 交换
        if (i <= j) {
            swap(arr, i, j)
            i += 1
            j -= 1
        }
    }
    return i
}

// 交换
let swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 测试
let arr = [1, 3, 2, 5, 4]
quickSort(arr)
console.log(arr) // [1, 2, 3, 4, 5]
// 第 2 个最大值
console.log(arr[arr.length - 2])  // 4

// 上面我们实现了快速排序来取第 k 个最大值，其实没必要那么麻烦，我们仅仅需要在每执行一次的时候，比较基准值位置是否在 n-k 位置上，如果小于 n-k ，则第 k 个最大值在基准值的右边，我们只需递归基准值右边的子序列即可；如果大于 n-k ，则第 k 个最大值在基准值的做边，我们只需递归***基准值左边的子序列即可；如果等于 n-k ，则第 k 个最大值就是基准值


let findKthLargest = function (nums, k) {
    return quickSelect(nums, nums.length - k)
};

let quickSelect = (arr, k) => {
    return quick(arr, 0, arr.length - 1, k)
}

let quick = (arr, left, right, k) => {
    let index
    if (left < right) {
        // 划分数组
        index = partition(arr, left, right)
        // Top k
        if (k === index) {
            return arr[index]
        } else if (k < index) {
            // Top k 在左边
            return quick(arr, left, index - 1, k)
        } else {
            // Top k 在右边
            return quick(arr, index + 1, right, k)
        }
    }
    return arr[left]
}

let partition = (arr, left, right) => {
    // 取中间项为基准
    var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
        i = left,
        j = right
    // 开始调整
    while (i < j) {

        // 左指针右移
        while (arr[i] < datum) {
            i++
        }

        // 右指针左移
        while (arr[j] > datum) {
            j--
        }

        // 交换
        if (i < j) swap(arr, i, j)

        // 当数组中存在重复数据时，即都为datum，但位置不同
        // 继续递增i，防止死循环
        if (arr[i] === arr[j] && i !== j) {
            i++
        }
    }
    return i
}

// 交换
let swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

//---------------
////中位数的中位数（BFPRT）算法---没看懂
let findKthLargest = function(nums, k) {
    return nums[bfprt(nums, 0, nums.length - 1, nums.length - k)]
}

let bfprt = (arr, left , right, k) => {
  let index
  if(left < right) {
    // 划分数组
    index = partition(arr, left, right)
    // Top k
    if(k === index) {
        return index
    } else if(k < index) {
        // Top k 在左边
        return bfprt(arr, left, index-1, k)
    } else {
        // Top k 在右边
        return bfprt(arr, index+1, right, k)
    }
  }
  return left
}

let partition = (arr, left, right) => {
  // 基准
  var datum = arr[findMid(arr, left, right)],
      i = left,
      j = right
  // 开始调整
  while(i < j) {
    // 左指针右移
    while(arr[i] < datum) {
      i++
    }
    
    // 右指针左移
    while(arr[j] > datum) {
      j--
    }
    
    // 交换
    if(i < j) swap(arr, i, j)

    // 当数组中存在重复数据时，即都为datum，但位置不同
    // 继续递增i，防止死循环
    if(arr[i] === arr[j] && i !== j) {
        i++
    }
  }
  return i
}


/**
 * 数组 arr[left, right] 每五个元素作为一组，并计算每组的中位数，
 * 最后返回这些中位数的中位数下标（即主元下标）。
 *
 * @attention 末尾返回语句最后一个参数多加一个 1 的作用其实就是向上取整的意思，
 * 这样可以始终保持 k 大于 0。
 */
let findMid = (arr, left, right) => {
    if (right - left < 5)
        return insertSort(arr, left, right);

    let n = left - 1;

    // 每五个作为一组，求出中位数，并把这些中位数全部依次移动到数组左边
    for (let i = left; i + 4 <= right; i += 5)
    {
        let index = insertSort(arr, i, i + 4);
        swap(arr[++n], arr[index]);
    }

    // 利用 bfprt 得到这些中位数的中位数下标（即主元下标）
    return findMid(arr, left, n);
}

/**
 * 对数组 arr[left, right] 进行插入排序，并返回 [left, right]
 * 的中位数。
 */
let insertSort = (arr, left, right) => {
    let temp, j
    for (let i = left + 1; i <= right; i++) {
        temp = arr[i];
        j = i - 1;
        while (j >= left && arr[j] > temp)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return ((right - left) >> 1) + left;
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
