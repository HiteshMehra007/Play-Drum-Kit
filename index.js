// Buttons Click Detection

let buttons = document.querySelectorAll(".drum");

for(let i = 0; i < buttons.length; i++){
    let btn = buttons[i];
    btn.addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;

        checkForSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

// KeyBoard Press Detection

document.addEventListener("keydown", function (event){
    checkForSound(event.key);
    buttonAnimation(event.key);
})

// functions 

function checkForSound(ch){

    switch (ch) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(ch){
    let activeButton = document.querySelector("." + ch);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
