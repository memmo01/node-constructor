
var volunteer= require("./volunteer.js");

// placing the information from main.js volunteerEvent1 and turning it into an object using a constructor
var fund = function(location, time, event){
	this.location = location;
	this.time=time;
	this.event=event;
	this.volunteers = [];

	this.addVolunteer = function(name, age, hometown){
		this.volunteers.push(new volunteer(name,age,hometown))
	}


}

//exporting module so it is available for main.js
module.exports=fund;