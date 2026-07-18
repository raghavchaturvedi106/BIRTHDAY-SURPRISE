const correct=document.getElementById("correct");

correct.onclick=()=>{

window.location.href="final.html";

}
document.querySelectorAll(".answer").forEach(btn=>{

btn.onclick=()=>{

alert("Oops 😅 Try Again ❤️");

}

});