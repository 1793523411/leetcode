class Solution 
{
    public String reverseWords(String s) 
    {
        String[] sp=s.split(" ");
        StringBuilder sb=new StringBuilder();
        for(int i=0;i<=sp.length-1;i++)
        {
            StringBuilder t=new StringBuilder();
            t.append(sp[i]);
            sb.append(t.reverse().toString()).append(" ");
        }
        //substring() 方法返回字符串的子字符串。
        return sb.substring(0,sb.length()-1);
    }
}