var getIntersectionNode = function (headA, headB) {
    const map = new Map();
    let node = headA;
    while (node) {
        map.set(node, true);
        node = node.next;
    }

    node = headB;
    while (node) {
        if (map.has(node)) return node;
        node = node.next;
    }
    return null;
};

var getIntersectionNode = function (headA, headB) {
    var h1 = headA;
    var h2 = headB;

    while (h1 !== h2) {
        // 如果相交、或者没有相交
        h1 = h1 === null ? headB : h1.next; // h1结束 接入对方
        h2 = h2 === null ? headA : h2.next; // h2结束 接入对方
    }

    return h1;
};

var getIntersectionNode = function (headA, headB) {
    let node = headA;
    let lengthA = 0;
    while (node) {
        ++lengthA;
        node = node.next;
    }
    if (!lengthA) return null;

    node = headB;
    let lengthB = 0;
    while (node) {
        ++lengthB;
        node = node.next;
    }
    if (!lengthB) return null;

    let diff = 0,
        slow,
        fast;
    if (lengthA > lengthB) {
        slow = headA;
        fast = headB;
        diff = lengthA - lengthB;
    } else {
        slow = headB;
        fast = headA;
        diff = lengthB - lengthA;
    }

    while (diff--) {
        slow = slow.next;
    }

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};