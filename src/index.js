import './scss/index.scss';

// import burger from './scripts/burger';
// import pagination from './scripts/pagination';
// import popUp from './scripts/popUp';
import slider from './scripts/slider';

slider.setAmountOfVisibleSlides(3); // add Eventlistener on windowSize
slider.createNewVisibleSlides();
slider.renderVisibleSlides('slider__main');
slider.setPopUpId('slider__pop-up');
slider.launchArrowsListener('slider__arrow_left', 'slider__arrow_right');
slider.launchPopUpListener('slider__main');
