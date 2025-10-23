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

// === 2. Funcionalidade de abrir/fechar respostas no FAQ ===
// (Funciona apenas se a página tiver elementos com .faq-question)
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    parent.classList.toggle('active');
  });
});

// === 3. Menu hambúrguer para mobile ===
document.querySelectorAll('.menu-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
  });
});

// === 4. Botão SOS (animação ao clicar, opcional) ===
const sosButton = document.querySelector('button[onclick*="bolo-simples"]');
if (sosButton) {
  sosButton.addEventListener('mousedown', () => sosButton.style.transform = 'scale(0.9)');
  sosButton.addEventListener('mouseup', () => sosButton.style.transform = 'scale(1)');
}
