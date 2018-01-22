//placing the volunteers' info into an object using a constructor 

var volunteer = function (name, age, hometown){
	this.name=name;
	this.age=age;
	this.hometown=hometown;
}


// exporting module so it is available for fundraiserInfo.js

module.exports=volunteer;