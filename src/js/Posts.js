export default class Posts {
  constructor(container) {
    this.container = container;
    this.tickets = [];
  }

  init() {
    this.bindToDom();
  }

  bindToDom() {
    const div = document.createElement('div');
    div.classList.add('container');
    div.innerHTML = Posts.markup;
    this.container.append(div);
  }

  static get markup() {
    return `
    <div class="messages__container"></div>
    <form class='form'>
    <input class="input">
    <button type='submit' class='btn'>Отправить</button>
    </form>
    `;
  }
}
