const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let theme = '';
const checkboxThemeRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

initTheme();
setTheme();
checkboxThemeRef.addEventListener('click', chengaTheme);

function initTheme() {
  if (localStorage.getItem('theme') === null) {
    theme = Theme.LIGHT;
    localStorage.setItem('theme', theme);
  }
}

function setTheme() {
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    theme = Theme.LIGHT;
    checkboxThemeRef.checked = false;
    bodyRef.classList.add(theme);
  } else {
    theme = Theme.DARK;
    checkboxThemeRef.checked = true;
    bodyRef.classList.add(theme);
  }
}

function chengaTheme() {
  let oldTheme = theme;
  if (theme === Theme.LIGHT) {
    theme = Theme.DARK;
    localStorage.setItem('theme', theme);
    bodyRef.classList.replace(oldTheme, theme);
  } else {
    theme = Theme.LIGHT;
    localStorage.setItem('theme', theme);
    bodyRef.classList.replace(oldTheme, theme);
  }
}
