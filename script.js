var player = document.getElementById('player');
var moveSize = 32;
var parentRect = document.getElementById('board').getBoundingClientRect();
var childRect;

document.addEventListener
// Handle arrows to move the player
// document.addEventListener('keydown', function(event) {
//
//   childRect = document.getElementById('player').getBoundingClientRect();
//
//   if (event.code == 'ArrowUp') {
//     if(childRect.top > parentRect.top)
//       player.style.top = (player.offsetTop - moveSize)+"px";
//   }
//   else if (event.code == 'ArrowRight') {
//     if(childRect.right < parentRect.right)
//       player.style.left = (player.offsetLeft + moveSize)+"px";
//   }
//   else if (event.code == 'ArrowDown') {
//     if(childRect.bottom < parentRect.bottom)
//       player.style.top = (player.offsetTop + moveSize)+"px";
//   }
//   else if (event.code == 'ArrowLeft') {
//     if(childRect.left > parentRect.left)
//       player.style.left = (player.offsetLeft - moveSize)+"px";
//   }
// });
//
// function getRandomPosition() { // renvoie un tableau de coordonnées aléatoires entre 0 et 800
// 	var randomX = Math.floor(Math.random()*800);
// 	var randomY = Math.floor(Math.random()*800);
// 	return [randomX,randomY];
// }
// window.onload = function() { //création des mechants
// 	var badguys = document.getElementsByClassName ("badguy");
//   console.log (badguys)
//   for (i = 0; i < badguys.length; i++){
//     randomPos(badguys.item(i));
//   }
// }
//
// function randomPos(elem) {
//   var xy = getRandomPosition();
//   elem.style.top = xy[1] + 'px';
//   elem.style.left = xy[1] + 'px';
// }
//
// //déplacement ennemie aléatoird
// // document.addEventListener()
//
// setInterval(randomMov(){
//
// }, 2000);
