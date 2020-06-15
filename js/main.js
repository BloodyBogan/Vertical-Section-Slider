{
  const previousButton = document.querySelector('.previous');
  const nextButton = document.querySelector('.next');

  const sliders = document.querySelectorAll('.slider section');

  let s = 0;

  window.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowRight') {
      nextSlide();
    } else if (e.code === 'ArrowLeft') {
      previousSlide();
    }
  });

  nextButton.addEventListener('click', () => {
    nextSlide();
  });

  previousButton.addEventListener('click', () => {
    previousSlide();
  });

  function nextSlide() {
    if (s !== sliders.length - 1) {
      sliders[s].style.transform = 'translateX(-100%)';
      sliders[++s].style.transform = 'translateX(0%)';
    }
  }

  function previousSlide() {
    if (s !== 0) {
      sliders[s].style.transform = 'translateX(100%)';
      sliders[--s].style.transform = 'translateX(0%)';
    }
  }
}
