package main

func uniqueOccurrences(arr []int) bool {
	hash := make(map[int]int)

	for _, v := range arr {
		hash[v]++
	}

	bo := make(map[int]bool)
	for _, v := range hash {
		if bo[v] {
			return false
		} else {
			bo[v] = true
		}
	}
	return true
}

func main() {

}
