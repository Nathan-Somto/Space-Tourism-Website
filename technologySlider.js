const infoData = document.querySelectorAll('.infodata');
const btn = document.querySelectorAll('.btn');
const img = document.querySelectorAll('.img');
function handleSlider(e,index)
{
   
    if(e.target.className.includes('outline'))
    {
        e.target.className = "btn sm";
        infoData[index].className =' infodata';
        img[index].className = `img img-bg-${index+1}`
        for(let i = 0; i < 3; i++)
        {
            if( !btn[i].className.includes('outline') && i !== index)
            {
                
        btn[i].className = "btn sm outline";
        infoData[i].className =' infodata none';
        img[i].className = `img img-bg-${i+1} none`;
        break;
            }
        }
    }

   
}
btn.forEach((item,index) =>{
    item.addEventListener('click', (e) =>handleSlider(e,index));
})