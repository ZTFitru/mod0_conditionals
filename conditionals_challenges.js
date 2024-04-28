// CHALLENGE 2
// Using the variables defined below, write code that will tell you if you have the ingredients to make a pizza. 
// A pizza requires at least two cups of flour and sauce.

// You should be able to change the variables to achieve the following outputs:
// If cupsOfFlour = 1 and hasSauce = true, print "I cannot make pizza"
// If cupsOfFlour = 5 and hasSauce = false, print "I cannot make pizza"
// If cupsOfFlour = 2 and hasSauce = true, print "I can make pizza"
// If cupsOfFlour = 3 and hasSauce = true, print "I can make pizza"

// Experiment with manipulating the value held within both variables to make sure all above conditions output what you expect.

var cupsOfFlour = 1;
var hasSauce = true;

if(cupsOfFlour >= 2 && hasSauce === true) {
  console.log("I can make pizza!");
}
else {
  console.log("I cannot make pizza.");
}
