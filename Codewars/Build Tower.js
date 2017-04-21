// Instructions:
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]
//
// Sample Tests:
// Test.assertEquals(JSON.stringify(towerBuilder(1)), JSON.stringify(["*"]));
// Test.assertEquals(JSON.stringify(towerBuilder(2)), JSON.stringify([" * ","***"]));
// Test.assertEquals(JSON.stringify(towerBuilder(3)), JSON.stringify(["  *  "," *** ","*****"]));
//
// Best Practices
// function towerBuilder(n) {
//   return Array.from({length: n}, function(v, k) {
//     const spaces = ' '.repeat(n - k - 1);
//     return spaces + '*'.repeat(k + k + 1) + spaces;
//   });
// }
function towerBuilder(nFloors) {
  // build here
  var arr = new Array(nFloors),
  	  i,
  	  tmpStr = '';

  for(i = 0; i < nFloors; i++){
  	tmpStr = '';
  	for(var j = nFloors - i - 1; j > 0; j--){
  		tmpStr += ' ';
  	}
  	for(var k = 2*i + 1; k > 0; k--){
  		tmpStr += '*';
  	}
  	for(var l = nFloors - i - 1; l > 0; l--){
  		tmpStr += ' ';
  	}
  	arr[i] = tmpStr;
  }

  return arr;
}