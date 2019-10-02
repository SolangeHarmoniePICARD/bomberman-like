document.body.onload = addEnemies;

function addEnemies () {
  for (var i = 0; i < 3; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'enemies');
    document.getElementById('board').appendChild(div);
    randomPos(div);
  }

}
function getRandomPosition() { // renvoie un tableau de coordonnées aléatoires entre 0 et 800
 	var randomX = Math.floor(Math.random()*(25));
 	var randomY = Math.floor(Math.random()*(25));
 	return [randomX,randomY];
 }
// function enemiesPosition (){
//   var enemies =document.getElementsByClassName('enemies');
//   for (i = 0; i < enemies.length; i++){
//     randomPos(enemies.item(i));
//   }
// }
function randomPos(elem) {
  var xy = getRandomPosition();
  var x = xy[0]*32;
  var y = xy[1]*32;
  elem.style.top = x[0] + 'px';
  elem.style.left = y[1] + 'px';
}
