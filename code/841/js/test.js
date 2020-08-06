/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
//DFS
var canVisitAllRooms = function(rooms) {
    let opens = new Set();
    let openRooms = (key) => {
        if(!opens.has(key)){//没开门才可以进去拿钥匙
            opens.add(key);//把该房间加入opens
            for(let otherKey of rooms[key]){
                openRooms(otherKey);
            }
        }
    }
    openRooms(0);
    return opens.size >= rooms.length;
}

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
//BFS
var canVisitAllRooms = function(rooms) {
    let opens = new Set();
    let keys = [0];
    while(keys.length){
        let key = keys.shift();
        if(!opens.has(key)){
            opens.add(key);
            for(let otherKey of rooms[key]){
                keys.push(otherKey);
            }
        }
    }
    return opens.size >= rooms.length;
};

