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
// 1. Cambio de Color en la Cabecera al Hacer Scroll
document.addEventListener('scroll', function() {
    const header = document.querySelector('.dynamic-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. Mostrar y Ocultar Menú en Dispositivos Móviles
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

// 3. Deslizarse a Secciones Específicas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 4. Validación Básica del Formulario de Contacto
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos del formulario.');
        e.preventDefault();
    }
});

// 5. Efecto de Desvanecimiento para las Tarjetas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.opacity = 0.8;
    });

    card.addEventListener('mouseout', function() {
        this.style.opacity = 1;
    });
});

  
  
