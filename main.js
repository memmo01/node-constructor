
// requiring fundaraiser module from fundraiserInfo.js
var fund = require("./fundraiserInfo.js");

// creating a new volunteer event and savingit as fundraiser1
var volunteerEvent1 = new fund("Atlanta, GA", "September 2018", "Cleaning Cars");
var volunteerEvent2 = new fund("New York, New York", "July 2018", "working at a shelter")


// creating a list of people who will be going to the created volunteer event
volunteerEvent1.addVolunteer("micahel", 25,"charlotte, nc")
volunteerEvent1.addVolunteer("laura", 25,"charlotte, nc")
volunteerEvent1.addVolunteer("johnny", 35,"charlotte, nc")

 // creating another list of people who will be going to the other created volunteer event
volunteerEvent2.addVolunteer("jose", 18,"birmingham, AL")
volunteerEvent2.addVolunteer("lilly", 30,"Charleston, SC")
volunteerEvent2.addVolunteer("vicktor", 35,"charlotte, nc")


// loading results into the terminal
console.log(fundraiser1);
console.log(fundraiser2);