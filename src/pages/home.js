import './styles/home.css';
import homeImg from '../assets/home-img1.jpg';
import homeImg2 from '../assets/home-img2.jpg';
import homeImg3 from '../assets/home-img3.jpg';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('content-div');

  const homeContent = `
  <div id="home-content">
    <div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src='${homeImg}' class="home-img d-block w-100" alt="Imagem 1">
        </div>
        <div class="carousel-item">
          <img src='${homeImg2}' class="home-img d-block w-100" alt="Imagem 2">
        </div>
        <div class="carousel-item">
          <img src='${homeImg3}' class="home-img d-block w-100" alt="Imagem 3">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div>
      <p class='title'>Seja bem vindo!</p>
      <p>Delícias de Mãe é o lugar perfeito para saciar a sua vontade (e a sua saudade) por doces e guloseimas feitas com muito amor, cuidado e carinho.</p>
      <p>Navegue pelo nosso site, encontre a sua delícia preferida, entre em contato conosco e faça sua encomenda!</p>
    </div>
  </div>
  `;

  homeDiv.innerHTML += homeContent;

  return homeDiv;
};
