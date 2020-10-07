import java.util.regex.*;
class WordDictionary {
    //利用正则表达式
	StringBuilder sb;
	public WordDictionary() {
		sb = new StringBuilder();
		sb.append('#');
	}
	public void addWord(String word) {
		sb.append(word);
		sb.append('#');
	}

	public boolean search(String word) {
		Pattern p = Pattern.compile('#' + word + '#');
		Matcher m = p.matcher(sb.toString());
		return m.find();
	}
}