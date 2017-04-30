// Instructions:
// Say hello!
//
// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil if input is empty string or null/nil.
//
// Example:
//
// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null
//
// Sample Tests:
// Test.assertEquals(greet("Niks"), "hello Niks!", "try again");
// Test.assertEquals(greet(null), null, "try again");

function greet(name) {
    if(name){
        return 'hello ' + name + '!';
    } else {
        return null;
    }
}