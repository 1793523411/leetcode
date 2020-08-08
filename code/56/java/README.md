java Comparator的使用

::运算符,双冒号运算就是Java中的[方法引用],[方法引用]的格式是 类名::方法名

```java
person -> person.getName();

可以替换成

Person::getName

() -> new HashMap<>();

可以替换成

HashMap::new
```

```java
for (Object n : list) { System.out.println(n); }

list.forEach(n -> System.out.println(n));

list.forEach(System.out::println);

```

number -> Math.abs(number) 经过eta转换后是 Math::abs 为什么Java要用:: 来表示eta转换，猜测可能是设计者考虑到java广大用户并不那么熟悉函数式风格，直接用一个函数名表达转换后的lambda 容易在理解上有歧义，就像上面 Math.abs 可能被新手把abs误解为Math里的一个静态常量而非方法，所以写成 Math::abs 就不容易误解了。