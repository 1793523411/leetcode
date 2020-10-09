package main

func fib(N int) int {
    if N <= 1 {
        return N
    }

    nums := make([]int, 31)
    nums[0] = 0
    nums[1] = 1
    for i := 2; i <= N; i++ {
        nums[i] = nums[i - 2] + nums[i - 1]
    }

    return nums[N]
}


func main(){

}