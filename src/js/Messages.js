import formatDate from './utils';

export default class Messages {
  constructor(value, latitude, longitude) {
    this.value = value;
    this.latitude = latitude;
    this.longitude = longitude;
    this.date = formatDate(new Date());
    this.container = document.querySelector('.messages__container');

    this.bindToDom();
  }

  bindToDom() {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = this.markup;
    this.container.prepend(div);
  }

  get markup() {
    return `
      <span class='message__data'>${this.date}</span>
      <p class='message__body'>${this.value}</p>
      <span class='message__geolocation'>${this.latitude}, ${this.longitude}</span>  
    `;
  }
}
