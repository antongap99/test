import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const swiperController = () => {
    new Swiper('.sale__swiper', {
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },

        breakpoints: {
            490: {
                slidesPerView: 1,
            },
            // when window width is >= 320px
            720: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            900: {
                slidesPerView: 3,
            },
            // when window width is >= 640px
            1300: {
                slidesPerView: 4,
            }

        }
    })

    new Swiper('.hero__sliper', {
        // loop: true,
        navigation: {
            nextEl: '.hero__button-prev',
            prevEl: '.hero__button-next',
        },
        breakpoints: {

        }
    });

    new Swiper('.today__items', {
        // loop: true,
        navigation: {
            nextEl: '.today__button-prev',
            prevEl: '.today__button-next',
        },
        breakpoints: {

        }
    });

}

export default swiperController;