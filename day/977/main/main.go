package main

func sortedSquares(A []int) []int {
	ret := make([]int, len(A))
	s, e := 0, len(A)-1
	idx := len(A) - 1
	for s <= e {
		if A[s]*A[s] > A[e]*A[e] {
			ret[idx] = A[s] * A[s]
			s++
		} else {
			ret[idx] = A[e] * A[e]
			e--
		}
		idx--
	}

	return ret
}

func main() {}
