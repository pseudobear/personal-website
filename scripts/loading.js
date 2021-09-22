var charlst = ['!','-','_','/','[',']','{','}','=','*','^','?','#'];
window.onLoad = loadAnimations();

var homeAnimations = false; // global control for blinking char in home page
var intervals = [];

function clearStoredIntervals() {
  intervals.map((interval) => {
    console.log(interval);
    clearInterval(interval);
    intervals = [];
  });
}

function loadAnimations(){
  fadein("#nav-home", 1.00, 0.05);
  zoomLeft("#nav-experiences",0,5);
  zoomRight("#nav-about",0,5);
}

function loadHome(){
  clearStoredIntervals();
  homeAnimations = true;
  fadein("#me",0.95,0.04);
  scrambleText("#sofdev","Software Developer");
  setTimeout(() => scrambleText("#name","MICHAEL LI",blinkChar,"#name","_"),500);
  setTimeout(() => fadein("#bio",0.5,0.05),500);
  setTimeout(() => fadein("#resume-link",1.0,0.05),700);
}
function loadAbout(){
  homeAnimations = false;
}
function loadExperiences(){
  homeAnimations = false;
}
function scrambleText(object,str, callback, call1, call2){
  var obj = document.querySelector(object);
  obj.innerHTML = "";
  function assemble(str){
    if(!homeAnimations) {
      console.log("home animations " +homeAnimations);
      return;
    }
    if(str.length == 0) {
      if(typeof callback === "function") callback(call1, call2);
      return;
    }
    let count = 0;
    obj.innerHTML = obj.innerHTML + "_";
    var scram = setInterval(() => {
      intervals.push(scram);
      let randomChar = charlst[Math.floor(Math.random()*13)];
      obj.innerHTML = obj.innerHTML.substring(0,obj.innerHTML.length-1)
                    + randomChar; 
      if(count == 3){
        obj.innerHTML = obj.innerHTML.substring(0,obj.innerHTML.length-1) + str.charAt(0);
        assemble(str.substring(1,str.length));
        clearInterval(scram);
      }
      count++;
    }, 20);
  }
  assemble(str);
}

function fadein(object,targetOpacity,rate){
  var obj = document.querySelector(object);
  obj.style.opacity == 0;
  let count = 0;
  var fade = setInterval(() => {
    intervals.push(fade);
    if(obj.style.opacity >= targetOpacity){
      count = targetOpacity;
      clearInterval(fade);
    }
    count += rate;
    obj.style.opacity = count;
    obj.style.filter = "blur(" +(targetOpacity - count) +"px)";
  }, 20);
}

function zoomLeft(object,dest,rate){ //*** REQUIRES LEFT PROPERTY AND NO RIGHT
  var obj = document.querySelector(object);
  obj.style.left = "2000px";
  var move = setInterval(() => {
    intervals.push(move);
    let left = parseFloat(obj.style.left);
    let dist = left-dest;
    if(dist <= 1){
      obj.style.left = dest.toString()+"px";
      clearInterval(move);
      return;
    }
    let diff = dist/rate;
    left -= diff;
    obj.style.left = left.toString()+"px";
  }, 20);
}

function zoomRight(object,dest,rate){ //*** REQUIRES RIGHT PROPERTY AND NO LEFT
  var obj = document.querySelector(object);
  obj.style.right = "2000px";
  var move = setInterval(() => {
    intervals.push(move);
    let right = parseFloat(obj.style.right);
    let dist = right-dest;
    if(dist <= 1){
      obj.style.right = dest.toString()+"px";
      clearInterval(move);
      return;
    }
    let diff = dist/rate;
    right -= diff;
    obj.style.right = right.toString()+"px";
  }, 20);
}

function blinkChar(object,char){
  var obj = document.querySelector(object);
  let display = false;
  var blink = setInterval(() => {
    intervals.push(blink);
    if(homeAnimations === false){
      clearInterval(blink);
      if(display) obj.innerHTML = obj.innerHTML.substring(0,obj.innerHTML.length-1);
    }
    if(display){
      obj.innerHTML = obj.innerHTML.substring(0,obj.innerHTML.length-1);
      display = false;
    }
    else{
      obj.innerHTML += char;
      display = true;
    }
  }, 530);
}


