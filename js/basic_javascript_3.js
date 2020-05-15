alert("It's simple math time, but first - two random numbers in a row!");

window.alert(Math.random());

window.alert(Math.random()*100);

function add () {
	var addition=15+2;
	document.getElementById("mathAdd").innerHTML = "15 + 2 = "+addition;
}
function subtraction () {
	var subtract=15-2;
	document.getElementById("mathSub").innerHTML = "15 - 2 = " + subtract;
}
function multiplication () {
	var multiply=15*2;
	document.getElementById("mathMult").innerHTML = "15 x 2 = " + multiply;
}
function division () {
	var divide=15/2;
	document.getElementById("mathDiv").innerHTML = "15 / 2 = " + divide;
}
function simple_math () {
	var moremath=(15+2) * 15 / 2 -5;
	document.getElementById("mathMany").innerHTML = "15 + 2 * 15 / 2 - 5 = " + moremath;
}
function modulus_op () {
	var mod=17 % 2;
	document.getElementById("mathMod").innerHTML = "Divide 17 by 2 and you will have a remainder of: " + mod;
}
function negation_op () {
	var xneg=17;
	document.getElementById("mathNeg").innerHTML = -xneg;
}
function increment () {
	var xincr=17;
	xincr++;
	document.getElementById("mathIncr").innerHTML = -xincr;
}
function decrement () {
	var xdecr=17;
	xdecr--;
	document.getElementById("mathDecr").innerHTML = -xdecr;
}
function eulers_number () {
	document.getElementById("mathRandom").innerHTML = "<p><b>Euler's number:</b> " + Math.E;
}
function color_change () {
	document.getElementById("math").style.color=("white");
}

/* This is where I went terribly wrong trying to be fancy... I kept the code because I want to keep trying to fix it.*/

function clear() {
	document.getElementById("integer1").value="";
	document.getElementById("integer2").value="";
}

var integer1=document.getElementById("integer1");
var integer2=document.getElementById("integer2");
var total=document.getElementById("total");

function calc() {
	var result=document.querySelector('input[name="calc"]:checked').value;
	var num1=parseInt(integer1.value); console.log(typeof num1); console.log(isNaN(num1));
	var num2=parseInt(integer2.value); console.log(typeof num2); console.log(isNaN(num2));

	if(result == "*") {
		total.innerHTML = (num1 * num2).toFixed(2);
	}
	else if(result == "/") {
		total.innerHTML = (num1 / num2).toFixed(2);
	}
	else if(result == "+") {
		total.innerHTML = (num1 + num2).toFixed(2);
	}
	else if(result == "-") {
	total.innerHTML = (num1 - num2).toFixed(2);
	}
}
function runEvent(e){
	var itemInput=document.querySelector('input[type="submit"]');
	var form=document.querySelector('form');

	itemInput.addEventListener('submit',runEvent); // when submit is clicked by the user
	e.preventDefault(); // stops default behavior and allows text entered to be reflected in the console
	console.log(e.target.value); // should capture everything entered in the form in the console, to be used as output, BUT DOESN'T!
	document.getElementById('output').innerHTML='<p>'+e.target.value+'</p>'; // should output enverything entered to the math box, BUT DOESN'T!
}