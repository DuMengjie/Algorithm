// Instructions:
//
// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
//
// Notes:
//
// the returned string should only contain lowercase letters
//
// Test Examples
//
// Test.describe('tests', _ => {
//   Test.it('fixed tests', _ => {
//     Test.assertEquals(kebabize('myCamelCasedString'), 'my-camel-cased-string');
//     Test.assertEquals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
//   });
// });
//
// Best Practices:
// function kebabize(str) {
//
//   var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
//   return nonumber.join('-').toLowerCase();
//
// }

function kebabize(str) {
  // return
  return str.replace(/[0-9]/g, '').replace(/[A-Z]/g, function(word, index){
  	if(index!==0){
  		return '-' + word.toLowerCase();
  	} else {
  		return word.toLowerCase();
  	}
  });
}