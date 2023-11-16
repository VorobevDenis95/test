/* eslint-disable no-unused-vars */
import Messages from './Messages';
import Modal from './Modal';
import { validateInput } from './utils';

export default class Posts {
  constructor(container) {
    this.container = container;
    this.tickets = [];
    this.modal = null;
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitGeolocation = this.onSubmitGeolocation.bind(this);
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
      if (navigator.geolocation) {
        this.getPosition().then((data) => {
          this.latitude = data.coords.latitude;
          this.longitude = data.coords.longitude;
          this.tickets.push(new Messages(input.value, this.latitude, this.longitude));
          input.value = '';
        }).catch((err) => {
          this.modal = new Modal();
          this.modal.openModal();
          const form = this.container.querySelector('.modal__form');
          form.addEventListener('submit', this.onSubmitGeolocation);
        });
      }
    }
  }

  onSubmitGeolocation(e) {
    e.preventDefault();
    const input = this.container.querySelector('.modal__input');
    input.setCustomValidity('');
    input.setCustomValidity('');
    if (input.value) {
      if (validateInput(input.value)) {
        const value = input.value.replace(/^\[?/, '').replace(/\]?$/, '');
        this.latitude = value.replace(/,\s?\W?[0-9].[0-9]+/g, '');
        this.longitude = value.replace(/^[0-9]{2}\.[0-9]+,\s?/g, '');
        this.modal.closeModal();
        const input2 = this.container.querySelector('.input');
        this.tickets.push(new Messages(input2.value, this.latitude, this.longitude));
        input2.value = '';
      }
      if (!validateInput(input.value)) {
        const form = document.querySelector('.modal__form');
        input.setCustomValidity('Неверный формат долготы и широты');
        form.reset();
        form.reportValidity();
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
}
