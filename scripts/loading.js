window.onload = loadAnimations();

function loadAnimations(){
  console.log("I don't understand.");
}

var charlst = ['!','<','>','-','_','/','[',']','{','}','=','*','^','?','#'];
function scrambleText(object, str){
  var obj = Document.querySelector(object);
  
  //scrambling algorithm
  function scramble(obj,str){
    if(str.length==0)return;
    for(let i = 0; i<3; i++){
      obj.innerHTML = obj.innerHTML + charlst[Math.floor(Math.random() * charlst.length) + 1];
    }
  }
}



