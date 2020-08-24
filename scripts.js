const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')

function cardEventPopModal() {
    modalOverlay.classList.add('active')
    
}
function closeModal() {
    modalOverlay.classList.remove('active')
    
}
for(let card of cards) {
    const cardId = card.getAttribute('id')
    card.addEventListener("click", cardEventPopModal)
    /*modalOverlay.querySelector('.1').src = `img/ap/inside_apartament/${cardId}_1.jpg`
    modalOverlay.querySelector('.2').src = `img/ap/inside_apartament/${cardId}_2.jpg`
    modalOverlay.querySelector('.3').src = `img/ap/inside_apartament/${cardId}_3.jpg`
    modalOverlay.querySelector('.4').src = `img/ap/inside_apartament/${cardId}_4.jpg`*/
}
document.querySelector('.close-modal').addEventListener("click", closeModal)

