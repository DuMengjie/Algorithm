// Instructions:
// Description:
//
// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?
//
// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".
//
// Examples
//
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"
//
// Test Examples
//
// describe("Basic Tests", function(){
//   it("It should works for basic tests", function(){

// Test.assertSimilar(balance("!!","??") , "Right")
// Test.assertSimilar(balance("!??","?!!") , "Left")
// Test.assertSimilar(balance("!?!!","?!?") , "Left")
// Test.assertSimilar(balance("!!???!????","??!!?!!!!!!!") , "Balance")

// })})
//
// Best Practices
// function balance(left,right){
//    l=[...left].reduce((s,a)=>s+(a=='?'?3:2),0);
//    r=[...right].reduce((s,a)=>s+(a=='?'?3:2),0);
//    return l==r?"Balance":l>r?"Left":"Right"
// }

function balance(left,right){
  //coding and coding....
  var arrL = left.split(''),
  	  arrR = right.split(''),
  	  sumL = 0,
  	  sumR = 0;

  arrL.forEach(function(item){
  	if(item == '!'){
  		sumL += 2;
  	} else {
  		sumL += 3;
  	}
  });

  arrR.forEach(function(item){
  	if(item == '!'){
  		sumR += 2;
  	} else {
  		sumR += 3;
  	}
  });

  if(sumL < sumR){
  	return "Right";
  }else if(sumL > sumR){
  	return "Left";
  }else{
  	return "Balance";
  }
}