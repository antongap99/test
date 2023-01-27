export const saleControl = () => {

    const cardsContainer = document.querySelector('.sale__cards');
    cardsContainer.addEventListener('click', (e) => {
        const target = e.target
        const wrapper = document.querySelector('.sale__products');
        const slider = document.querySelector('.sale__slider')
        if(target.closest('.sale__card') &&
        !target.closest('.sale__card').classList.contains('card_active')){
            const cards = cardsContainer.querySelectorAll('.sale__card');
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.remove('card_active');
            }
            e.target.closest('.sale__card').classList.add('card_active');
            wrapper.classList.add('sale__products-open');
            slider.classList.add('sale__swiper-open');
        } else if(e.target.closest('.sale__card') && !e.target.closest('.select__forms')) {
            e.target.closest('.sale__card').classList.remove('card_active');
            wrapper.classList.remove('sale__products-open');
            slider.classList.remove('sale__swiper-open');
        }

    })

}
