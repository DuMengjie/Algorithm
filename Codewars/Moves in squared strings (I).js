// Instructions:
// This kata is the first of a sequence of four about "Squared Strings".
//
// You are given a string of n lines, each substring being n characters long: For example:
//
// s = "abcd\nefgh\nijkl\nmnop"
//
// We will study some transformations of this square of strings.
//
// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
// or printed:
//
// vertical mirror   |horizontal mirror
// abcd --> dcba     |abcd --> mnop
// efgh     hgfe     |efgh     ijkl
// ijkl     lkji     |ijkl     efgh
// mnop     ponm     |mnop     abcd
// #Task:
//
// Write these two functions
// and
//
// high-order function oper(fct, s) where
//
// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)
// #Examples:
//
// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
// Note:
//
// The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Your test cases".
// Forthcoming katas will study other tranformations.
//
// Sample Tests:
// Test.describe("Example Test Cases", function(){
// 	Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
// 	Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
// 	Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
// 	Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
// 	Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
// 	Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")
// });

function vertMirror(strng) {
    // Your code
    var arr = strng.split('\n');
    var res = arr.map(function(value, index, array){
    	return value.split('').reverse().join('');
    });
    return res.join('\n');
}
function horMirror(strng) {
    // Your code
    var arr = strng.split('\n');
    return arr.reverse().join('\n');
}
function oper(fct, s) {
    // Your code
    return fct(s);
}