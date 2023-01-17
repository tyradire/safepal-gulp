document.addEventListener('DOMContentLoaded', () => {

  const blocks = document.querySelectorAll('.animate');

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
})

