import pets from '../storage';

document.getElementById('slider__leftArrow');
document.getElementById('slider__rightArrow');

const slider = {
  amountOfVisibleSlides: 1,
  allSlides: [...pets],
  visibleSlides: [],
  rootId: '',
  popUpId: '',
  closePopUpBtnId: '',
  blackOutId: '',

  getAllSlides() {
    this.allSlides = pets;
  },

  setClosePopUpBtnId(closePopUpBtnId) {
    this.closePopUpBtnId = closePopUpBtnId;
  },

  setAmountOfVisibleSlides(newAmount) {
    this.amountOfVisibleSlides = newAmount;
  },

  setPopUpId(popUpId) {
    this.popUpId = popUpId;
  },

  setBlackoutId(blackOutId) {
    this.blackOutId = blackOutId;
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

    console.log('!!!!!!!', leftArrow);
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
    });
  },

  popUpSlideDisable() {
    const popUpWindow = document.getElementById(this.popUpId);
    const blackOut = document.getElementById(this.blackOutId);

    popUpWindow.classList.add('pop-up-window_hidden');
    blackOut.classList.add('pop-up-window__blackout_hidden');

    document.removeEventListener('click', ({ target }) => {
      if (target.id === this.closePopUpBtnId || target.id === this.blackOutId) {
        this.popUpSlideDisable();
      }
    });
  },

  popUpSlideEnable(dataset) {
    const popUpWindow = document.getElementById(this.popUpId);
    const blackOut = document.getElementById(this.blackOutId);

    popUpWindow.classList.add('pop-up-window');
    popUpWindow.classList.remove('pop-up-window_hidden');
    blackOut.classList.remove('pop-up-window__blackout_hidden');

    popUpWindow.innerHTML = `
      <img src="${dataset.img}" alt="image" class="pop-up-window__image"/>
      <div>
        <h3>
          ${dataset.name}
        </h3>
        <h4>
          ${dataset.type} -- ${dataset.breed}
        </h4>
        <p class="text">
          ${dataset.description}
        </p>
        <p class="text">
          <span class="text_bold">Age:</span> ${dataset.age}
        </p>
        <p class="text">
          <span class="text_bold">Inoculations:</span> ${dataset.inoculations}
        </p>
        <p class="text">
          <span class="text_bold">Diseases:</span> ${dataset.diseases}
        </p>
        <p class="text">
          <span class="text_bold">Parasites:</span> ${dataset.parasites}
        </p>
      </div>

      <button class="pop-up-window__close" id="${this.closePopUpBtnId}">X</button>
    `;

    document.body.addEventListener('click', ({ target }) => {
      if (target.id === this.closePopUpBtnId || target.id === this.blackOutId) {
        this.popUpSlideDisable();
      }
    });
  },
};

export default slider;
