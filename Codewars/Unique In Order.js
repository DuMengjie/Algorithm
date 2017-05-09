// Instructions:
//
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
//
// Test Examples
//
// Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
//
// Best Practices:
// var uniqueInOrder = function (iterable)
// {
//   return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
// }

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  var l = iterable.length,
  	  arr = [],
  	  i;
  if(l==0){
  	return arr;
  }

  arr.push(iterable[0]);
  for(i = 1; i < l; i++){
  	if(iterable[i] != iterable[i-1]){
  		arr.push(iterable[i]);
  	}
  }

  return arr;
}