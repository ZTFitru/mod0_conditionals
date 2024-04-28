// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental


var goodDrivingRecord = true;
var age = 19;


if(age >= 25 && goodDrivingRecord === true) {
    console.log("You get a discount!");
}
else if(age >= 25 || goodDrivingRecord !== true) {
    console.log("You pay full price.");
}
else {
    console.log("You need someone else to sign for the rental.")
}

