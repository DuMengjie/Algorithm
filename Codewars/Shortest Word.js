// Instructions:
// x Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
//
// Sample Tests:
// Test.describe("Example tests",_=>{
// Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// });

function findShort(s){
	var arr = s.split(' '),
		len = arr.length,
		min = arr[0].length,
		i;

	for(i = 0; i < len; i++){
		if(arr[i].length < min){
			min = arr[i].length;
		}
	}

	return min;
}