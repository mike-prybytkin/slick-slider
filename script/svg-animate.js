const svgImgPath = document.querySelector('#svg-img path');
// svgImgPath.style.strokeDasharray = '10 10';
// svgImgPath.style.strokeDashoffset = '50';

// const pathLength = svgImgPath.getTotalLength();
// console.log('Длина пути:', pathLength);
// svgImgPath.style.strokeDasharray = 10;

// window.addEventListener('scroll', () => {
  //   svgImgPath.style.strokeDashoffset = `${scrollSvg}`;
  // })
  
  let scrollSvg = 0;
  
  window.addEventListener('scroll', handleScroll);
  
  function handleScroll() {
  scrollSvg += 1;
  const svg = document.getElementById('svg-img');
  const dashedLine = svg.querySelector('path');

  const scrollPosition = window.scrollY;
  const svgHeight = svg.getBoundingClientRect().height;
  const windowHeight = window.innerHeight;
  const maxDashedLength = svgHeight + windowHeight; // Максимальная длина штриховой линии
  console.log(maxDashedLength)

  const dashedLength = Math.min(scrollPosition, maxDashedLength);
  dashedLine.setAttribute('stroke-dasharray', `${scrollSvg}% ${100}%`);
}
