import { selectControl } from './modules/selectControl.js'
import { saleControl } from './modules/saleControl.js'
import swiperController from './api/swiperController.js';
import {sliderController} from './api/slider.js';

const init = () => {
    // swiperController();
    sliderController();
    selectControl();
    saleControl();
}


document.addEventListener('DOMContentLoaded', init);