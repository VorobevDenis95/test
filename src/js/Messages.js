import formatDate from './utils';

export default class Messages {
  constructor(value) {
    this.value = value;
    this.date = formatDate(new Date());
    this.container = document.querySelector('.messages__container');

    this.bindToDom();
  }

  bindToDom() {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = this.markup;
    this.container.append(div);
  }

  get markup() {
    return `
      <span class='message__data'>${this.date}</span>
      <p class='message__body'>${this.value}</p>
      <span class='message__geolocation'></span>  
    `;
  }
}
