var hasCycle = function(head) {
    try{
        JSON.stringify(head)
    }catch(e){
        return true
    }
    return false
};
