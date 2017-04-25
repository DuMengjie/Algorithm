// Instructions:
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
//
// Examples:
// n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1):
// the numbers of interest are
// 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
// so there are 11 digits `1` for the squares of numbers between 0 and 25.
//
// Sample Tests:
// Test.describe("nbDig",function() {
// Test.it("Basic tests",function() {
//     Test.assertEquals(nbDig(5750, 0), 4700)
//     Test.assertEquals(nbDig(11011, 2), 9481)
//     Test.assertEquals(nbDig(12224, 8), 7733)
//     Test.assertEquals(nbDig(11549, 1), 11905)
// })})
//
// Best Practices
// function nbDig(n, d) {
// var res=0;
//     for (var g=0;g<=n;g++){
//       var square=(g*g+"").split("");
//       square.forEach((s)=>s==d?res++:null)
//     }return res;
// }

function nbDig(n, d) {
    // your code
    var i,
    	count = 0;

    for(i = 0; i <= n; i++){
    	var pow = i * i, tmp;
    	do
    	{
    		tmp = pow % 10;
    		if(tmp == d) count++;
    		pow = Math.floor(pow / 10);
    	}
    	while (pow!=0);
    }

    return count;
}