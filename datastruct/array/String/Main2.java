// "static void main" must be defined in a public class.
public class Main2 {
    public static void main(String[] args) {
        String s1 = "Hello World";
        // s1[5] = ',';//±àÒë²»Í¨¹ý
        System.out.println(s1);
        String s = "";
        int n = 10000;
        for (int i = 0; i < n; i++) {
            s += "hello";
        }
    }
}