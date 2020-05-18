alert("Test JS");

//Step 131 Assignment - global variable

var X=10;

function addX1(){
    document.write(20+X+"<br>");
}
function addX2(){
    document.write(X+100);
}
addX1();
addX2();

//Step 131 Assignment - local variable, previously threw an error because Y was not defined in addY2 - I defined it because the error was bothering me later.

function addY1(){
    var Y=10;
    console.log(15+Y);
}
function addY2(){
    var Y=10;
    console.log(Y+100);
}
addY1();
addY2();

//Step 134 Assignment

function ifGetHoursFunction(){
    if(new Date().getHours()<23){
        document.getElementById("ifHours").innerHTML="As long as it isn't midnight you will see this message.";
    }
}

//Step 135 Assignment

function ifMineFunction(){
    if(new Date().getFullYear()<2021){
        document.getElementById("ifMine").innerHTML="It's still the year 2020!";
    }
}

//Step 137 Assignment

var name=prompt("Please enter your first name.");
alert("Hello, "+name+"! Welcome to this web site!");

if(name=='Ronnda')
{
    alert("We have the same first name!")
}
else(name!='Ronnda')
{
    alert("That's a great name!");
}

var age=prompt("Please tell us your age, we won't tell!");
var text;
if(age>20)
{
    text="You are old enough to drink alcohol in Oregon.";
}
else(age<21)
{
    text="You are not quite old enough to drink alcohol in Oregon.";
};

function ifElseFunction(){
    document.getElementById("ifElse").innerHTML=text;
}

// Step 139 Assignment

function ifLastNameFunction(){
    var lastName=prompt("Please enter your last name.");
    var textLastName;
    if(lastName=='Zezula')
    {
        textLastName=("Coincidence, we have the same last name!")
    }
    else if(lastName=='Smith')
    {
        textLastName=("Smith is a great last name!");
    }
    else{
        textLastName=("That is a great last name!")
    }
    document.getElementById("ifLastName").innerHTML=textLastName;
}