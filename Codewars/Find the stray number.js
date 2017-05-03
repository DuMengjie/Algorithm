// Instructions:
//
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
// Implement the method stray which accepts such array, and returns that single different number.
//
// The input array will always be valid! (odd-length >= 3)
//
// Examples:
//
// [1, 1, 2] => 2
//
// [17, 17, 3, 17, 17, 17, 17] => 3
//
// Sample Tests:
// Test.assertSimilar(stray([1, 1, 2]), 2);
//
// Best Practice
// function stray(numbers){
//   for (var i in numbers){
//      if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//   }
// }

function stray(numbers) {
	numbers.sort();
	if(numbers[0] !== numbers[1]){
		return numbers[0];
	} else {
		return numbers[numbers.length-1];
	}
}