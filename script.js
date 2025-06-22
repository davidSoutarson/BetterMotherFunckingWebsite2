/*change la couleur de du div bloc_page
document.getElementById('bloc_page').style.backgroundColor = 'magenta';*/

//envoie un popup avec le mesage//
alert("voulez vous aller sur xxxvidsxxx");

//test addEvenetListener//
var p1 = document.querySelector("li");

p1.addEventListener("click", changeTexte);

function changeTexte() {
  this.innerHTML = "<strong>Bravo !</strong>";
  this.style.color = "orange";
  document.getElementById("page").style.backgroundColor = "black";
  document.getElementById("bloc_page").style.color = "white";
}
