function toggleMenu(){
 document.getElementById("nav").classList.toggle("active");
}

/* INTRO */
window.addEventListener("load",()=>{
 const intro=document.getElementById("intro");
 if(intro){
  setTimeout(()=>{
   intro.classList.add("hide");
  },1800);
 }
});

/* HEADER + REVEAL */
const header=document.getElementById("header");
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
 if(header){
  if(window.scrollY>200){header.classList.add("show");}
  else{header.classList.remove("show");}
 }
 revealOnScroll();
});

function revealOnScroll(){
 reveals.forEach(el=>{
  if(el.getBoundingClientRect().top < window.innerHeight-100){
   el.classList.add("active");
  }
 });
}

/* CURSOR */
const cursor=document.querySelector(".cursor");
if(cursor){
 document.addEventListener("mousemove",(e)=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
 });
}

/* LANG SWITCH */
const langButtons=document.querySelectorAll(".lang-option");

langButtons.forEach(btn=>{
 btn.addEventListener("click",()=>{
  langButtons.forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");

  const lang=btn.dataset.lang;

  document.querySelectorAll("[data-es]").forEach(el=>{
   if(lang==="es") el.textContent=el.dataset.es;
   if(lang==="en") el.textContent=el.dataset.en;
   if(lang==="jp") el.textContent=el.dataset.jp;
  });
 });
});

/* LIGHTBOX */
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");

document.querySelectorAll(".gallery img").forEach(img=>{
 img.addEventListener("click",()=>{
  lightbox.classList.add("active");
  lightboxImg.src=img.src;
 });
});

lightbox.addEventListener("click",()=>{
 lightbox.classList.remove("active");
});