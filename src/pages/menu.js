export function menu() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('content-div');

  const menuContent = `
  <p class='title'>Menu de Delícias</p>
  <div class="content-div" id='menu-grid'>
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
