import Messages from './Messages';

export default class Posts {
  constructor(container) {
    this.container = container;
    this.tickets = [];
    this.coords = [];
    if (navigator.geolocation) {
      let lat, long;
       navigator.geolocation.getCurrentPosition(
          function (data) {
        const { latitude, longitude } = data.coords;
        lat = latitude;
        long = longitude;
      })
    }

   
    this.onSubmit = this.onSubmit.bind(this);
  }

  init() {

    this.bindToDom();
    const form = this.container.querySelector('.form');
    form.addEventListener('submit', this.onSubmit);
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

  onSubmit(e) {
    e.preventDefault();
    const input = document.querySelector('.input');
    if (input.value) {
      this.tickets.push(new Messages(input.value));
      input.value = '';
      console.log(this.tickets);
    }
  }
}
