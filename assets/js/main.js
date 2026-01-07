// Botão WhatsApp
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://wa.me/5573999999999?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20do%20SAC%20Imobiliário.', '_blank');
    });
}
// Validação simples do formulário de contato
const form = document.querySelector('.diagnostico-form');
if (form) {
    form.addEventListener('submit', function(e) {
        alert('Mensagem enviada! Em breve entraremos em contato.');
    });
}
