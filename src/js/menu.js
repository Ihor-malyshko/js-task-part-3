import menuItemsTemplate from '../templates/menu-items.hbs';
import tagListTemplate from '../templates/tag-list.hbs';
import itemsJSON from './menu.json';

createMenu();
// addTags();

function createMenu() {
  const items = menuItemsTemplate(itemsJSON);
  const menuRef = document.querySelector('.js-menu');
  menuRef.insertAdjacentHTML('beforeend', items);
}

function addTags() {
  const tagsRef = document.querySelectorAll('.tag-list');
  const ingredients = itemsJSON.map(el => el.ingredients);
  for (let i = 0; i < tagsRef.length; i++) {
    const ingredient = tagListTemplate(ingredients[i]);
    tagsRef[i].insertAdjacentHTML('beforeend', ingredient);
  }
}
