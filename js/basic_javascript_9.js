alert("Welcome! Please enjoy these two slide shows, then test the countdown timer afterward!");

var slideIndex = [1,1];
var slideId = ["dogSlides1", "dogSlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

function countdownFunction(){
    var seconds=document.getElementById("seconds").value;

    function tick(){
        seconds=seconds-1;
        timer.innerHTML=seconds;
        setTimeout(tick,120);
        if(seconds==-1){
            alert("Time's up!");
        }
        if(seconds==-5){
            alert("This timer will keep running because I haven't figured out how to stop it...");
        }
    }
    tick();
}