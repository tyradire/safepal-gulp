document.addEventListener('DOMContentLoaded', () => {

  const blocks = document.querySelectorAll('.animate');
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');

  const scrollImations = (entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting && entry.intersectionRatio >= 0.01) entry.target.classList.add('visible');
    });
  }
  const options = {
    threshold: 0.01,
  };
  const blockObserver = new IntersectionObserver(scrollImations, options);
  blocks.forEach((block) => {
    blockObserver.observe(block);
  });

  window.addEventListener('scroll', () => {
    let heroCenter = hero.offsetHeight / 10;
    (window.scrollY >= heroCenter) 
    ? header.classList.add('header__on-scroll')
    : header.classList.remove('header__on-scroll');
  });
})

