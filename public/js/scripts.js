const buttonClose = document.querySelector(".closeBtn");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const img = document.querySelectorAll(".productImg");
const imgN = 9;
// função para remover a mensagem de promoção
buttonClose.addEventListener("click", () => {
  document.getElementById("promoHeader").remove();
});
//função para adicionar e remover a lista no menu hamburger
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// carrossel

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
let index = 0;

function showSlide(n) {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    if (n >= totalSlides) { 
        index = 0;
        } else if (n < 0)  {
          index = totalSlides - 1;
        } else {
          index = n;
        }
    carouselWrapper.style.transform = `translateX(${-index * 100}%)`;
}

nextButton.addEventListener('click', () => {
  showSlide(index + 1);
});
prevButton.addEventListener('click', () => {
  showSlide(index - 1);
});

showSlide(index); 