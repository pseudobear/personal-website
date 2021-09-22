var pagePosition = 0;   //0 is for home, 1 is about and 2 is for experiences
var me = document.getElementById("me");
var home = document.getElementById("home");
var about = document.getElementById("about");
var experiences = document.getElementById("experiences");
var navHome = document.getElementById("nav-home");
var navAbout = document.getElementById("nav-about");
var navExperiences = document.getElementById("nav-experiences");

function init (){
  adjustNav();
  home.style.display = "none";
  adjustPageDisplay("home");
}
function adjustPageDisplay(page){
  console.log("status: ");
  console.log(home.style.display);
  console.log(about.style.display);
  console.log(experiences.style.display);
  if(page=="home" && home.style.display === "none"){
    home.style.display = "block";
    about.style.display = "none";
    experiences.style.display = "none";
    pagePosition = 0;
    loadHome();
  }
  if(page=="about" && about.style.display === "none"){
    home.style.display = "none";
    about.style.display = "block";
    experiences.style.display = "experiences";
    pagePosition = 1;
    loadAbout();
  }
  if(page=="experiences" && experiences.style.display ==="none"){
    home.style.display = "none";
    about.style.display = "none";
    experiences.style.display = "block";
    pagePosition = 2;
    loadExperiences();
  }
  adjustNav();
}
function adjustNav(){
  //adjust navigation element positions according to the windowposition
  //(go right when on about page and towards left side when on experiences)
  if(pagePosition===0){
    setActive(navHome);
    setInactive(navAbout);
    setInactive(navExperiences);
  }
  if(pagePosition===1){
    setActive(navAbout);
    setInactive(navHome);
    setInactive(navExperiences);
  }
  if(pagePosition===2){
    setActive(navExperiences);
    setInactive(navHome);
    setInactive(navAbout);
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
me.onload = init();
