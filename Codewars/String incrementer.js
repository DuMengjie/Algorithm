// Instructions:
// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.
//
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits should be considered.
//
// Sample Tests:
// Test.assertEquals(incrementString("foobar000"), "foobar001");
// Test.assertEquals(incrementString("foo"), "foo1");
// Test.assertEquals(incrementString("foobar001"), "foobar002");
// Test.assertEquals(incrementString("foobar99"), "foobar100");
// Test.assertEquals(incrementString("foobar099"), "foobar100");
// Test.assertEquals(incrementString(""), "1");
//
// Best Practice
// function incrementString(input) {
//   if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
//   return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
//     var up = parseInt(p2) + 1;
//     return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
//   });
// }

function incrementString (strng) {
  // return incrementedString
  var arr = strng.split(''),
  	  len = arr.length;
  if(isNaN(arr[len-1])){
  	return strng + '1';
  } else {
  	var numArr = strng.replace(/[^0-9]/ig, '').split('');
  	var addArr = arrAdd(numArr, numArr.length - 1);
  	return strng.replace(/[^a-zA-Z]/ig, '') + addArr.join('');
  }
}

function arrAdd (arr, index) {
	if(index >= 0){
		arr[index]++;
		if(arr[index] == 10){
			arr[index] = 0;
			arrAdd(arr, index-1);
		}
	}
	if(index == -1){
		arr.unshift(1);
	}
	return arr;
}