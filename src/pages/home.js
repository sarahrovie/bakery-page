export function home() {
  const homeContent = document.createElement('div');
  homeContent.classList.add('content-div');

  const h1 = document.createElement('h1');
  h1.textContent = 'Bem vindo!';
  homeContent.appendChild(h1);

  return homeContent;
}
