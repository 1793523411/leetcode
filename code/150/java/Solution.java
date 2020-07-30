class Solution {
    public static int evalRPN(String[] tokens){
        int[] numStack = new int[tokens.length/2+1];
        int index = 0;
        for(String s :tokens){
            switch(s) {
                case "+":
                    numStack[index-2] += numStack[--index];
                    break;
                case "-":
                    numStack[index-2] -= numStack[--index];
                    break;
                case "*":
                    numStack[index-2] *= numStack[--index];
                    break;
                case "/":
                    numStack[index-2] /= numStack[--index];
                    break;
                default:
                    numStack[index++] = Integer.parseInt(s);
                    break;
            }
        }
        return numStack[0];
    }
}