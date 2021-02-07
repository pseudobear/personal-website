var charlst = ['!','-','_','/','[',']','{','}','=','*','^','?','#'];
window.onLoad(loadAnimations());

function loadAnimations(){
  fadein("#nav-home", 1.00, 0.05);
  zoomLeft("#nav-experiences",0,5);
  zoomRight("#nav-about",0,5);
}

function loadHome(){
  fadein("#me",0.95,0.04);
  scrambleText("#sofdev","Software Developer");
  setTimeout(() => scrambleText("#name","MICHAEL LI"),500);
  setTimeout(() => fadein("#bio",0.5,0.05),500);
  setTimeout(() => fadein("#resume-link",1.0,0.05),700);
  setTimeout(() => blinkChar("#name","_"), 1220);
}
function loadAbout(){

}
function loadExperiences(){

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
  let blur = 5;
  let count = 0;
  var fade = setInterval(() => {
    if(obj.style.opacity >= targetOpacity)clearInterval(fade);
    count += rate;
    obj.style.opacity = count;
    if(blur != 0) blur--;
    obj.style.filter = "blur(" +blur +"px)";
  }, 20);
}

function zoomLeft(object,dest,rate){ //*** REQUIRES LEFT PROPERTY AND NO RIGHT
  var obj = document.querySelector(object);
  obj.style.left = "2000px";
  var move = setInterval(() => {
    let left = parseFloat(obj.style.left);
    let dist = left-dest;
    if(dist <= 10){
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
    if(dist <= 0){
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


