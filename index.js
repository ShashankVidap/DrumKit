var totalButtons=document.getElementsByClassName("drum").length;
for(var i=0;i<totalButtons;i++)
{
document.getElementsByClassName("drum")[i].addEventListener("click",clickFunction);
}
function clickFunction(){

    // alert("Button is clicked");
    buttonContent=this.innerHTML;
    // alert(buttonContent+" is clicked");
    makeSound(buttonContent);
    addAnimation(buttonContent);
}
function makeSound(buttonName)
{
    switch(buttonName){
    case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    
    case "a":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    
    case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    
    case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    
    case "j":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
    
    case "k":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
    
    case "l":
        var kickbass=new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;
    
}
}

// Keyboard Events
document.addEventListener("keypress",function(event)
{
    // alert(event.key+" pressed");
    makeSound(event.key);
    addAnimation(event.key);
});

// Adding Animation to individual buttons
function addAnimation(buttonContent)
{
for(var i=0;i<totalButtons;i++)
{
    if(buttonContent==document.getElementsByClassName("drum")[i].innerHTML)
    {
    document.getElementsByClassName("drum")[i].classList.add("pressed");
    RemoveAnimation(i);
}
}
}

function RemoveAnimation(current_I)
{
    setTimeout(function()
{
    for(var i=0;i<totalButtons;i++)
    {
        if(document.getElementsByClassName("drum")[i]==document.getElementsByClassName("drum")[current_I])
        {
            document.getElementsByClassName("drum")[current_I].classList.remove("pressed");
        }
    }
},150);
}