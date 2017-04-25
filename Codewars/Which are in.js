// Instructions:
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//
// Example 1:
//
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
//
// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []
//
// Sample Tests:
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// a1 = ["xyz", "live", "strong"]
// Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
// a1 = ["live", "strong", "arp"]
// Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
// a1 = ["tarp", "mice", "bull"]
// Test.assertSimilar(inArray(a1, a2), [])
//
// Best Practice
// function inArray(arr1, arr2) {
//   return arr1.filter(function(needle) {
//     return arr2.some(function(haystack) {
//       return haystack.indexOf(needle) > -1;
//     });
//   }).sort();
// }

function inArray(array1,array2){
  //...
  array1.sort();
  var len1 = array1.length,
      len2 = array2.length,
      i,
      r = [];

  for(i = 0; i < len1; i++){
    if(array1[i] !== array1[i+1]){
      for(j = 0; j < len2; j++){
        if(array2[j].indexOf(array1[i]) >= 0){
          r.push(array1[i]);
          break;
        }
      }
    }
  }

  return r;
}