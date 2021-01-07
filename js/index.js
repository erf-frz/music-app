window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual  = document.querySelector('.visual');
    const colors = ['#7ae9ed', '#d749c4', '#f6d10a', '#24ae62', '#ff6530','#fd1253'];

    //sounds
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;    //this one make the sound start from beggining each time we click. without it we should wait for the sound to finish.
            sounds[index].play();

            createBubbles(index);
        });
    });

    //function for making the bubbles
    const createBubbles = index => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);

        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';

        //get rid of each bubble after the animation ended(other wise, it stays in the visual div and too many of them makes the app crash)
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);    //refers to bubble
        });
    };

});