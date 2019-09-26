



window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key =  this.document.querySelector(`.key[data-key="${e.keyCode}"]`) 
    if (!audio) return;
    audio.currentTime = 0;
    audio.play(); 
    console.log(key);
    key.classList.add('playing');

    setTimeout(function(){
        key.classList.remove("playing");
    }, 1000);
}
);
/*
function removetranzition(e) {
if (e.propertyName !== 'transform') return;
this.classList.remove('playing');
}

const key = document.querySelectorAll('.key');
key.forEach(key => key.addEventListener('transitionend', removetranzition));*/
