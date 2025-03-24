const image= document.querySelectorAll('.img-container img');
const viewImg= document.querySelector('.img-view');
const close= document.querySelector('.img-view span');
const fullImg= document.querySelector('.img-view img');

for (let img of image) 
{
    img.addEventListener('click', (i) => {
        fullImg.src= i.target.src;//to make sure img inside img-view is changed to the img that has been clicked
        viewImg.style.display= 'flex';//style of display was set to none, now its in flex, so the img will be visible 
    })
}

close.addEventListener('click', () => {
    viewImg.style.display= 'none';
})

