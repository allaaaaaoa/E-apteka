///служебные страницы///

const modal = document.querySelector('.header-list')


const modalBtn = document.querySelector('.modal-btn')

modalBtn.addEventListener('click', (e) => {
    modal.style.display === "flex" ? modal.style.display = "none" : modal.style.display = "flex";
    })


const close = document.querySelector('.close-btn')


close.addEventListener('click' , (e) => {
    modal.style.display = "none";
})



/// modal-city=>///



const modalCity = document.querySelector('.modal-city')


const modalBtn1 = document.querySelector('.modal-btn1')



modalBtn1.addEventListener('click' , (e) => {
    modalCity.style.display === "flex" ? modalCity.style.display = "none" : modalCity.style.display = "flex";
})




const closeCity = document.querySelector('.modalCity')


closeCity.addEventListener('click' , (e) => {
    modalCity.style.display = "none";
})



///modal-cabinet///


const modalCabinet = document.querySelector('.modal-cabinet')


const modalBtn4 = document.querySelector('.modal-btn4')



modalBtn4.addEventListener('click' , (e) => {
    modalCabinet.style.display ==="flex" ? modalCabinet.style.display = "none" : modalCabinet.style.display = "flex";
})

const closeCabinet = document.querySelector('.close-cabinet')
console.log(closeCabinet);

closeCabinet.addEventListener('click' , (e) => {
    modalCabinet.style.display = "none";
})