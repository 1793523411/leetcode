package main

import(
	"rand"
)

type RandomizedSet struct {
	rMap   map[int]int
	rSlice []int
}

/** Initialize your data structure here. */
func Constructor() RandomizedSet {
	return RandomizedSet{make(map[int]int), make([]int, 0)}
}

/** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
func (randSet *RandomizedSet) Insert(val int) bool {
	//存在，返回false
	if _, ok := randSet.rMap[val]; ok {
		return false
	}
	//更新slice和map
	randSet.rSlice = append(randSet.rSlice, val)
	randSet.rMap[val] = len(randSet.rSlice) - 1
	return true
}

/** Removes a value from the set. Returns true if the set contained the specified element. */
func (randSet *RandomizedSet) Remove(val int) bool {
	//不存在，返回false
	if _, ok := randSet.rMap[val]; !ok {
		return false
	}
	index := randSet.rMap[val]
	//把index与队尾交换,同时更新map中现在的index的对应关系
	randSet.rSlice[index] = randSet.rSlice[len(randSet.rSlice)-1]
	randSet.rMap[randSet.rSlice[index]] = index
	//删除队尾，同时从map中删除
	randSet.rSlice = randSet.rSlice[:len(randSet.rSlice)-1]
	delete(randSet.rMap, val)
	return true
}

/** Get a random element from the set. */
func (randSet *RandomizedSet) GetRandom() int {
	//rand.Intn参数小于等于0导致panic
	if len(randSet.rSlice) == 0 {
		return -1
	}
	index := rand.Intn(len(randSet.rSlice))
	return randSet.rSlice[index]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Insert(val);
 * param_2 := obj.Remove(val);
 * param_3 := obj.GetRandom();
 */


func main(){}