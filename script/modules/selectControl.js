
export const castomSelect = ({
    forms,
    selectTitle,
    menu,
    title,
}) => {
    if (forms) {
        // Toggle menu
        forms.addEventListener('click', e => {
            if (e.target.closest('.select__form')) {
                const elem = e.target.closest('.select__form')

                const naiba = elem.nextElementSibling || elem.previousElementSibling;
                const naibaDropdown = naiba.children[0].querySelector('.sale__dropdown');
                if(naibaDropdown.classList.contains('dropdown_active')){
                    naibaDropdown.classList.remove('dropdown_active');
                }

            }
        })
    }


    selectTitle.addEventListener('click', (e) => {
        menu.classList.toggle('dropdown_active');
        selectTitle.classList.toggle('select__title_active');
    });


    // Close when click to option
    menu.addEventListener('click', (e) => {
        const checkedicons = Array.from(menu.querySelectorAll('.checked'))
        const target = e.target
        if (target.closest('.select__label')) {
            title.textContent = target.textContent;
            for (let i = 0; i < checkedicons.length; i++) {
                checkedicons[i].classList.remove('checked_active');
            }
            target.closest('.select__label').children[1].classList.add('checked_active')
            menu.classList.toggle('dropdown_active');
            selectTitle.classList.toggle('select__title_active');
        }
    })
}


export const selectControl = () => {
    const selectSingle = document.querySelector('.select');
    const selectTitle = selectSingle.querySelector('.select__title');
    const menu = selectSingle.querySelector('.header__dropdown');
    const title = selectTitle.querySelector('.title__text')
    const formMetal = document.querySelectorAll('.sale__select_metal');
    const formSize = document.querySelectorAll('.sale__select_size')

    castomSelect({
        selectTitle,
        menu,
        title,
    });



    const castomSelects = (form) => {
        for (let i = 0; i < form.length; i++) {
            const formElem = {
                forms: form[i].parentElement,
                selectTitle: form[i].querySelector('.select__title'),
                menu: form[i].querySelector('.sale__dropdown'),
                title: form[i].querySelector('.title__text'),
            }
            castomSelect({ ...formElem });
        }
    }
    castomSelects(formMetal);
    castomSelects(formSize);


}