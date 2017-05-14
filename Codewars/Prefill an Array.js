// Instructions:
// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples

//     prefill(3,1) --> [1,1,1]

//     prefill(2,"abc") --> ['abc','abc']

//     prefill("1", 1) --> [1]

//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]

//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"
//
// Test Examples
//
// Test.assertSimilar(prefill(3,1), [1,1,1]);
// Test.assertSimilar(prefill(2,'abc'), ['abc','abc']);
// Test.assertSimilar(prefill('1',1), [1]);
// Test.assertSimilar(prefill(3, prefill(2,'2d')), [['2d','2d'],['2d','2d'],['2d','2d']]);
// var errorThrown = false;
// try {prefill('xyz', 1)}
// catch(e) {
//   Test.assertEquals(e.name, "TypeError");
//   Test.assertEquals(e.message, "xyz is invalid");
//   errorThrown = true;
// }
// Test.expect(errorThrown, "prefill did not throw an error");
//
// Best Practices
// function prefill(n, v) {
//   if (/\D/g.test(n) || n < 0) {throw new TypeError(n + ' is invalid')}
//   return Array.apply(null, new Array(parseInt(n, 10))).map(function() {return v;});
// }

function prefill(n, v) {
  var tmpN = parseInt(n);
  if(tmpN === 0){
  	return [];
  }
  if(isNaN(n) || tmpN < 0 || tmpN != n){
  	throw { name: "TypeError", message: n + " is invalid"};
  }

  return Array.from({length:tmpN}).map((item,index) => v);
}