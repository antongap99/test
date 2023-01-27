export const sliderController = () => {
    const cards = document.querySelectorAll('.sale__card');
    const cardsWrapper = document.querySelector('.sale__cards');
    const slider = document.querySelector('.sale__slider');
    const buttonPrev = document.querySelector('.sale__button-prev')
    const buttonNext = document.querySelector('.sale__button-next')
    let count = 0;
    const html = document.documentElement;

    const CardHedden = (cards, num) => {
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('sale__card_hidden')
        }
        for (let i = num; i < cards.length; i++) {
            cards[i].classList.add('sale__card_hidden')
        }
    }

    const resize = () => {
        if (html.clientWidth > 1106) {
            CardHedden(cards, 4)
        }
        if (html.clientWidth <= 1106 && html.clientWidth > 830) {
            CardHedden(cards, 3)
        }
        if (html.clientWidth <= 830 && html.clientWidth > 560) {
            CardHedden(cards, 2)
        }
        if (html.clientWidth <= 560) {
            CardHedden(cards, 1)
        }
    }



buttonNext.addEventListener('click', () => {
    if (document.documentElement.clientWidth <= 560) {
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('sale__card_hidden')) {
                if (cards[i + 1] && cards[i + 1].classList.contains('sale__card_hidden')) {
                    cards[i].classList.add('sale__card_hidden');
                    cards[i + 1].classList.remove('sale__card_hidden');
                    break
                }
            }
        }
    }
    if (document.documentElement.clientWidth > 560 && document.documentElement.clientWidth <= 830) {
        let outFromQ = false
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('sale__card_hidden')) {
                if (!outFromQ && cards[i + 2]) {
                    cards[i].classList.add('sale__card_hidden');
                    outFromQ = true;
                }

                if (cards[i + 1] && cards[i + 1].classList.contains('sale__card_hidden')) {
                    cards[i + 1].classList.remove('sale__card_hidden');
                    break
                }
            }
        }
    }
    if (document.documentElement.clientWidth > 830 && document.documentElement.clientWidth <= 1106) {
        let outFromQ = false
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('sale__card_hidden')) {
                if (!outFromQ && cards[i + 3]) {
                    cards[i].classList.add('sale__card_hidden');
                    outFromQ = true;
                }

                if (cards[i + 1] && cards[i + 1].classList.contains('sale__card_hidden')) {
                    cards[i + 1].classList.remove('sale__card_hidden');
                    break
                }

            }
        }
    }
    if (document.documentElement.clientWidth > 1106) {
        let outFromQ = false
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('sale__card_hidden')) {
                if (!outFromQ && cards[i + 4]) {
                    cards[i].classList.add('sale__card_hidden');
                    outFromQ = true;
                }

                if (cards[i + 1] && cards[i + 1].classList.contains('sale__card_hidden')) {
                    cards[i + 1].classList.remove('sale__card_hidden');
                    break
                }

            }
        }
    }
})

buttonPrev.addEventListener('click', () => {
    if (document.documentElement.clientWidth <= 560) {
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('sale__card_hidden')) {
                if (cards[i - 1] && cards[i - 1].classList.contains('sale__card_hidden')) {
                    cards[i].classList.add('sale__card_hidden');
                    cards[i - 1].classList.remove('sale__card_hidden');
                    break
                }
            }
        }
    }
    if (document.documentElement.clientWidth > 560 && document.documentElement.clientWidth <= 830) {
        let outFromQ = false
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('sale__card_hidden')) {
                if (cards[i - 1]) {
                    if (cards[i - 1].classList.contains('sale__card_hidden')) {
                        cards[i - 1].classList.remove('sale__card_hidden');
                        continue;
                    }

                    if (!cards[i + 1] || cards[i + 1].classList.contains('sale__card_hidden')) {
                        cards[i].classList.add('sale__card_hidden');
                        break
                    }
                } else {
                    break
                }
            }
        }
    }
    if (document.documentElement.clientWidth > 830 && document.documentElement.clientWidth <= 1106) {
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('sale__card_hidden')) {
                if (cards[i - 1]) {
                    if (cards[i - 1].classList.contains('sale__card_hidden')) {
                        cards[i - 1].classList.remove('sale__card_hidden');
                        continue;
                    }

                    if (!cards[i + 1] || cards[i + 1].classList.contains('sale__card_hidden')) {
                        cards[i].classList.add('sale__card_hidden');
                        break
                    }
                } else {
                    break
                }

            }
        }
    }
    if (document.documentElement.clientWidth > 1106) {
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('sale__card_hidden')) {
                if (cards[i - 1]) {
                    if (cards[i - 1].classList.contains('sale__card_hidden')) {
                        cards[i - 1].classList.remove('sale__card_hidden');
                    }
                    if (!cards[i + 1] || cards[i + 1].classList.contains('sale__card_hidden')) {
                        cards[i].classList.add('sale__card_hidden');
                        break
                    }
                }else {
                    break;
                }
            }
        }
    }
})


window.addEventListener('resize', () => {
    resize()
})
resize();

}