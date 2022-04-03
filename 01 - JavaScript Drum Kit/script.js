const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const stopSound = (e) => {
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    key.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

window.addEventListener('keyup', stopSound);

//!code below was suggested by Wes Bos, I elected for the above (11-14)
// const removeTransition = (e) => {
    //     if(e.propertyName !== 'transform') return;
    //     e.target.classList.remove('playing');
    // };

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));