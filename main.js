<<<<<<< HEAD
// Adiciona .active no link que corresponde ao filename atual
(function(){
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a => {
        const href = a.getAttribute('href');
        if(href === current) a.classList.add('active');
    });
})();

// Código para a funcionalidade de clique do FAQ
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const parent = item.parentNode;
        parent.classList.toggle('active');
    });
});
=======
// adiciona .active no link que corresponde ao filename atual
(function(){
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === current) a.classList.add('active');
  });
})();
>>>>>>> b631d469e078d267a8bd20462d02fffc9f6a4d36
