// Colori disponibili per la palette
const ACCENTS = {
  blue:   { main: '#3a8fc7', light: '#6fb7e8' },
  yellow: { main: '#c79a1e', light: '#e8c34a' },
  red:    { main: '#c73a3a', light: '#e86f6f' },
  green:  { main: '#2e9e2e', light: '#6fc76f' },
  grey:   { main: '#6a6a6a', light: '#9a9a9a' },
  purple: { main: '#7a3ac7', light: '#a76fe8' }
};

function applyTheme() {
  const theme = localStorage.getItem('site-theme') || 'light';
  const accent = localStorage.getItem('site-accent') || 'blue';
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-accent', accent);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('site-theme', next);
  document.documentElement.setAttribute('data-theme', next);
}

function setAccent(color) {
  localStorage.setItem('site-accent', color);
  document.documentElement.setAttribute('data-accent', color);
}

applyTheme();
