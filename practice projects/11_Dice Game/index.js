var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
var path1 = "images\\dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", path1);

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);
var path2 = "images\\dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", path2);

var win = document.querySelector("h1");

if (randomNumber1 > randomNumber2) 
{
    win.innerHTML = "Player 1 Wins 🚩";
}
else if (randomNumber1 < randomNumber2) 
{
    win.innerHTML = "Player 2 Wins 🚩";
}
else 
{
    win.innerHTML = "Draw !";
}






