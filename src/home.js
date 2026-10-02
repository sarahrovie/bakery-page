export function home() {
  const homeContent = document.createElement('div');
  homeContent.classList.add('content-div');

  const p = document.createElement('p');
  p.textContent = 'Hi!';

  homeContent.appendChild(p);

  return homeContent;
}
