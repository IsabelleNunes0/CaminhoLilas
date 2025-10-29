// ============================
// main.js — Script principal
// ============================

// === 1. Destacar link ativo na navegação ===
(function () {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current) a.classList.add('active');
  });
})();

// === 2. FAQ - abrir/fechar respostas ===
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    parent.classList.toggle('active');
  });
});

// === 3. Menu hambúrguer para mobile ===
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});

// === 4. Botão SOS com animação ao clicar ===
const sosButton = document.querySelector('.sos-button');
if (sosButton) {
  sosButton.addEventListener('mousedown', () => sosButton.style.transform = 'scale(0.9)');
  sosButton.addEventListener('mouseup', () => sosButton.style.transform = 'scale(1)');
}
