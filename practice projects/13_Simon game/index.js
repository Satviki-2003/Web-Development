var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var level=1;

$(".btn").click(function()
{
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(this);
    checkAnswer(userClickedPattern.length-1);
});

$(document).keypress(function()
{
    nextSequence();
})

function nextSequence()
{
    $("h1").text("Level "+level);
    userClickedPattern=[];
    level++;
    var ran=Math.random();
    ran=ran*4;
    ran=Math.floor(ran);

    var randomChosenColour=buttonColours[ran];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(300).fadeOut(300).fadeIn(300);

}

function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour)
{
    $(currentColour).addClass("pressed");
    setTimeout(() => {
        $(currentColour).removeClass("pressed");
    }, 100);
}

function startOver()
{
    level=1;
    gamePattern=[];
}

function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
    {
        if(userClickedPattern.length==gamePattern.length)
        {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }
    else
    {
        $("body").addClass("game-over");
        var audio1=new Audio("sounds/wrong.mp3");
        audio1.play();
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over.Press any key to Restart.");
            startOver();
    }
}



