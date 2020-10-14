class Solution {
    //!桶
    public List<String> commonChars(String[] A) {
        //先得到第一个字符串里面每个字符的情况
        int[] charCount = new int[26];
        for(int i = 0; i < A[0].length(); i++){
            charCount[A[0].charAt(i) - 'a']++;
        }

        //从第1个开始逐个进行比较
        for(int i = 1; i < A.length; i++){
            int[] curCount = new int[26];
            
            //遍历第i个字符串
            for(int j = 0; j < A[i].length(); j++){
                curCount[A[i].charAt(j) - 'a']++;
            }

            //将此时关于第i个字符串的情况与charCount对比，取小的即可
            for(int k = 0; k < 26; k++){
                charCount[k] = Math.min(charCount[k], curCount[k]);
            }
        }

        //此时的charCount即为所有的字符串出现的共有的最小元素的个数
        List<String> result = new ArrayList<>();
        for(int i = 0; i < 26; i++){
            while(charCount[i] != 0){
                result.add(String.valueOf((char)(i + 'a')));
                charCount[i]--;
            }
        }

        return result;
    }
}