
// (MOUSE) Button Presed

var noOfDrumButtons = document.querySelectorAll(".drum").length , prevPressed = '0';


for( var i = 0; i < noOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", buttonClicked);
}

// var audio = new Audio("sounds/crash.mp3");

function buttonClicked() {
    // audio.play();
    var btnName = this.innerHTML;
    // this.style.color = "white";
    btnEvent(btnName);
    btnAnimation(btnName,prevPressed);
}


// Keyboard input

    document.addEventListener("keydown", function(event) {
        btnEvent(event.key);
        btnAnimation(event.key,prevPressed); 
    })


function btnEvent (key) {
    switch (key) {

        case "w" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k" :
            var kick = new Audio("sounds/crash.mp3");
            kick.play();
            break;

        case "l" :
            var crash = new Audio("sounds/kick-bass.mp3");
            crash.play();
            break;
            
        default :
            console.log(" Invalid ");
    }
}


function btnAnimation(currKey,prevPressed) {
    document.querySelector("."+currKey).classList.add("pressed");
    if( this.prevPressed != '0') {
        document.querySelector("."+prevPressed).classList.remove("pressed");
    }
    this.prevPressed = currKey;
}