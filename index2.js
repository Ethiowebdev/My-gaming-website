var on = true;
var myVar = setInterval(function(){ if(on) {slides()}on=true;},3000);

function slides(i) {
  document.getElementsByTagName("div")[1].style.width="0px";
  document.getElementsByTagName("div")[2].style.width="100%";
  var slide = document.getElementsByTagName("div")[0];
  document.getElementById("slide").appendChild(slide);
  if(i) {
   on = false; 
  }
}
function back_slide(i) {
  document.getElementsByTagName("div")[1].style.width="0px";
  document.getElementsByTagName("div")[0].style.width="100%";
  var slide = document.getElementsByTagName("div")[4];
  var slide2 = document.getElementsByTagName("div")[0];
  document.getElementById("slide").insertBefore(slide,slide2);
  if(i) {
   on = false; 
  }
}