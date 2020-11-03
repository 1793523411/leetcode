package main

func validMountainArray(A []int) bool {
	n := len(A)
	// if n < 3 {
	// 	return false
	// }
	i, j := 0, n-1
	for i+1 < n && A[i] < A[i+1] {
		i++
	}
	for j-1 >= 0 && A[j-1] > A[j] {
		j--
	}
	if i != 0 && i == j && j != n-1 {
		return true
	}
	return false
}

func main() {}
