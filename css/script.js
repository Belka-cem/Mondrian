
console.log("hello world")


var c1 =(document.getElementById("case1"))
var c2 =(document.getElementById("case2"))
var c3 =(document.getElementById("case3"))
var c4 =(document.getElementById("case4"))
var c5 =(document.getElementById("case5"))
var c6 =(document.getElementById("case6"))
var c7 =(document.getElementById("case7"))
var c8 =(document.getElementById("case8"))
var c9 =(document.getElementById("case9"))
var c10 =(document.getElementById("case10"))
var c11 =(document.getElementById("case11"))
var c12 =(document.getElementById("case12"))
var c13 =(document.getElementById("case13"))
var c14 =(document.getElementById("case14"))
var c15 =(document.getElementById("case15"))
var c16 =(document.getElementById("case16"))




c1.addEventListener("click", changeColor, false);
c2.addEventListener("click", changeColor, false);
c3.addEventListener("click", changeColor, false);
c4.addEventListener("click", changeColor, false);
c5.addEventListener("click", changeColor, false);
c6.addEventListener("click", changeColor, false);
c7.addEventListener("click", changeColor, false);
c8.addEventListener("click", changeColor, false);
c9.addEventListener("click", changeColor, false);
c10.addEventListener("click", changeColor, false);
c11.addEventListener("click", changeColor, false);
c12.addEventListener("click", changeColor, false);
c13.addEventListener("click", changeColor, false);
c14.addEventListener("click", changeColor, false);
c15.addEventListener("click", changeColor, false);
c16.addEventListener("click", changeColor, false);


function changeColor(){
  if(this.classList.contains("blanc")){
    this.classList.remove("blanc");
    this.classList.add("bleu");
  } else if(this.classList.contains("bleu")){
    this.classList.remove("bleu");
    this.classList.add("jaune");
  } else if(this.classList.contains("jaune")){
    this.classList.remove("jaune");
    this.classList.add("rouge");
  } else{
      this.classList.remove("rouge");
      this.classList.add("blanc");
    }
  }
