import logoImg from '../assets/logo-delicias-de-mae.png';

export function home() {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('content-div');

  const homeContent = `
  <p class='title'>Seja bem vindo!</p>
  <div id="home-content">
    <p>Delícias de Mãe é o lugar perfeito para saciar a sua vontade (e a sua saudade) por doces e guloseimas feitas com muito amor, cuidado e carinho.
    Navegue pelo nosso site, encontre a sua delícia preferida, entre em contato conosco e faça sua encomenda!</p>
    <img src='${logoImg}' alt='Logo Delícias de Mãe' id="logo-img"/>
  </div>
  `;

  homeDiv.innerHTML += homeContent;

  return homeDiv;
}
