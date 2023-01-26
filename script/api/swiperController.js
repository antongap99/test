import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const swiperController = () => {
    new Swiper('.sale__swiper', {
        breakpoints: {
            // 490: {
            //     slidesPerView: 1,
            //     spaceBetween: 100
            // },
            // 1260: {
            //     slidesPerView: 2,
            //     spaceBetween: 50

            // },
        //     1298: {
        //         slidesPerView: 4,
        //         spaceBetween: 20
        //     }
        },
        navigation: {
            nextEl: '.sale__button-next',
            prevEl: '.sale__button-prev',
        },

    })

    new Swiper('.hero__sliper', {
        // loop: true,
        navigation: {
            nextEl: '.hero__button-prev',
            prevEl: '.hero__button-next',
        },
    });

    new Swiper('.today__items', {
        // loop: true,
        navigation: {
            nextEl: '.today__button-prev',
            prevEl: '.today__button-next',
        },
    });

}

export default swiperController;