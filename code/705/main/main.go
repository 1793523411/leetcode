package main

type MyHashSet struct {
	list []bool
}

/** Initialize your data structure here. */
func Constructor() MyHashSet {
	return MyHashSet{
		list: make([]bool, 1000001),
	}
}

func (this *MyHashSet) Add(key int) {
	this.list[key] = true
}

func (this *MyHashSet) Remove(key int) {
	this.list[key] = false
}

/** Returns true if this set contains the specified element */
func (this *MyHashSet) Contains(key int) bool {
	return this.list[key] == true
}

func main(){}