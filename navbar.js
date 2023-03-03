const toggler = document.getElementById("toggle-btn");
const close = document.getElementById('toggle-close');
const mainNav =document.querySelector(".sideNav");

toggler.addEventListener('click',() =>{
    mainNav.style.display="flex";

});
close.addEventListener('click',()=>{
    mainNav.style.display ='none';
    toggler.style.display ='block';
});