import './styles/menu.css';
import menuImg1 from '../assets/bolo.jpg';

export function menu() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('content-div');
  menuDiv.setAttribute('id', 'menu-grid');

  const menuContent = `
  <p class='title'>Menu de Delícias</p>
  <div class="content-div" id='menu-grid'>
    <div class="menu-item">
        <img src='${menuImg1}' alt='Bolo de morango' class='menu-img'/>
        <p>Item</p>
    </div>
    <div class="menu-item">
        <img src='' alt=''>
        <p>Item</p>
    </div>
    <div class="menu-item">
        <img src='' alt=''>
        <p>Item</p>
    </div>
    <div class="menu-item">
        <img src='' alt=''>
        <p>Item</p>
    </div>
  </div>
  `;

  menuDiv.innerHTML += menuContent;

  return menuDiv;
}
