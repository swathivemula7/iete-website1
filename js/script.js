let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;


valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 10;
    valueDisplay.textContent = startValue;
    if(startValue > endValue){
      valueDisplay.textContent = endValue;
    }
    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration);
});
