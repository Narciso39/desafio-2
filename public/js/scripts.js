const buttonClose = document.querySelector(".closeBtn");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

// função para remover a mensagem de promoção
buttonClose.addEventListener("click", () => {
  document.getElementById("promoHeader").remove();
});
//função para adicionar e remover a lista no menu hamburger
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
