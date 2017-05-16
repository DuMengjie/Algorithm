// Instructions:
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
//
// Test Examples
//
// function numericalCompare(a, b) {
//   return a - b;
// }

// Test.assertSimilar(twoSum([1,2,3], 4).sort(numericalCompare), [0,2]);
// Test.assertSimilar(twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]);
// Test.assertSimilar(twoSum([2,2,3], 4).sort(numericalCompare), [0,1]);
//
// Best Practices
// function twoSum(numbers, target) {
//     for (var i = 0; i < numbers.length-1; i++) {
//         for (var j = i+1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) return [i, j];
//         }
//     }
// }

function twoSum(numbers, target) {
  // ...
  var l = numbers.length,
  	  i,
  	  j;
  for(i = 0; i < l; i++){
  	var rest = target - numbers[i];
  	for(j = i+1; j < l; j++){
  		if(numbers[j] === rest){
  			return [i, j];
  		}
  	}
  }

  return false;
}