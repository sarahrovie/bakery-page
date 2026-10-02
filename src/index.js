import './styles.css';
import { home } from './pages/home.js';
import { menu } from './pages/menu.js';

let contentDiv = document.querySelector('#content');
document.addEventListener('DOMContentLoaded', () => {
  navigate(home());
});

const homeBtn = document.querySelector('#btn-home');
const menuBtn = document.querySelector('#btn-menu');
const contatoBtn = document.querySelector('#btn-contato');

function navigate(page) {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(page);
}

homeBtn.addEventListener('click', () => navigate(home()));
menuBtn.addEventListener('click', () => navigate(menu()));
