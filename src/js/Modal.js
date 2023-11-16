/* eslint-disable class-methods-use-this */
export default class Modal {
  constructor() {
    this.root = document.querySelector('#root');
  }

  openModal() {
    const div = document.createElement('div');
    div.classList.add('modal');
    div.innerHTML = this.markup;
    this.root.append(div);

    const cancel = document.querySelector('.close__modal');
    cancel.addEventListener('click', this.closeModal);
    this.showRequire();
  }

  closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.remove();
    }
  }

  showRequire() {
    const form = document.querySelector('.modal__form');
    const p = document.createElement('p');
    p.classList.add('modal__clue');
    p.textContent = `Заполните правильно ширину и долготу, через запятую. Пример:
    51.50851, -0.12572 (есть пробел)
    51.50851,-0.12572 (нет пробела)
    [51.50851, -0.12572] (есть квадратные скобки)`;
    form.append(p);
  }

  get markup() {
    return `
      <div class='modal__container'>
          <p class='modal__text-error'>
          Что-то пошло не так

          К сожалению, нам не удалось определить ваше местоположение,
          пожалуйста, дайте разрешение на использование геолокации,
           либо введите координаты вручную.

           Широта и долгота через запятую

          </p>
          <form class='modal__form' novalidity>
            <input class='modal__input' name='geolocation'
             type='text' required placeholder="Введите координаты
              в формате 00.00000, 00.00000" >
            <button class='close__modal' type='button'>Отмена</button>
            <button class='submit__modal' type='submit'>Ок</button>
          </form>
    `;
  }
}
