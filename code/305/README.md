## Java中map.getOrDefault()方法的使用

Map.getOrDefault(Object key, V defaultValue)方法的作用是：
+ 当Map集合中有这个key时，就使用这个key值；
+ 如果没有就使用默认值defaultValue。

代码示例如下：
```java
	HashMap<String, String> map = new HashMap<>();
	map.put("name", "cookie");
	map.put("age", "18");
	map.put("sex", "女");
	String name = map.getOrDefault("name", "random");
	System.out.println(name);// cookie，map中存在name,获得name对应的value
	int score = map.getOrDefault("score", 80);
	System.out.println(score);// 80，map中不存在score,使用默认值80
```