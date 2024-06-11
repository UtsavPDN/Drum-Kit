const keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
const buttons = document.querySelectorAll('.drum');
const audios = ['tom-1.mp3', 'tom-2.mp3', 'tom-3.mp3', 'tom-4.mp3', 'snare.mp3', 'crash.mp3', 'kick-bass.mp3'];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(index) {
        return function() {
            var audio = new Audio("./sounds/"+audios[index]);
            audio.play();
            buttonAnimation(buttons[index].innerHTML);
        };
        
    }(i)); // Immediately invoked function expression (IIFE) with the current value of i as argument
}

document.addEventListener('keydown', function(event) { 
    const key = event.key.toLowerCase(); 
    const index = keys.indexOf(key); 
    if (index !== -1 && buttons[index]) { 
        buttons[index].click(); 
    } 

    buttonAnimation(event.key);
}) 

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey); 

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
