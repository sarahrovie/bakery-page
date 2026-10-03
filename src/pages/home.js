import './styles/home.css';
import homeImg from '../assets/home-img.jpg';

export function home() {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('content-div');

  const homeContent = `
  <p class='title'>Seja bem vindo!</p>
  <div id="home-content">
    <img src='${homeImg}' alt='Logo Delícias de Mãe' id="logo-img"/>
    <p>Delícias de Mãe é o lugar perfeito para saciar a sua vontade (e a sua saudade) por doces e guloseimas feitas com muito amor, cuidado e carinho.
    <br><br>
    Navegue pelo nosso site, encontre a sua delícia preferida, entre em contato conosco e faça sua encomenda!</p>
  </div>
  `;

  homeDiv.innerHTML += homeContent;

  return homeDiv;
}
