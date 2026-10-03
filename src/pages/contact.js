import './styles/contact.css';

export const contact = () => {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('content-div');
  contactDiv.setAttribute('id', 'contact-div');

  const contactContent = `
    <p class="title">Entre em contato conosco!</p>
    <form id="form-contact">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" placeholder="Nome" />
        <label for="telefone">Telefone</label>
        <input
          type="tel"
          class="form-control"
          id="telefone"
          placeholder="99 9999-9999" />
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="nome@exemplo.com" />
      </div>
      <div class="form-group">
        <label for="mensagem">Mensagem</label>
        <textarea
          class="form-control"
          id="mensagem"
          rows="3"
          placeholder="..."></textarea>
      </div>
    <button type="submit" class="btns">Enviar</button>
    </form>
  `;

  contactDiv.innerHTML += contactContent;

  return contactDiv;
};
