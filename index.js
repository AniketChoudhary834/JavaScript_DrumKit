function playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.add('playing');

        /*
        // Alternate method 1 to remove class playing 
        setTimeout(() => {
            key.classList.remove('playing');
        }, 90);
        */
        

        /*   // Alternate method 2 to remove class playing 
        const keys =document.querySelectorAll('.key');

        function removeTransition(e){
          if(e.propertyName!='transform') return;
          this.classList.remove('playing')
        }
        keys.forEach((key)=>{key.addEventListener('transitioned',removeTransition)});
        */


        if(!audio)return; //stops function from running for other keys
        audio.currentTime = 0;  // rewind audio to the start
        audio.play();
    }

    function removeTransition(e){
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.remove('playing');   // Method  to remove class playing
    }

    window.addEventListener('keydown',playSound);
    window.addEventListener('keyup',removeTransition);
