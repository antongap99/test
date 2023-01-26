export const saleControl = () => {

    const cardsContainer = document.querySelector('.cards');
    cardsContainer.addEventListener('click', (e) => {
        const target = e.target
        const wrapper = document.querySelector('.sale__products');
        const swiper = document.querySelector('.sale__swiper')
        if(target.closest('.card') &&
        !target.closest('.card').classList.contains('card_active')){
            const cards = cardsContainer.querySelectorAll('.card');
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.remove('card_active');
            }
            e.target.closest('.card').classList.add('card_active');
            wrapper.classList.add('sale__products-open');
            swiper.classList.add('sale__swiper-open');
        } else if(e.target.closest('.card') && !e.target.closest('.select__forms')) {
            e.target.closest('.card').classList.remove('card_active');
            wrapper.classList.remove('sale__products-open');
            swiper.classList.remove('sale__swiper-open');
        }

    })

}
