const numeroWhatsApp = "5521999999999";

const botoesProduto = document.querySelectorAll(".btn-whatsapp-produto");

botoesProduto.forEach(function(botao) {

    botao.addEventListener("click", function(evento) {

        evento.preventDefault();

        const produto = botao.dataset.produto;

        const mensagem = `Olá! Gostaria de pedir ${produto}.`;

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

});

const botoesWhatsAppGeral = document.querySelectorAll(".btn-whatsapp-geral");

botoesWhatsAppGeral.forEach(function(botao) {

    botao.addEventListener("click", function(evento) {

        evento.preventDefault();

        const mensagem = "Olá! Gostaria de fazer um pedido na Massa & Brasa.";

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", function() {
    nav.classList.toggle("nav-aberta");

    if (nav.classList.contains("nav-aberta")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Fechar menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");
    }
});
const linksMenu = document.querySelectorAll(".nav a");

linksMenu.forEach(function(link) {
    link.addEventListener("click", function() {
        nav.classList.remove("nav-aberta");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});