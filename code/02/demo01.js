/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 这种写法运行通过但结果不正确，会多出来一堆0 ,将carr最后的判断放在循环外可以解决多出来的0的问题,但还是多出来1

// var addTwoNumbers = function (l1, l2) {
//   let root = new ListNode(0);
//   let cursor = root;
//   let carry = 0;
//   let sumval = 0;
//   while (l1 != null || l2 != null) {
//     let l1val = l1 != null ? l1.val : 0;
//     let l2val = l2 != null ? l2.val : 0;
//     sumval = l1val + l2val + carry;
//     carry = sumval / 10;
//     let sumNode = new ListNode(sumval % 10);
//     cursor.next = sumNode;
//     cursor = sumNode;

//     if (l1 != null) l1 = l1.next;
//     if (l2 != null) l2 = l2.next;
//   }
//   carry && (cursor.next = new ListNode(carry));
//   return root.next;
// };

//这种写法正确

var addTwoNumbers = function (l1, l2) {
  let node = new ListNode("head");
  let temp = node;
  let add = 0;
  let sum = 0;
  while (l1 || l2) {
      sum = (l1?l1.val:0)+(l2?l2.val:0)+add
      temp.next = new ListNode(sum % 10)
      temp = temp.next
      add = sum >=10 ?1 :0
      l1 && (l1 = l1.next)
      l2 && (l2 = l2.next)
  }
  add && (temp.next = new ListNode(add))
  return node.next
};
