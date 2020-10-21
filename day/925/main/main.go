package main

func isLongPressedName(name string, typed string) bool {
	i := 0
	for j := 0; j < len(typed); j++ {
		if i < len(name) && name[i] == typed[j] {
			i++
		} else if i-1 >= 0 && typed[j] == name[i-1] {

		} else {
			return false
		}
	}
	return i > len(name)-1
}

func main(){}