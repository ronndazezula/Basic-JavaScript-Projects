//Says hello to the folks accessing the site in various ways
//First a pop-up window where the user clicks ok to continue to the site

window.alert("Wake Up, World!")

//Use the DOM method "getElementById" to replace original text with new output.

document.getElementById("choice").innerHTML="Which will you decide?";

//

function myFunction() {
	var sentence="We hope that ";
	sentence +=" you choose wisely!";
	document.getElementById("Concatenate").innerHTML=sentence;
}

//Define a function then name it
//Next define a variable and assign a string value
//Apply the fontcolor method to the string variable
//The value of the result populates and HTML element with the "red_text" id

function red_button() {
	var str = "This is the button of truth.";
	var result = str.fontcolor("red");
	document.getElementById("red_text").innerHTML = result;
}
function blue_button() {
	var str = "This is the button of ignorance.";
	var result = str.fontcolor("blue");
	document.getElementById("blue_text").innerHTML = result;
}

document.write("I said, \"Hello, World!\"");

//.fontsize slightly increases the size of text

var X = " Hello, Hello, World! This is called a string."
var X = X.fontsize(4);
document.write(X);

//.fontcolor changes the color of text so it is no longer black
//The + symbol concatenates

var name = "Me,";
var age = "relative.";
var name = name.fontcolor("purple");
document.write(" I am " + name + " and my age is " + age);

var wise = " With age, " + "comes wisdom."
var wise = wise.fontcolor("gold");
document.write(wise);

//Specific variables can be called by name and combined with other types

var address = "my home", houseno = "12345", direction = "E", street = "Mayberry Lane", city = "Nowhere", state = "Somewhere", zip = "75309";
var state = state.fontcolor("blue");
document.write(" I live in " + state + ", United States.");

var reds = " I like the color red if it is not brick red. I also like the number ";
var reds = reds.fontcolor("red");
document.write(reds);

document.write(15+2);