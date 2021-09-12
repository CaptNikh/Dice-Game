var x = Math.random()*6;
x = Math.floor(x)+1;
var s1 = "images/dice"+x+".png";
document.querySelector("img.img1").setAttribute("src",s1);

var z = Math.random()*6;
z = Math.floor(z)+1;
var s2 = "images/dice"+z+".png";
document.querySelector("img.img2").setAttribute("src",s2);

function whoWins(x, z)
{

  if(x>z)
  {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  }
  else if(z>x)
  {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  }
  else
  {
    document.querySelector("h1").innerHTML = "Refresh Me";
  }
  return;
}
whoWins(x,z);
