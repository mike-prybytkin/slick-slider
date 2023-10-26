const parallaxDesktop = (e) => {
  const layers = document.querySelectorAll('.layer');
  layers.forEach((layer) => {
    let speed = layer.getAttribute('data-speed');
    layer.style.transform = `translate(${e.clientX/speed}px, ${e.clientY/speed}px)`;
  });
};

const parallaxMobile = (e) => {
  let touch = e.touches[0];
  let touchX = touch.clientX;
  let touchY = touch.clientY;
  const layers = document.querySelectorAll('.layer');
  layers.forEach((layer) => {
    let speed = layer.getAttribute('data-speed');
    layer.style.transform = `translate(${touchX/speed}px, ${touchY/speed}px)`;
  });
};

document.querySelector('.scene').addEventListener('mousemove', parallaxDesktop);

document.querySelector('.scene').addEventListener('touchmove', parallaxMobile);

