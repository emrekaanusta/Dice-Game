var randomnumber1 = Math.floor( Math.random() * 6 ) + 1;
var randomnumber2 = Math.floor( Math.random() * 6 ) + 1;


// image1

if (randomnumber1 === 1) {
  document.querySelector(".img1").src = "images/dice1.png";
}
if (randomnumber1 === 2) {
  document.querySelector(".img1").src = "images/dice2.png";
}
if (randomnumber1 === 3) {
  document.querySelector(".img1").src = "images/dice3.png";
}
if (randomnumber1 === 4) {
  document.querySelector(".img1").src = "images/dice4.png";
}
if (randomnumber1 === 5) {
  document.querySelector(".img1").src = "images/dice5.png";
}
if (randomnumber1 === 6) {
  document.querySelector(".img1").src = "images/dice6.png";
}

// image2

if (randomnumber2 === 1) {
  document.querySelector(".img2").src = "images/dice1.png";
}
if (randomnumber2 === 2) {
  document.querySelector(".img2").src = "images/dice2.png";
}
if (randomnumber2 === 3) {
  document.querySelector(".img2").src = "images/dice3.png";
}
if (randomnumber2 === 4) {
  document.querySelector(".img2").src = "images/dice4.png";
}
if (randomnumber2 === 5) {
  document.querySelector(".img2").src = "images/dice5.png";
}
if (randomnumber2 === 6) {
  document.querySelector(".img2").src = "images/dice6.png";
}


// choosing the title according to the winner

if ( randomnumber1 > randomnumber2 ) {
    document.querySelector(".container h1").innerHTML = "Player 1 wins!";
}
if ( randomnumber1 < randomnumber2 ) {
    document.querySelector(".container h1").innerHTML = "Player 2 wins!";
}
if ( randomnumber1 === randomnumber2 ) {
    document.querySelector(".container h1").innerHTML = "Draw!";
}
