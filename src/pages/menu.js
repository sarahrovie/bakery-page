import './styles/menu.css';
import menuImg1 from '../assets/bolo.jpg';
import menuImg2 from '../assets/brigadeiro.jpg';
import menuImg3 from '../assets/pudim.jpg';
import menuImg4 from '../assets/bolo-no-pote.jpg';
import menuImg5 from '../assets/torta.jpg';
import menuImg6 from '../assets/biscoito.jpg';
import menuImg7 from '../assets/cone.jpg';

export function menu() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('content-div');

  const menuContent = `
  <p class='title'>Menu de Delícias</p>
  <div id='menu-grid'>
    <div class="menu-item">
        <img src='${menuImg1}' alt='Bolo de morango' class='menu-img'/>
        <p>Bolos Confeitados</p>
    </div>
    <div class="menu-item">
        <img src='${menuImg2}' alt='Brigadeiros' class='menu-img'>
        <p>Docinhos</p>
    </div>
    <div class="menu-item">
        <img src='${menuImg3}' alt='Pudim' class='menu-img'>
        <p>Pudim</p>
    </div>
    <div class="menu-item">
        <img src='${menuImg4}' alt='Bolo no pote' class='menu-img'>
        <p>Bolo no Pote</p>
    </div>
    <div class="menu-item">
        <img src='${menuImg5}' alt='Torta' class='menu-img'>
        <p>Tortas</p>
    </div>
    <div class="menu-item">
        <img src='${menuImg6}' alt='Biscoitos' class='menu-img'>
        <p>Biscoitos Caseiros</p>
    </div>
    <div class="menu-item">
        <img src='${menuImg7}' alt='Cones' class='menu-img'>
        <p>Cones Recheados</p>
    </div>
  </div>
  `;

  menuDiv.innerHTML += menuContent;

  return menuDiv;
}
