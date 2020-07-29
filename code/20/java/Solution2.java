public Solution2 {
    //使用栈
    public boolean isValid(String s){
        LinkedList<Character> list = new LinkedList<>(){{}};
        Map<Character,Character> map = new HashMap<>(){{
            put('(', ')');put('{', '}');put('[', ']');
        }};
        for(Character ch : s.toCharArray()){
            if(map.containsKey(ch))
                list.addLast(map.get(ch));
            else if (list.isEmpty() || ch != list.removeLast())
                return false;
        }
        return list.isEmpty();
    }
}