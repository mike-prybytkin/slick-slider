const observerItems = document.querySelectorAll('.intersection-observer__item');

const callback = (entries, observer) => {
  entries.forEach(({ target, isIntersecting, intersectionRatio }) => {
    if (isIntersecting) {
      if (intersectionRatio >= 0.9) {
        target.classList.add('intersection-observer__item_move-x');
        observer.unobserve(target);
      }
    }
  });
};

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver(callback, options);
observerItems.forEach((item) => observer.observe(item));
