var randomNumber1 = Math.random();
var num1 = Math.floor(randomNumber1 * 6) + 1;
document.querySelector(".img1").setAttribute("src","./images/dice"+num1+".png" );


var randomNumber2 = Math.random();
var num2 = Math.floor(randomNumber2 * 6) + 1;
document.querySelector(".img2").setAttribute("src","./images/dice"+num2+".png" );

if(num1>num2){
  document.querySelector(".heading").innerHTML = "Player 1 Wins!";
}
else if(num2>num1){
  document.querySelector(".heading").innerHTML = "Player 2 Wins!";
}
else if(num1 === num2){
  document.querySelector(".heading").innerHTML = "Draw!";
}
