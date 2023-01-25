export const saleControl = () => {

    const cardsContainer = document.querySelector('.cards');
    cardsContainer.addEventListener('click', (e) => {
        const target = e.target
        const wrapper = document.querySelector('.cards');
        if(target.closest('.card') &&
        !target.closest('.card').classList.contains('card_active')){
            const cards = cardsContainer.querySelectorAll('.card');
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.remove('card_active');
            }
            e.target.closest('.card').classList.add('card_active');
            wrapper.classList.add('swiper-wrapper_card-open');
        } else if(e.target.closest('.card') && !e.target.closest('.select__forms')) {
            e.target.closest('.card').classList.remove('card_active');
            wrapper.classList.remove('swiper-wrapper_card-open');
        }

    })

}
