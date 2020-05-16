var movies = {
    excellent:"The Boondock Saints",
    hilarious:"Chef",
    unexpected:"Searching",
    satisfying:"Dave Made a Maze",
    guiltyPleasure:"Chappy",
    unintelligible:"Rubber",
    horrid:"People I Know",
    reallyBad:"Rubber",
};
delete movies.unintelligible;

alert("One excellent movie is "+movies.excellent);

function trulyAwful(){
    document.getElementById('bad').innerHTML="One truly awful movie is "+movies.horrid+" and another is "+movies.reallyBad;
}
function trulyGood(){
    document.getElementById('good').innerHTML="One really satisfying movie is "+movies.satisfying;
}
function trulyOther(){
    let text='Other honorable mention movies are '+movies.hilarious+' (hilarious) and '+movies.unexpected+' (unexpected). One movie \('+movies.unintelligible+'\) is so bizarre it is hard to assign it a category. ';
    document.getElementById('other').innerHTML=text;
}