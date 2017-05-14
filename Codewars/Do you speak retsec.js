// Instructions:
// You and your friends want to play undercover agents. In order to exchange your secret messages, you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:
// That way, you'll be able to exchange your messages in private.
//
// Task
// You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.
//
// Examples
// reverseByCenter("agent") == "nteag" // center character is e
// reverseByCenter("secret")  == "retsec" // no center character
//
// Test Examples
//
// s1 = "agent"
// s2 = "secret"
//
// Test.assertEquals(reverseByCenter(s1), "nteag")
// Test.assertEquals(reverseByCenter(s2), "retsec")
//
// Best Practices
// function reverseByCenter(s) {
//   var n = s.length / 2
//   return s.slice(Math.ceil(n)) + s.slice(Math.floor(n), Math.ceil(n)) + s.slice(0, Math.floor(n))
// }

function reverseByCenter(s){
  // ...
  var l = s.length,
  	  posMin = Math.floor(l / 2),
  	  posMax = Math.ceil(l / 2),
  	  front = s.slice(0, posMin),
  	  back = s.slice(posMax, l),
  	  res = s.slice(posMin, posMax);

  return back + res + front;
}