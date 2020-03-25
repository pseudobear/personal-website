var windowPosition;   //0 is for center, -1 is left and 1 is right may go in between

function init (){
  windowPosition = 0;
  document.getElementById("nav-home").style.color = "#444444";
  document.getElementById("nav-home").style.fontWeight = 600;
}
function adjustMe(){   //make image more responsive for smaller devices
}
window.onresize = adjustMe();
init();
