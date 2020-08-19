const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let theme = '';
const checkboxThemeRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

initTheme();
checkboxThemeRef.addEventListener('click', chengaTheme);

function initTheme() {
  if (localStorage.getItem('theme') === null) {
    theme = Theme.LIGHT;
    localStorage.setItem('theme', theme);
  } else {
    theme = localStorage.getItem('theme');
  }
  checkboxThemeRef.checked = theme === Theme.LIGHT ? false : true;
  bodyRef.classList.add(theme);
}

function chengaTheme() {
  let oldTheme = localStorage.getItem('theme');
  if (theme === Theme.LIGHT) {
    theme = Theme.DARK;
    localStorage.setItem('theme', theme);
    bodyRef.classList.replace(oldTheme, theme);
    checkboxThemeRef.checked = true;
  } else {
    theme = Theme.LIGHT;
    localStorage.setItem('theme', theme);
    bodyRef.classList.replace(oldTheme, theme);
    checkboxThemeRef.checked = false;
  }
}
