const botoesPedido = document.querySelectorAll(
    ".btn-whatsapp-produto, .btn-whatsapp-geral"
);

const modalDemo = document.querySelector("#modal-demo");
const botaoFecharModal = document.querySelector(".modal-demo-fechar");
const botaoEntendi = document.querySelector(".modal-demo-entendi");

botoesPedido.forEach(function(botao) {
    botao.addEventListener("click", function(evento) {
        evento.preventDefault();

        modalDemo.classList.add("ativo");
    });
});

botaoFecharModal.addEventListener("click", function() {
    modalDemo.classList.remove("ativo");
});

botaoEntendi.addEventListener("click", function() {
    modalDemo.classList.remove("ativo");
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