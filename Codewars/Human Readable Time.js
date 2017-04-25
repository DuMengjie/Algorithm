// Instructions:
// Given the triangle of consecutive odd numbers:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.
//
// Sample Tests:
// describe('examples', function() {
//   it('should format correctly', function() {
//     Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
//     Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//   });
// });
//
// Best Practice
// function humanReadable(seconds) {
//   var pad = function(x) { return (x < 10) ? "0"+x : x; }
//   return pad(parseInt(seconds / (60*60))) + ":" +
//          pad(parseInt(seconds / 60 % 60)) + ":" +
//          pad(seconds % 60)
// }

function humanReadable(seconds) {
  // TODO
  var time = '',
  	  hour,
  	  minute,
  	  second;

  hour = Math.floor(seconds / 3600);
  seconds %= 3600;
  minute = Math.floor(seconds / 60);
  seconds %= 60;
  second = seconds;

  if(hour < 10){
  	hour = '0' + hour;
  }
  if(minute < 10){
  	minute = '0' + minute;
  }
  if(second < 10){
  	second = '0' + second;
  }

  time = hour + ':' + minute + ':' + second;

  return time;
}