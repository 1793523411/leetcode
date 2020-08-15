api解法

```java
class Solution {
    public int minArray(int[] numbers) {
        Arrays.sort(numbers);
        return numbers[0];
    }
}

```

```js
var minArray = function(numbers) {
    return Math.min(...numbers)
};
```