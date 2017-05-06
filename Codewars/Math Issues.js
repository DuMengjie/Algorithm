// Instructions:
//
// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
//
// Here is a list of functions, we need:
//
// Math.round()
// Math.ceil()
// Math.floor()
//
// Sample Tests:
// Test.assertEquals(Math.round(0.4), 0, 'Math.round(0.4)');
// Test.assertEquals(Math.round(0.5), 1, 'Math.round(0.5)');
//
// Test.assertEquals(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
// Test.assertEquals(Math.ceil(0.5), 1, 'Math.ceil(0.5)');
//
// Test.assertEquals(Math.floor(0.4), 0, 'Math.floor(0.4)');
// Test.assertEquals(Math.floor(0.5), 0, 'Math.floor(0.5)');
//
// Best Practices:
// Math.round = function(number) {
//   return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
// };

// Math.ceil = function(number) {
//   return (parseInt(number) === number) ? number : parseInt(number) + 1;
// };

// Math.floor = function(number) {
//   return parseInt(number);
// };

Math.round = function(number) {
  var tmp = number * 10,
      rest = tmp % 10;
  if(rest >= 5){
    return (tmp-rest)/10 + 1;
  } else {
    return (tmp-rest)/10;
  }
};

Math.ceil = function(number) {
  var tmp = number * 10,
      rest = tmp % 10;

  if(rest == 0){
    return number;
  } else {
    return (tmp-rest)/10 + 1;
  }
};

Math.floor = function(number) {
  var tmp = number * 10,
      rest = tmp % 10;
  return (tmp-rest)/10;
};