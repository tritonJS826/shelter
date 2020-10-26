import './scss/index.scss';
import petsDescrition from './storage';
import { toPetsPage, toMainPage } from './scripts/togglePage';
import slider from './scripts/slider';

slider.setAmountOfVisibleSlides(3); // add Eventlistener on windowSize
slider.createNewVisibleSlides();
slider.renderVisibleSlides('slider__main');
slider.setPopUpId('slider__pop-up');
slider.setBlackoutId('pop-up-window__blackout');
slider.setClosePopUpBtnId('pop-up-window__close');
slider.launchArrowsListener('slider__arrow_left', 'slider__arrow_right');
slider.launchPopUpListener('slider__main');

const ourPetsLink = document.getElementById('our-pets-link');
const mainLink = document.getElementById('main-link');
const makeAFriend = document.getElementById('makeAFriend');
const getToKnowTheRest = document.getElementById('getToKnowTheRest');
const logo = document.getElementById('logo');

ourPetsLink.addEventListener('click', toPetsPage);
makeAFriend.addEventListener('click', toPetsPage);
getToKnowTheRest.addEventListener('click', toPetsPage);

mainLink.addEventListener('click', toMainPage);
logo.addEventListener('click', toMainPage);

const PETS_LIST = document.getElementById('pets-list-block__content');

petsDescrition.forEach((elem) => {
  PETS_LIST.insertAdjacentHTML(
    'afterbegin',
    `
   <div class="pet-card">
     <div><img src='${elem.img}' alt="pet"  class="pet-card__img"></div>
    <p class="pet-card__name">${elem.name}</p>
     <button class="button pet-card__button">Learn more</button>
   </div>
 `,
  );
});
