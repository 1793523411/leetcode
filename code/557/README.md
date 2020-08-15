```java
    public String reverseWords(String s) {
       return Arrays.stream(s.split(" ")).map(v ->new StringBuffer(v).reverse().toString() ).collect(Collectors.joining(" "));
    }
```
