// Instructions:
//
// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
//
// ##Examples :
//
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
//
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
//
// Sample Tests:
//
// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);
//
//
// Best Practice
// function iqTest(numbers){
//   numbers = numbers.split(" ").map(function(el){return parseInt(el)});
//
//   var odd = numbers.filter(function(el){ return el % 2 === 1});
//   var even = numbers.filter(function(el){ return el % 2 === 0});
//
//   return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
// }

function iqTest(numbers){
  // ...
  var arr = numbers.split(' ');

  arr.forEach(function(item, index, array){
  	if(item % 2 == 0){
  		arr[index] = 0;
  	} else if(item % 2 == 1){
  		arr[index] = 1;
  	}
  });

  if(arr.indexOf(1) == arr.lastIndexOf(1)){
  	return arr.indexOf(1) + 1;
  } else {
  	return arr.indexOf(0) + 1;
  }
}