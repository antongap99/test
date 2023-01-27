import { selectControl } from './modules/selectControl.js'
import { saleControl } from './modules/saleControl.js'
import {sliderController} from './api/slider.js';

const init = () => {
    sliderController();
    selectControl();
    saleControl();
}


document.addEventListener('DOMContentLoaded', init);