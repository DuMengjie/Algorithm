// Instructions:
//
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains 3 or more numbers.
//
// Test Examples
//
// Test.assertEquals(findUniq([ 0, 1, 0 ]) , 1);
// Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]) ,2);
//
// Best Practices:
// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

function findUniq(arr) {
  // do magic
  var res = arr.sort((a, b) => b-a);
  if(res[0] != res[1]){
    return res[0];
  } else {
    return res[res.length-1];
  }
}