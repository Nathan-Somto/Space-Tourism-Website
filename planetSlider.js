const planet = document.querySelectorAll(".planet");
const section = document.querySelectorAll('.section');
const arr = ['Mars','Moon','Titan','Europa'];
function togglePic(e){
    for (let i = 0; i < 4; i++){

        if(i !== arr.indexOf(e.target.outerText)){
            section[i].classList.remove('info');
            section[i].classList.add('none');
        }
    }
  
    section[arr.indexOf(e.target.outerText)].classList.add('info');
}
planet.forEach((item) =>{
    item.addEventListener('click', togglePic);
})