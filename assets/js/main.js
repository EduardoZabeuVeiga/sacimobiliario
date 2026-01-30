// Menu Hamburger
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Botão WhatsApp
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://wa.me/5527998395903?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Vertice%20Assessoria%20Imobiliária.', '_blank');
    });
}
// Validação simples do formulário de contato
const form = document.querySelector('.diagnostico-form');
if (form) {
    form.addEventListener('submit', function(e) {
        alert('Mensagem enviada! Em breve entraremos em contato.');
    });
}
