import pets from '../storage';

document.getElementById('slider__leftArrow');
document.getElementById('slider__rightArrow');

const slider = {
  amountOfVisibleSlides: 1,
  allSlides: [...pets],
  visibleSlides: [],
  rootId: '',
  popUpId: '',

  getAllSlides() {
    this.allSlides = pets;
  },

  setAmountOfVisibleSlides(newAmount) {
    this.amountOfVisibleSlides = newAmount;
  },

  setPopUpId(popUpId) {
    this.popUpId = popUpId;
  },

  createNewVisibleSlides() {
    const visibleNames = this.visibleSlides.map((el) => el.name);

    const difference = this.allSlides.filter(({ name }) => !visibleNames.includes(name));

    difference.sort(() => Math.random() - 0.5);
    difference.sort(() => Math.random() - 0.5);
    difference.sort(() => Math.random() - 0.5);

    this.visibleSlides = difference.slice(0, this.amountOfVisibleSlides);
  },

  renderVisibleSlides(rootId = this.rootId) {
    this.rootId = rootId;

    const root = document.getElementById(this.rootId);

    const stringifySlides = this.visibleSlides.map(
      (slide) => `
      <div class="slider-card">
        <img class="slider-card__image" alt="img"></img>
        <p class="slider-card__name">${slide.name}</p>
        <div class="slider-card__button"
          data-name="${slide.name}"
          data-img="${slide.img}"
          data-type="${slide.type}"
          data-breed="${slide.breed}"
          data-description="${slide.description}"
          data-age="${slide.age}"
          data-inoculations="${slide.inoculations}"
          data-diseases="${slide.diseases}"
          data-parasites="${slide.parasites}"
        >
            подробнее
        </div>
      </div>
      `,
    );

    root.innerHTML = stringifySlides.join(' ');
  },

  launchArrowsListener(leftArrowId, rightArowId) {
    const leftArrow = document.getElementById(leftArrowId);
    const rightArrow = document.getElementById(rightArowId);

    leftArrow.addEventListener('click', () => {
      this.createNewVisibleSlides();
      this.renderVisibleSlides();
    });

    rightArrow.addEventListener('click', () => {
      this.createNewVisibleSlides();
      this.renderVisibleSlides();
    });
  },

  launchPopUpListener() {
    const root = document.getElementById(this.rootId);
    root.addEventListener('click', ({ target }) => {
      if ([...target.classList].includes('slider-card__button')) {
        this.popUpSlideEnable(target.dataset);
      }
      // console.log((target.dataset));
    });
  },

  popUpSlideDisable() {
    alert('popUpDisable');
    const popUpWindow = document.getElementById(this.popUpId);
    popUpWindow.classList.add('pop-up-window_hidden');
  },

  popUpSlideEnable(dataset) {
    const popUpWindow = document.getElementById(this.popUpId);
    popUpWindow.classList.add('pop-up-window');
    popUpWindow.classList.remove('pop-up-window_hidden');
    popUpWindow.innerHTML = `
      hihi
      </br>
      ${dataset.name}
      </br>
    `;
    // alert('popUpEnable');
  },

  closePopUp() {},
};

export default slider;
