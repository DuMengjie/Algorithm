// Instructions:
//
// Given a node object representing a binary tree:
//
// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null
// In C++:
//
// struct node
// {
//   int value;
//   node* left;
//   node* right;
// }
// write a function that returns the sum of all values, including the root.
//
// Examples:
//
// 10
// | \
// 1  2
// => 13
//
// 1
// | \
// 0  0
//     \
//      2
// => 3
//
// Test Examples
//
// Test.describe("Simple Test", function() {
//   var simpleNode = {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}};
//   Test.it("Sums up all children", function() {
//     Test.assertEquals(sumTheTreeValues(simpleNode), 13);
//   });
//
//   var unbalancedNode = {value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}};
//   Test.it("Handles unbalanced trees", function() {
//     Test.assertEquals(sumTheTreeValues(unbalancedNode), 12);
//   });
//
// });
//
// Best Practices:
// function sumTheTreeValues(root) {
//   return !root ? 0 : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
// }

function sumTheTreeValues(root){
  // your code here
  var res = root.value;

  if(root.left != null){
  	res += sumTheTreeValues(root.left);
  }
  if(root.right != null){
  	res += sumTheTreeValues(root.right);
  }

  return res;
}