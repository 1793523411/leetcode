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
 * z�ֱ任
 * �㷨���̣� ��˳������ַ��� s��

    res[i] += c�� ��ÿ���ַ� c �����Ӧ�� s��
    i += flag�� ���µ�ǰ�ַ� c ��Ӧ����������
    flag = - flag�� �ڴﵽ ZZZ ����ת�۵�ʱ��ִ�з���
    ���Ӷȷ�����

    ʱ�临�Ӷ� O(N) ������һ���ַ��� s��
    �ռ临�Ӷ� O(N) �������ַ�����ռ�� O(N) ����ռ䡣


 */