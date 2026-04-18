const fs = require('fs');

// Fix style.css
let styleCss = fs.readFileSync('online-shopping-system/assets/css/style.css', 'utf-8');

styleCss = styleCss.replace(
  'body { background: var(--white); }',
  'body { background: var(--bg); color: var(--text); transition: background 0.3s ease, color 0.3s ease; }'
);

// Add custom animation and dark mode classes
const customStyles = `
/* Custom Animations and Dark Mode adjustments */
.page-animation {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.theme-card {
  background: var(--card);
  border: 1px solid var(--border);
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.theme-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.product-hover-anim {
  transition: transform 0.4s ease;
}
.product-hover-anim:hover {
  transform: scale(1.05);
}

[data-theme="dark"] .theme-card {
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

[data-theme="dark"] .email-field {
  background: var(--bg-soft);
  color: var(--text);
  border-color: var(--border);
}

[data-theme="dark"] h2, [data-theme="dark"] h3, [data-theme="dark"] h4, [data-theme="dark"] p {
  color: var(--text) !important;
}

[data-theme="dark"] .banner-btn, [data-theme="dark"] .btn-newsletter {
  color: #fff !important;
}

[data-theme="dark"] .header-main, [data-theme="dark"] .header-top, [data-theme="dark"] footer, [data-theme="dark"] .mobile-bottom-navigation {
  background: var(--bg);
  border-color: var(--border);
}
[data-theme="dark"] .desktop-navigation-menu {
  background: var(--bg);
}
[data-theme="dark"] .dropdown-panel {
  background: var(--card);
  border-color: var(--border);
}
[data-theme="dark"] .action-btn {
  color: var(--text);
}
`;

if (!styleCss.includes('/* Custom Animations and Dark Mode adjustments */')) {
  styleCss += '\n' + customStyles;
}
fs.writeFileSync('online-shopping-system/assets/css/style.css', styleCss);


// Add JS for Theme Toggle
let scriptJs = fs.readFileSync('online-shopping-system/assets/js/script.js', 'utf-8');

const themeToggleJs = `
// Theme Toggle
const themeBtn = document.getElementById('theme-toggle-btn');
if (themeBtn) {
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeBtn.innerHTML = currentTheme === 'dark' ? '<ion-icon name="sunny-outline"></ion-icon>' : '<ion-icon name="moon-outline"></ion-icon>';

  themeBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      theme = 'light';
      themeBtn.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    } else {
      theme = 'dark';
      themeBtn.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
}
`;

if (!scriptJs.includes('// Theme Toggle')) {
  scriptJs += '\n' + themeToggleJs;
}
fs.writeFileSync('online-shopping-system/assets/js/script.js', scriptJs);

console.log('Styles and Scripts updated successfully.');
