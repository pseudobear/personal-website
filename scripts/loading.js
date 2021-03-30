var charlst = ['!','-','_','/','[',']','{','}','=','*','^','?','#'];
window.onLoad = loadAnimations();

var homeBlinker = false; // global control for blinking char in home page

function loadAnimations(){
  fadein("#nav-home", 1.00, 0.05);
  zoomLeft("#nav-experiences",0,5);
  zoomRight("#nav-about",0,5);
}

function loadHome(){
  homeBlinker = false;
  fadein("#me",0.95,0.04);
  scrambleText("#sofdev","Software Developer");
  setTimeout(() => scrambleText("#name","MICHAEL LI"),500);
  setTimeout(() => fadein("#bio",0.5,0.05),500);
  setTimeout(() => fadein("#resume-link",1.0,0.05),700);
  setTimeout(() => blinkChar("#name","_"), 1220);
}
function loadAbout(){
  homeBlinker = false;
}
function loadExperiences(){
  homeBlinker = false;
}
function scrambleText(object,str){
  var obj = document.querySelector(object);
  obj.innerHTML = "";
  function assemble(str){
    if(str.length == 0)return;
    let count = 0;
    obj.innerHTML = obj.innerHTML + "_";
    var scram = setInterval(() => {
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
  homeBlinker = true;
  var blink = setInterval(() => {
    if(homeBlinker === false){
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


