window.addEventListener("DOMContentLoaded", () => {
  
  const stars = document.querySelector(".stars");


  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1; 
    const maxSize = 2; 
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };

  
  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});

const mouse = document.querySelector(".mouseStalker")
console.log(mouse);

document.addEventListener('mousemove',function (event) {
    mouse.style.transform = 'translate('+ event.clientX+'px,'+ event.clientY +'px)'
})