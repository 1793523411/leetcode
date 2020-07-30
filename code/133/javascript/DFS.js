//BFS
var cloneGraph = function(node) {
    if(!node) return null;
    let map = new Map();
    let stack = [node];
    let newNode = new Node(node.val, []);
    map.set(node.val, newNode);
    while(stack.length) {
        let _node = stack.pop();
        let _newNode = map.get(_node.val);
        _node.neighbors.forEach(neighbor => {
            let _newNB = map.get(neighbor.val);
            if(!_newNB){
                stack.push(neighbor);
                _newNB = new Node(neighbor.val, []);
                map.set(neighbor.val, _newNB);
            }
            _newNode.neighbors.push(_newNB);
        })
    }
    return newNode;
};

//DFS
var cloneGraph = function(node) { 
    return clone(node, new Map());
};
const clone = (node, map) => {
    if (!node) return null;
    let newNode = map.get(node);
    if (newNode){
        return newNode;
    } 
    newNode = new Node(node.val);
    map.set(node, newNode);
    node.neighbors.forEach(neighbor => {
        newNode.neighbors.push(clone(neighbor, map));
    })
    return newNode;
}
