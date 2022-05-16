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


closeCabinet.addEventListener('click' , (e) => {
    modalCabinet.style.display = "none";
})



///modal-email///


const modalEmail = document.querySelector('.modal-email')


const telTextEmail = document.querySelector('.tel-text-email')


telTextEmail.addEventListener('click' , (e) => {
    modalEmail.style.display === "flex" ? modalEmail.style.display = "none" : modalEmail.style.display = "flex";
})

const closeEmail = document.querySelector('.close-email')


///modal-tel///


const modalTel = document.querySelector('.modal-tel')


const telTextTel = document.querySelector('.tel-text-tel')



telTextTel.addEventListener('click' , (e) => {
    modalTel.style.display === "flex" ? modalTel.style.display = "none" : modalTel.style.display = "flex";
})


const closeTel = document.querySelector('.close-tel')


///modal-tel2///


const modalTel2 = document.querySelector('.modal-tel2')


const telTextTel2 = document.querySelector('.tel-text-tel2')



telTextTel2.addEventListener('click' , (e) => {
    modalTel2.style.display === "flex" ? modalTel2.style.display = "none" : modalTel2.style.display = "flex";
})


const closeTel2 = document.querySelector('.close-tel2')



///modal-button-call///


const modalButtonCall = document.querySelector('.modal-button-call')


const modalButtonHeader = document.querySelector('.modal-button-header')



modalButtonHeader.addEventListener('click' , (e) => {
    modalButtonCall.style.display === "flex" ? modalButtonCall.style.display = "none" : modalButtonCall.style.display = "flex";
})

const closeCall = document.querySelector('.close-call')



///modal-button-footer///


const modalButFooter = document.querySelector('.modal-but-footer')


const modalButtonFooter = document.querySelector('.modal-button-footer')


 
modalButtonFooter.addEventListener('click' , (e) => {
    modalButFooter.style.display === "flex" ? modalButFooter.style.display = "none" : modalButFooter.style.display = "flex";
})

const closeFoot = document.querySelector('.close-foot')