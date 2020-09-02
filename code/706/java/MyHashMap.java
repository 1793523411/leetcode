class MyHashMap {
	/** Initialize your data structure here. */
	List<List<Integer>> keys;
	List<List<Integer>> values;
	int length = 500; //桶的个数
	
    public MyHashMap() {
        keys = new ArrayList<List<Integer>>();
        values = new ArrayList<List<Integer>>();
        for(int i=0; i<length; i++) {
            keys.add(i, new ArrayList<Integer>());
            values.add(i, new ArrayList<Integer>());
        }
    }
	
    /** value will always be non-negative. */
    public void put(int key, int value) {
        if (!contains(key)) {    		
            keys.get(key%length).add(key);
            values.get(key%length).add(value);
        } else {
            remove(key);
            keys.get(key%length).add(key);
            values.get(key%length).add(value);
        }

    }
    
    /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
    public int get(int key) {
        if(contains(key)) {
            //找到key在list中对应的位置，value也在相同的位置
            int index = keys.get(key%length).indexOf((Integer)key);
            return values.get(key%length).get(index);
        }
        return -1;
        
    }
    
    /** Removes the mapping of the specified value key if this map contains a mapping for the key */
    public void remove(int key) {
        if(contains(key)) {		
            int index = keys.get(key%length).indexOf((Integer)key);
            keys.get(key%length).remove(index);
            values.get(key%length).remove(index);
        }
    }
	
    public boolean contains(int key) {
        return keys.get(key%length).contains(key);
    }
}