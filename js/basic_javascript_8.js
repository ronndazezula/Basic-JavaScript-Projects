alert("Test JS");

function concatMethodFunction(){
    var part1="I have ";
    var part2="made this ";
    var part3="into a complete ";
    var part4="sentence using concatenation.";
    var whole_sentence=part1.concat(part2,part3,part4);
    document.getElementById("concatMethod").innerHTML=whole_sentence;
}
function sliceMethodFunction(){
    var sentence="The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which. Animal Farm, George Orwell";
    var section=sentence.slice(148,159);
    document.getElementById("sliceMethod").innerHTML=section;
}
function upperCaseMethodFunction(){
    const sentence='I am a lowercase sentence that longs to be uppercase.';
    document.getElementById("upperCaseMethod").innerHTML=(sentence.toUpperCase());
}
function searchMethodFunction(){
    const sentences='I am a lowercase sentence that longs to be uppercase. In this case, I will not be.';
    const regex=/[^\w\s]/g;
    document.getElementById("searchMethod").innerHTML=(sentences.search(regex));
}
function stringMethodFunction(){
    var X=182;
    document.getElementById("stringMethod").innerHTML=X.toString();
}
function precisionMethodFunction(){
    var M=207883.70909;
    document.getElementById("precisionMethod").innerHTML="The moon is "+M.toPrecision(8)+" Nautical miles from Earth.";
}
function fixedMethodFunction(num1,num2,num3){
    var num1=119614.15;
    var num2=119614.15;
    var num3=(num1+num2);
    document.getElementById("fixedMethod").innerHTML="The time averaged distance between Earth and Moon centers is "+num3.toFixed(0)+" miles.";
}
function valueOfMethodFunction(num4,num5,num6){
    var num4=15;
    var num5=2;
    var num6=(num4+num5);
    document.getElementById("valueOfMethod").innerHTML=num6.valueOf();
}
