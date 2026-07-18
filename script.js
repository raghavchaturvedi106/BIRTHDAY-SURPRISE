
const btn=document.getElementById("surpriseBtn");

btn.onclick=function(){

alert("More Surprise is Coming ❤️");

}
const btn = document.getElementById("surpriseBtn");

btn.addEventListener("click",()=>{

document.querySelector(".journey").scrollIntoView({

behavior:"smooth"

});

});
const photos=document.querySelectorAll(".photo img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

photos.forEach(photo=>{

photo.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=photo.src;

}

})

lightbox.onclick=()=>{

lightbox.style.display="none";

}