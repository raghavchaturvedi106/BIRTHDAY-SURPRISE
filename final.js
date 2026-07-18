const cake=document.getElementById("cakeBtn");

cake.onclick=()=>{

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

}
const song=document.getElementById("song");

const music=document.getElementById("musicBtn");

music.onclick=()=>{

song.play();

}