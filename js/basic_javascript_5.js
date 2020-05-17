alert("The contents of this page will be erased and replaced with the data type for 17 after you complete all steps then hover over the words 'One type of data is...' at the end. Have fun!");

function myFunction1(){
    document.getElementById("Test1").innerHTML=0/0;
}

function myFunction2(){
    document.getElementById("Test2").innerHTML=isNaN('Text and Not A Number');
}

function myFunction3(){
    document.getElementById("Test3").innerHTML=isNaN('17');
}

function infinity(){
    document.getElementById("inf").innerHTML=(2E310);
}

function negInfinity(){
    document.getElementById("neg").innerHTML=(-3E310);
}

function boolTrue(){
    document.getElementById("true").innerHTML=(15>2);
}

function boolFalse(){
    document.getElementById("false").innerHTML=(15<2);
}

function twoTrue(){
    document.getElementById("doubleTrue").innerHTML=(17==17);
}

function twoFalse(){
    document.getElementById("doubleFalse").innerHTML=(15==2);
}

function tripleTrueMatch(){
    X=17,
    Y=17,
    document.getElementById("tripleTrueM").innerHTML=(X===Y);
}

function tripleFalseDiff(){
    Z=17,
    Birth="1/1/2000",
    document.getElementById("tripleFalseD").innerHTML=(Z==="Birth");
}

function tripleFalseDiffData(){
    A=17,
    birthDate=17,
    document.getElementById("tripleFalseData").innerHTML=(A==="birthDate");
}

function tripleFalseSameData(){
    B=15,
    C=2,
    document.getElementById("tripleFalseSD").innerHTML=(B===C);
}

function boolAndTrue(){
    document.getElementById("boolAndT").innerHTML=(15>2&&2<15);
}

function boolAndFalse(){
    document.getElementById("boolAndF").innerHTML=(15<2&&2>15);
}

function boolOrTrue(){
    document.getElementById("boolOrT").innerHTML=(17>0||17<0);
}

function boolOrFalse(){
    document.getElementById("boolOrF").innerHTML=(17<0||0>17);
}

function boolNotOpTrue(){
    document.getElementById("notOpTrue").innerHTML=(15>2);
}

function boolNotOpFalse(){
    document.getElementById("notOpFalse").innerHTML=(2>15);
}

function coType(){
    document.getElementById("coerce").innerHTML=("15"+2);
}

function typeOf(){
document.getElementById("para").innerHTML=
    document.write(typeof 17);
}

console.log(15+2);

console.log(15<2);