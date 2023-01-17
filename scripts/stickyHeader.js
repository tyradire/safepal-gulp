const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  let heroCenter = hero.offsetHeight / 10;
  (window.scrollY >= heroCenter) 
  ? header.classList.add('header__on-scroll')
  : header.classList.remove('header__on-scroll');
});