const center = document.querySelector(".center");
const none = document.querySelector(".none");
const text =document.querySelector(".animateText");
const darkBlue =document.querySelector("#darkBlue");
function addOpacity(){
    text.className ="opacity";
}
 function removeLoader(){
    center.className ="none";
    darkBlue.id ="";
    none.className ="";
    return;
}
setTimeout(()=>{addOpacity()},1500);
setTimeout(()=>{removeLoader()},5000); 