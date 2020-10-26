// const mainPageSections = ['.start-content'];
// const petsPageSections = [];
// const allSections = [
//   '.start', // hard
//   '.pets-list-block', // pets
//   '.about', // main
//   '.our-friends', // main
//   '.help', // main
//   '.in-additional', // main
//   '.footer', // common
// ];
const allSections = document.body.querySelectorAll('section');

const toPetsPage = () => {
  allSections.forEach((sect) => {
    if (sect.classList.contains('start')) {
      sect.classList.add('hidden');

      document.querySelector('.logo__heading').style.color = 'black';
      document.querySelector('.logo__subtitle').style.color = 'black';
      document
        .querySelectorAll('.navigation__link')
        .forEach((link) => link.style.color = 'black');
    }

    if (
      sect.classList.contains('about')
      || sect.classList.contains('our-friends')
      || sect.classList.contains('help')
      || sect.classList.contains('in-additional')
    ) {
      sect.classList.add('hidden');
    }

    if (sect.classList.contains('pets')) {
      sect.classList.remove('hidden');
    }
  });
};

const toMainPage = () => {
  allSections.forEach((sect) => {
    if (sect.classList.contains('start')) {
      sect.classList.remove('hidden');

      document.querySelector('.logo__heading').style.color = '#F1CDB3';
      document.querySelector('.logo__subtitle').style.color = '#CDCDCD';
      document
        .querySelectorAll('.navigation__link')
        .forEach((link) => link.style.color = '#CDCDCD');
    }

    if (
      sect.classList.contains('about')
      || sect.classList.contains('our-friends')
      || sect.classList.contains('help')
      || sect.classList.contains('in-additional')
    ) {
      sect.classList.remove('hidden');
    }

    if (sect.classList.contains('pets')) {
      sect.classList.add('hidden');
    }
  });
};

export { toPetsPage, toMainPage };
