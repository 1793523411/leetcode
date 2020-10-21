package main

func minWindow(s string, t string) string {
	sl, tl := len(s), len(t)
	tc := [256]int{}
	for i := 0; i < tl; i++ {
		tc[t[i]]++
	}
	start, end, cnt, res, ans := 0, 0, 0, -1, ""
	for end < sl {
		// 记录当前字符是否包含在T中
		tc[s[end]]--
		if tc[s[end]] >= 0 {
			cnt++
		}
		// 当窗口包含T所有字符的时候，start指针左移，直到窗口不包含T所有字符
		for cnt == tl {
			// res == -1 或者 大于 当前窗口长度的时候，改变当前 res 值，保证 res 最小
			if res == -1 || res > end-start+1 {
				ans = s[start : end+1]
				res = end - start + 1
			}
			tc[s[start]]++
			if tc[s[start]] >= 1 {
				cnt--
			}
			start++
		}
		end++
	}

	return ans
}

func main() {}
