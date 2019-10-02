var bomb = document.getElementById("bomb");
var limitBomb = false;
var blastCenter = document.getElementById("blastCenter");
var blastTop = document.getElementById("blastTop");
var blastRight = document.getElementById("blastRight");
var blastLeft = document.getElementById("blastLeft");
var blastBottom = document.getElementById("blastBottom");

document.addEventListener("keydown", dropBomb);

function dropBomb() {
  var keyCode = event.keyCode;

  if (keyCode == 32) {
    if (limitBomb == false) {
      limitBomb = true;
      bomb.style.display = "block";
      bomb.style.top = positionTop + "px";
      bomb.style.left = positionLeft + "px";
      setTimeout(bombBlast, 3000);
      setTimeout(bombExplod, 3000);
      setTimeout(blastDisapear, 4000);
    }
  }
}

//explosion de la testbomberman
function bombExplod(){
  bomb.style.display = "none";
  limitBomb = false;
}

function bombBlast() {
  blastCenter.style.display = "block";
  blastCenter.style.top = bomb.offsetTop + "px";
  blastCenter.style.left = bomb.offsetLeft + "px";

  blastTop.style.display = "block";
  blastTop.style.top = bomb.offsetTop + 32 + "px";
  blastTop.style.left = bomb.offsetLeft + "px";

  blastLeft.style.display = "block";
  blastLeft.style.top = bomb.offsetTop - 32 + "px";
  blastLeft.style.left = bomb.offsetLeft + "px";

  blastRight.style.display = "block";
  blastRight.style.top = bomb.offsetTop + 32 + "px";
  blastRight.style.left = bomb.offsetLeft + "px";

  blastBottom.style.display = "block";
  blastBottom.style.top = bomb.offsetTop - 32 + "px";
  blastBottom.style.left = bomb.offsetLeft + "px";
}
function blastDisapear() {
  blastCenter.style.display = "none";
}
