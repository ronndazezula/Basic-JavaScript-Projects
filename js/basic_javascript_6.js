alert("Test JS");

function rideFunction(){
    var height, canRide;
    height=document.getElementById("height").value;
    canRide=(height<52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML=canRide+" to ride.";
}

function voteFunction(){
    var age, canVote;
    age=document.getElementById("age").value;
    canVote=(age<18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML=canVote+" to vote.";
}

function tripleFalseDiff(){
    Z=17,
    Birth="1/1/2000",
    document.getElementById("tripleFalseD").innerHTML=(Z==="Birth");
}

function vehicle(make, model, year, color,cond){
    this.vehicle_make=make;
    this.vehicle_model=model;
    this.vehicle_year=year;
    this.vehicle_color=color;
    this.vehicle_cond=cond;
}
var Jack=new vehicle("Dodge","Viper",2020,"Red","new");
var Emily=new vehicle("Jeep","Trail Hawk",2019,"White and Black","like new");
var Erik=new vehicle("Ford","Pinto",1971,"Mustard","beater");

function keywordsConstructors(){
    document.getElementById("keyWaC").innerHTML=
    "Erik drives a "+Erik.vehicle_color+"-colored "+Erik.vehicle_model+" manufactured in "+Erik.vehicle_year;
}

var Jessie=new vehicle("Chevy","Tahoe",1995,"Black","pristine");

function keyWord(){
    document.getElementById("newThis").innerHTML=
    "Jessie drives a "+Jessie.vehicle_color+"-colored "+Jessie.vehicle_make+" "+Jessie.vehicle_model+" manufactured in "+Jessie.vehicle_year+". It is in "+Jessie.vehicle_cond+" condition.";
}

function nestedFunction(){
    document.getElementById("nFunction").innerHTML=count();
    function count(){
        var startingPoint=15;
        function plusTwo() {startingPoint+=2;}
        plusTwo();
        return startingPoint;
    }
}