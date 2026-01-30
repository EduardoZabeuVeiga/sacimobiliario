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
