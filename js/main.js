function toggleMenu(){
 document.getElementById("nav").classList.toggle("active");
}

/* HEADER SHOW + REVEAL */
window.addEventListener("scroll",()=>{
 const header=document.getElementById("header");
 if(window.scrollY>200){
  header.classList.add("show");
 }else{
  header.classList.remove("show");
 }

 revealOnScroll();
});

const reveals=document.querySelectorAll(".reveal");

function revealOnScroll(){
 reveals.forEach(el=>{
  if(el.getBoundingClientRect().top < window.innerHeight-100){
   el.classList.add("active");
  }
 });
}

/* CURSOR */
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
 cursor.style.left=e.clientX+"px";
 cursor.style.top=e.clientY+"px";
});

/* CAMBIO IDIOMA */
let jp=false;

document.getElementById("langBtn").onclick=()=>{
 jp=!jp;

 document.querySelectorAll("[data-es]").forEach(el=>{
  el.textContent = jp ? el.dataset.jp : el.dataset.es;
 });
};

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery img").forEach(img=>{
 img.addEventListener("click",()=>{
  lightbox.classList.add("active");
  lightboxImg.src = img.src;
 });
});

lightbox.addEventListener("click",()=>{
 lightbox.classList.remove("active");
});