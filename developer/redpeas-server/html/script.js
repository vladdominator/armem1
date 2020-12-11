let block=document.querySelector('.people__container')
for(i=0;i<5;i++){
let food=document.querySelectorAll('.foods')[i]
food.addEventListener('click',()=>{
   block.style.display='flex'
Window.location.reload()
})
}
let slideIndex=1;
showSlides(slideIndex);
function plusSlides(x){
   showSlides(slideIndex+=x);
}
function showSlides(n){
   let i;
   let slides=document.getElementsByClassName('caroosel');
   if(n>slides.length){
      slideIndex=1;
   }
   if(n<1){
      slideIndex=slides.length;
   }
   for(i=0;i<slides.length;i++){
      slides[i].style.display='none';
   }
   slides[slideIndex-1].style.display='flex';
}
