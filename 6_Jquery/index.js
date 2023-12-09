//Selecting element
$("h1");

//Manipulating styles
$("h1").css("color","yellow");
$("h1").css("font-size","100px");

//Adding classes
$("h1").addClass("newH1");

//Removing class
$("h1").removeClass("newH1");

//Adding multiple classes
$("h1").addClass("newH1 newH2");
$("h1").removeClass("newH1");
$("h1").removeClass("newH2");

//Changing text
$("h1").text("Bye");

//changing attributes
$("a").attr("href","https://www.yahoo.com/?guccounter=1");

//adding eventListner click
$("h1").click(function()
{
    $("h1").css("color","red");
});

//Adding key event
$(document).keypress(function(event)
{
    $("h1").text(event.key);
})


//Another way of adding eventListners
$("h1").on("mouseover",function()
{
    $("h1").css("color","purple");
})

//Adding elements
$("h1").before("<button>NEW</button>");
$("h1").after("<button>NEW</button>");
$("h1").prepend("<button>NEW</button>");
$("h1").append("<button>NEW</button>");

//Removing elements
//$("button").remove();

//Animation
$("h1").hide();
$("h1").show();
$("h1").fadeOut();
$("h1").fadeIn();
$("h1").slideUp();
$("h1").slideDown();

//Custom animation
$("a").animate({
    opacity:0.5
});

//Chaining animations
$("h1").slideUp().slideDown().animate({
    opacity:0.5
});