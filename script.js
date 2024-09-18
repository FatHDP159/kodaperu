// Funcionalidad del header sticky
window.onscroll = function() {
    stickyHeader();
};

var header = document.querySelector(".dynamic-header");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Funcionalidad de animación para el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactForm.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(contactForm);
});
    let currentPosition = 0;
    const cards = document.querySelector('.carousel');
    const cardWidth = 270; // Ancho de la tarjeta + margen (250px + 20px)
    const visibleCards = 4; // Cantidad de tarjetas visibles
    const totalCards = document.querySelectorAll('.card').length; // Número total de tarjetas

    // Duplicamos las tarjetas para hacer que el carrusel sea infinito
    const cloneCarousel = () => {
        const cardsClone = cards.innerHTML;
        cards.innerHTML += cardsClone;
    };

    // Movemos el carrusel en bucle
    function moveCarousel(direction) {
        currentPosition += direction * cardWidth;

        // Si desplazamos a la derecha y llegamos al final de las tarjetas originales
        if (currentPosition >= cardWidth * totalCards) {
            currentPosition = 0;
        }

        // Si desplazamos a la izquierda y llegamos al principio de las tarjetas
        if (currentPosition < 0) {
            currentPosition = cardWidth * (totalCards - visibleCards);
        }

        cards.style.transform = `translateX(-${currentPosition}px)`;
    }

    // Inicializamos el carrusel duplicando las tarjetas
    cloneCarousel();

  