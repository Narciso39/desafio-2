const buttonClose = document.querySelector(".closeBtn");

// função para remover a mensagem de promoção
buttonClose.addEventListener("click", () => {
    document.getElementById("promoHeader").remove();
});