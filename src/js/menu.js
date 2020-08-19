import menuItemsTemplate from '../templates/menu-items.hbs';
import itemsJSON from './menu.json';

createMenu();

function createMenu() {
  const items = menuItemsTemplate(itemsJSON);
  const menuRef = document.querySelector('.js-menu');
  menuRef.insertAdjacentHTML('beforeend', items);
}
