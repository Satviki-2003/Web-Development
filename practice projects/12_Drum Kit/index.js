for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var data = this.innerHTML;
        sound(data);
        animation(data);
    });
}

document.addEventListener("keydown",function(event)
{
    sound(event.key);
    animation(event.key);
})

function animation(key)
{
    var path="."+key;
    var btn=document.querySelector(path);
    btn.classList.add("pressed");
    setTimeout(function()
    {
        btn.classList.remove("pressed");
    },100);
}

function timing(path)
{
    document.querySelector(path).classList.remove("pressed");
}

function sound(key) {
    switch (key) {
        case 'w' : 
            var audio1 = new Audio("C:\\Web Development\\10_Drum Kit\\sounds\\tom-1.mp3");
            audio1.play();
            break;
        case 'a': 
            var audio2 = new Audio("C:\\Web Development\\10_Drum Kit\\sounds\\tom-2.mp3");
            audio2.play();
            break;
        case 's': 
            var audio3 = new Audio("C:\\Web Development\\10_Drum Kit\\sounds\\tom-3.mp3");
            audio3.play();
            break;
        case 'd': 
            var audoi4=new Audio("C:\\Web Development\\10_Drum Kit\\sounds\\tom-4.mp3")
            audoi4.play();
            break;
        case 'j': 
            var audio5 = new Audio("C:\\Web Development\\10_Drum Kit\\sounds\\crash.mp3");
            audio5.play();
            break;
        case 'k': 
            var audio6 = new Audio("C:\\Web Development\\10_Drum Kit\\sounds\\kick-bass.mp3");
            audio6.play();
            break;
        case 'l': 
            var audio7 = new Audio("C:\\Web Development\\10_Drum Kit\\sounds\\snare.mp3");
            audio7.play();
            break;
        default:
            console.log(key);
            break;
    }
}