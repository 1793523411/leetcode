/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.h = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let h = this.h;
    for (var w of word) {
        !h[w] && (h[w] = {}), h = h[w]
    }
    h.isEnd = 1;
};

Trie.prototype.s = function (word) {
    var h = this.h;
    for (var w of word) {
        if (!h[w]) return false
        h = h[w]
    }
    return h;
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    return (h = this.s(word)) && this.h.isEnd !== undefined
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this.s(prefix) !== false
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */