const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let slideIndex = 0;
const slides = carouselContainer.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

function goToPrevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

function goToNextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);

// Función para rotar automáticamente el carrusel cada 5 segundos
function autoRotateCarousel() {
  goToNextSlide();
}

// Iniciar la rotación automática del carrusel cada 5 segundos
setInterval(autoRotateCarousel, 5000);
