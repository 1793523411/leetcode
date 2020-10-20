package main

func build(str string) string {
    s := []byte{}
    for i := range str {
        if str[i] != '#' {
            s = append(s, str[i])
        } else if len(s) > 0 {
            s = s[:len(s)-1]
        }
    }
    return string(s)
}

func backspaceCompare(s, t string) bool {
    return build(s) == build(t)
}

func main(){}