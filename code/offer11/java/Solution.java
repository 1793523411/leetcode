class Solution {
    //二分法
    public int minArray(int[] numbers){
        int i = 0,j = numbers.length - 1;
        while(i < j){
            int m = (i + j) / 2;
            if(numbers[m] > numbers[j]) i = m + 1;
            else if(numbers[m] < numbers[j]) j = m;
            else j--;
        }
        return numbers[j];
    }
    //普通做法
    public int minArray2(int[] numbers) {
        int min = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if (min > numbers[i])
                min = numbers[i];
        }
        return min;
    }
    
}