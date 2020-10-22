package main

func partitionLabels(S string) []int {
	maxPos := map[byte]int{}
	for i := 0; i < len(S); i++ {
		maxPos[S[i]] = i
	}

	res := []int{}
	start := 0
	scannedCharMaxPos := 0
	for i := 0; i < len(S); i++ {
		curCharMaxPos := maxPos[S[i]]
		if curCharMaxPos > scannedCharMaxPos {
			scannedCharMaxPos = curCharMaxPos
		}
		if i == scannedCharMaxPos {
			res = append(res, i-start+1)
			start = i + 1
		}
	}
	return res
}

func main() {

}
