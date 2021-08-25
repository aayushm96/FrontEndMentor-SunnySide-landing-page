


const menuBtn=document.querySelector('.menu-btn');
menuBtn.addEventListener('click' , clc);




function clc(e){
    let x=e.target.previousElementSibling;
    x.classList.toggle('mobile-menu');
    
    console.log(x);
}