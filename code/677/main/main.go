package main

// type MapSum struct {
//     d map[string]int
//     p map[string]map[string]bool
// }

// func Constructor() MapSum {
//     return MapSum{
//         d: map[string]int{}, 
//         p: map[string]map[string]bool{},
//     }
// }

// func (this *MapSum) Insert(key string, val int)  {
//     this.d[key] = val
//     for i, n := 1, len(key); i <= n; i++ {
//         if _, ok := this.p[key[: i]]; !ok {
//             this.p[key[: i]] = map[string]bool{}
//         }
//         this.p[key[: i]][key] = false
//     }
// }

// func (this *MapSum) Sum(prefix string) int {
//     sum := 0
//     for key := range this.p[prefix] {
//         sum += this.d[key]
//     }
//     return sum
// }

//-----------------------

// type MapSum struct {
//     d map[string]int
// }

// func Constructor() MapSum {
//     return MapSum{map[string]int{}}
// }

// func (this *MapSum) Insert(key string, val int)  {
//     this.d[key] = val
// }

// func (this *MapSum) Sum(prefix string) int {
//     sum := 0
//     for s, v := range this.d {
//         if strings.HasPrefix(s, prefix) {
//             sum += v
//         }
//     }
//     return sum
// }


//----------------------------

type MapSum struct {
    val int
    next map[rune]*MapSum
}

func Constructor() MapSum {
    return MapSum{next: map[rune]*MapSum{}}
}

func (this *MapSum) Insert(key string, val int)  {
    for _, c := range key {
        if _, ok := this.next[c]; !ok {
            this.next[c] = &MapSum{next: map[rune]*MapSum{}}
        } 
        this = this.next[c]
    }
    this.val = val
}

func (this *MapSum) Sum(prefix string) int {
    for _, c := range prefix {
        if _, ok := this.next[c]; !ok {
            return 0
        }
        this = this.next[c]
    }
    var dfs func(*MapSum) int; dfs = func(t *MapSum) (res int) {
        res += t.val
        for _, v := range t.next {
            res += dfs(v)
        }
        return
    }
    return dfs(this)
}


func main(){}