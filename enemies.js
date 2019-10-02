document.body.onload = addEnemies;

function addEnemies () {
  for (var i = 0; i < 3; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'enemies');
    document.getElementById('board').appendChild(div);
  }

}
function getRandomPosition() { // renvoie un tableau de coordonnées aléatoires entre 0 et 800
 	var randomX = Math.floor(Math.random()*800);
 	var randomY = Math.floor(Math.random()*800);
 	return [randomX,randomY];
 }
function enemiesPosition (){
  var enemies =document.getElementsByClassName('enemies');
  for (i = 0; i < enemies.length; i++){
    randomPos(badguys.item(i));
  }
}
