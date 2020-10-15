var charlst = ['!','-','_','/','[',']','{','}','=','*','^','?','#'];
var random = 3;
window.onload = loadAnimations();

function loadAnimations(){
  fadein("#me",0.95,0.04);
  scrambleText("#sofdev","Software Developer");
  setTimeout(() => scrambleText("#name","MICHAEL LI"),500);
  setTimeout(() => fadein("#bio",0.5,0.05),500);
  setTimeout(() => fadein("#resume-link",1.0,0.05),700);
}

function scrambleText(object,str){
  var obj = document.querySelector(object);
  obj.innerHTML = "";
  function assemble(str){
    if(str.length==0)return;
    let count = 0;
    obj.innerHTML = obj.innerHTML + "_";
    var scram = setInterval(() => {
      let randomChar = charlst[Math.floor(Math.random()*13)];
      obj.innerHTML = obj.innerHTML.substring(0,obj.innerHTML.length-1)
                    + randomChar; 
      if(count==3){
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
  let count = 0;
  var fade = setInterval(() => {
    if(obj.style.opacity>=targetOpacity)clearInterval(fade);
    count+=rate;
    obj.style.opacity = count;
  }, 20);
}

function zoom(object,dest,rate){
  var obj = document.querySelector(object);
  var move = setInterval(() => {

  }, 20);
}
