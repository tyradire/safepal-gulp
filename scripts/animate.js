document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const choose = document.querySelector('.choose');
  const partners = document.querySelector('.partners');

  const cryptoText = document.querySelector('.crypto__text-content');
  const cryptoInfo = document.querySelector('.crypto__info');
  const cryptoCoinsArr = document.querySelectorAll('.crypto__coins');

  const beyondTextContainer = document.querySelector('.beyond__main-container');
  const beyondComposition = document.querySelector('.beyond__main-composition');
  const beyondMain = document.querySelectorAll('.beyond__part_main');
  const beyondOther = document.querySelectorAll('.beyond__part_other');
  const beyondClouds = document.querySelectorAll('.beyond__part_cloud');
  const beyondFeatures = document.querySelector('.beyond__features');

  const standOutBenefits = document.querySelector('.stand-out__benefits');
  const standOutButtons = document.querySelector('.stand-out__buttons');
  const standOutEducation = document.querySelector('.stand-out__education');

  const trust = document.querySelector('.trust');

  const oneWalletTitle = document.querySelector('.one-wallet__title');

  let scroll = window.scrollY;
  let heroCenter = hero.offsetHeight / 10;
  let chooseBlock = choose.getBoundingClientRect().top - document.documentElement.clientHeight;
  let partnersBlock = partners.getBoundingClientRect().top - document.documentElement.clientHeight;
  let cryptoBlock = cryptoText.getBoundingClientRect().top - document.documentElement.clientHeight;
  let cryptoCoins = cryptoInfo.getBoundingClientRect().top - document.documentElement.clientHeight;
  let beyondBlock = beyondComposition.getBoundingClientRect().top - document.documentElement.clientHeight;
  let beyondItems = beyondFeatures.getBoundingClientRect().top - document.documentElement.clientHeight;
  let standOutBlock = standOutBenefits.getBoundingClientRect().top - document.documentElement.clientHeight;
  let standOutBottom = standOutButtons.getBoundingClientRect().top - document.documentElement.clientHeight;
  let standOutEducationBlock = standOutEducation.getBoundingClientRect().top - document.documentElement.clientHeight;
  let trustBlock = trust.getBoundingClientRect().top - document.documentElement.clientHeight;
  let oneWalletBlock = oneWalletTitle.getBoundingClientRect().top - document.documentElement.clientHeight;

  window.addEventListener('scroll', () => {
    (scroll >= heroCenter) 
      ? header.classList.add('header__on-scroll')
      : header.classList.remove('header__on-scroll');
    (chooseBlock < 0)
      ? choose.classList.add('float-top')
      : null;
    (partnersBlock < 0)
      ? partners.classList.add('scale-center')
      : null;
    (cryptoBlock < 0)
      ? cryptoText.classList.add('float-top')
      : null;
    if (cryptoCoins < 0) {
      cryptoCoinsArr.forEach(elem => elem.classList.add('float-bottom'));
    } else null;
    if (beyondBlock < 0) {
      beyondMain.forEach(elem => elem.classList.add('float-bottom-fast'));
      beyondOther.forEach(elem => elem.classList.add('float-bottom-medium'));
      beyondClouds.forEach(elem => elem.classList.add('float-bottom-slow'));
      beyondTextContainer.classList.add('perspective-text');
    }
    if (beyondItems < 0) {
      beyondFeatures.classList.add('float-top');
    } else null;
    if (standOutBlock < 0) {
      standOutBenefits.classList.add('float-top');
    }
    if (standOutBottom < 0) {
      standOutButtons.classList.add('float-top');
    }
    if (standOutEducationBlock < 0) {
      standOutEducation.classList.add('scale-center');
    }
    if (trustBlock < 0) {
      trust.classList.add('scale-center');
    }
    if (oneWalletBlock < 0) {
      oneWalletTitle.classList.add('float-bottom');
    }
  })
})