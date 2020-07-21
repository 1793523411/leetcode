import java.util.ArrayList;
import java.util.List;


public class Solution {
    public static String convert(String s, int numRows) {
        if (numRows < 2)
            return s;
        List<StringBuilder> rows = new ArrayList<StringBuilder>();
        for (int i = 0; i < numRows; i++)
            rows.add(new StringBuilder());
        int i = 0, flag = -1;
        for (char c : s.toCharArray()) {
            rows.get(i).append(c);
            if (i == 0 || i == numRows - 1)
                flag = -flag;
            i += flag;
        }
        StringBuilder res = new StringBuilder();
        for (StringBuilder row : rows)
            res.append(row);
        return res.toString();
    }
    public static void main(String[] args) {
        String s = "LEETCODEISHIRING";
        String res = convert(s,3);
        System.out.println(res);
    }
}

/**
 * z字变换
 * 算法流程： 按顺序遍历字符串 s；

    res[i] += c： 把每个字符 c 填入对应行 s；
    i += flag： 更新当前字符 c 对应的行索引；
    flag = - flag： 在达到 ZZZ 字形转折点时，执行反向。
    复杂度分析：

    时间复杂度 O(N) ：遍历一遍字符串 s；
    空间复杂度 O(N) ：各行字符串共占用 O(N) 额外空间。


 */