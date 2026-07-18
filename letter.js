const message = `Happy Birthday, Anshika! ❤️

Some people enter our lives quietly,
yet leave behind memories that stay forever.

This website isn't about grand gestures.
It's simply a small effort to celebrate someone
who made the world feel a little brighter.

May your smile always stay the same,
may your dreams come true,
and may life always be kind to you.

Happy Birthday once again. 🎂✨`;

let i = 0;

const typing = document.getElementById("typing");
const nextBtn = document.getElementById("nextBtn");

function typeWriter(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }else{

        nextBtn.style.opacity = "1";

    }

}


typeWriter();