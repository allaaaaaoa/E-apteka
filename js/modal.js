const modal = document.querySelector('.header-list')
console.log(modal);

const modalBtn = document.querySelector('.modal-btn')

modalBtn.addEventListener('click' , (e) => {
   modal.style.display = "flex";
})


const close = document.querySelector('.close-btn')
console.log(close);

close.addEventListener('click' , (e) => {
    modal.style.display = "none";
})
