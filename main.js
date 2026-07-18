window.addEventListener("scroll",()=>{

const scroll=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;

document.getElementById("progress-bar").style.width=scroll+"%";

});
const titles=[

"❤️ Happy Birthday ❤️",

"🎂 Anshika 🎂",

"✨ Stay Happy ✨",

"💖 Have a Wonderful Year 💖"

];

let index=0;

setInterval(()=>{

document.title=titles[index];

index=(index+1)%titles.length;

},2000);
