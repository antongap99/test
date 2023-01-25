import { selectControl } from './modules/selectControl.js'
import { saleControl } from './modules/saleControl.js'
import swiperController from './api/swiperController.js';

const init = () => {
    swiperController();
    selectControl();
    saleControl();
}


document.addEventListener('DOMContentLoaded', init);