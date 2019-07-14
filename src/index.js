import './styles/main.scss';

const container = document.querySelector('.container');
const hamburgerMenu = document.querySelector('.menu');
const hamburgerMenuClick = function(event) {
  event.preventDefault();
  container.classList.toggle('open-cart');
};

hamburgerMenu.addEventListener('click', hamburgerMenuClick);