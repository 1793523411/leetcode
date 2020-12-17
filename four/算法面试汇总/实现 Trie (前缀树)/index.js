var Trie = function() {
    this.h = {}
};

Trie.prototype.insert = function(word) {
    var h = this.h
    for (var w of word) 
        !h[w] && (h[w] = {}), h = h[w]
    h.isEnd = 1
};

Trie.prototype.s = function(word) {
    var h = this.h
    for (var w of word) {
        if (!h[w]) return false
        h = h[w] 
    }
    return h
}

Trie.prototype.search = function(word, h) {
    return (h = this.s(word)) && h.isEnd !== undefined
};

Trie.prototype.startsWith = function(prefix) {
    return this.s(prefix) !== false
};
