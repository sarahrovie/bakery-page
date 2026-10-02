export function home() {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('content-div');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'Seja bem vindo!';

  const p = document.createElement('p');
  p.textContent += `
  Delícias de Mãe é o lugar perfeito para saciar a sua vontade e a sua saudade por doces e guloseimas feitos com muito amor, cuidado e carinho.
  Navegue pelo nosso site, encontre a sua delícia preferida, entre em contato conosco e faça sua encomenda!`;

  homeDiv.append(title, p);

  return homeDiv;
}
