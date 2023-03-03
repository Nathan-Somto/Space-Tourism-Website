const dot = document.querySelectorAll(".dot");
const info = document.querySelectorAll('.crewInfo');
let previousNumber = 0;
function togglePic(number){
    previousNumber = number;
    info.forEach((data)=>{
        data.classList.add("none")
    });
    dot.forEach((data)=>{
        data.classList.remove("active");
    })
    
    info[number%4].classList.remove("none");
    dot[(number % 4) *5].className += " active";
  

  
}
dot.forEach((item,index) =>{
    item.addEventListener('click', ()=>{togglePic(index)});
})