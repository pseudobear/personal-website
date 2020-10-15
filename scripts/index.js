var windowPosition = 0;   //0 is for center, -100 is left and 100 is right may go in between
var home = document.getElementById("home");
var about = document.getElementById("about");
var experiences = document.getElementById("experiences");
var navHome = document.getElementById("nav-home");
var navAbout = document.getElementById("nav-about");
var navExperiences = document.getElementById("nav-experiences");

function init (){

  //DEV PURPOSE CODE START 
    windowPosition = 0;
  //DEV PURPOSE CODE END
  
  adjustNav();
  adjustPageDisplay();
}
function adjustMe(){   //make image more responsive for smaller devices
}
function adjustPageDisplay(){
  if(windowPosition<=50 && windowPosition>=-50){
    home.style.display = "block";
    about.style.display = "none";
    experiences.style.display = "none";
  }
  if(windowPosition<-50){
    home.style.display = "none";
    about.style.display = "block";
    experiences.style.display = "experiences";
  }
  if(windowPosition>50){
    home.style.display = "none";
    about.style.display = "none";
    experiences.style.display = "block";
  }
}
function adjustNav(){
  //adjust navigation element positions according to the windowposition
  //(go right when on about page and towards left side when on experiences)
  if(windowPosition<30 && windowPosition>-30){
    setActive(navHome);
  }
  if(windowPosition<-70){
    setActive(navAbout);
  }
  if(windowPosition>70){
    setActive(navExperiences);
  }
}
function setActive(element){
  element.style.color = "#444444";
  element.style.fontWeight = 600;
}
function setInactive(element){
  element.style.color = "#999999";
  element.style.fontWeight = "normal";
}
window.onresize = adjustMe();
init();
