export const sliderController = () => {
    const cards = document.querySelectorAll('.sale__card');
    const cardsWrapper = document.querySelector('.sale__cards');
    cardsWrapper.style.overflow = 'hidden';
    const slider = document.querySelector('.sale__slider');
    const buttonPrev = document.querySelector('.sale__button-prev')
    const buttonNext = document.querySelector('.sale__button-next')
    let count = 0;
    let initialWidth = 1300;


    const resize = () => {
        cardsWrapper.style.width = `${initialWidth++}px`
        console.log(document.documentElement.clientWidth);
        switch (document.documentElement.clientWidth) {
            case 940:
                initialWidth = 1100
                break;
            case 610:
                initialWidth = 1100
                break;
            case 380:
                initialWidth = 1000
                break;
            case 320:
                initialWidth = 980
                break;
            default:
                break;
        }

    }

    buttonNext.addEventListener('click', () => {

        if (slider.offsetWidth !== cardsWrapper.offsetWidth) {
            count++
            if (count > cards.length - 1) {
                count = cards.length - 1;
            }
            let width = `${cards[0].offsetWidth + 30}`
            cardsWrapper.style.transform = `translate(${-(count * width)}px)`
        }

    })
    buttonPrev.addEventListener('click', () => {
        count--
        if (count < 0) {
            count = 0;
        }
        let width = `${cards[0].offsetWidth + 40}`
        cardsWrapper.style.transform = `translate(${-(count * width)}px)`
    })

    window.addEventListener('resize', () => {
        requestAnimationFrame(resize)
    })
    resize();

}