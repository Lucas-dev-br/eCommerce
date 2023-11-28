var currentIndex = 0;
var totalItems = document.querySelectorAll('.carousel-item').length;
var track = document.getElementById('carouselTrack');

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    var newTransformValue = -currentIndex * 100 + '%';
    track.style.transform = 'translateX(' + newTransformValue + ')';
}

// Você também pode adicionar funcionalidades de autoplay ou outras personalizações conforme necessário.
function startAutoplay() {
    intervalId = setInterval(nextSlide, 3000); // Troque 3000 por intervalo desejado em milissegundos (por exemplo, 5000 para 5 segundos)
}

// Função para parar o autoplay
function stopAutoplay() {
    clearInterval(intervalId);
}

// Adiciona listeners para pausar o autoplay quando o mouse passa sobre o carrossel
track.addEventListener('mouseenter', stopAutoplay);
track.addEventListener('mouseleave', startAutoplay);

// Inicia o autoplay
startAutoplay();