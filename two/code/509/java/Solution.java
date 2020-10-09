class Solution{
    public int fib(int n) {
        return fib(n, new HashMap());
    }

    public int fib(int n, Map<Integer, Integer> map) {
        if (n < 2)
            return n;
        if (map.containsKey(n))
            return map.get(n);
        int first = fib(n - 1, map);
        map.put(n - 1, first);
        int second = fib(n - 2, map);
        map.put(n - 2, second);
        int res = (first + second);
        map.put(n, res);
        return res;
    }
}