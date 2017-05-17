// Instructions:
//
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.always be the sum of two different items from that array).
//
// Test Examples
//
// describe("Case 1", function(){
//     it ("should be defined", function(){
//         Test.assertEquals(getCount("abracadabra"), 5)
//     });
// });
//
// Best Practices
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

function getCount(str) {
  var arr = str.split('');

  var vowel = arr.filter(function(value,index){
    if(arr[index] === 'a'||arr[index] === 'e'||arr[index] === 'i'||arr[index] === 'o'||arr[index] === 'u'){
      return true;
    }
    return false;
  });
  return vowel.length;
}