// ==========================================
// FUNCIONES DE NAVEGACIÓN
// ==========================================

// TOGGLE MENÚ HAMBURGUESA
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// CERRAR MENÚ AL HACER CLIC FUERA
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburguesa = document.querySelector('.hamburguesa');
    const nav = document.querySelector('nav');
    
    // Si el menú está abierto y el clic fue fuera del menú y hamburguesa
    if (menu.classList.contains('active')) {
        if (!nav.contains(event.target)) {
            menu.classList.remove('active');
        }
    }
});

// ==========================================
// SCROLL TO TOP
// ==========================================

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// MOSTRAR/OCULTAR BOTÓN SCROLL TO TOP
window.addEventListener('scroll', function() {
    const scrollTop = document.getElementById('scrollTop');
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

// ==========================================
// CERRAR MENÚ AL HACER SCROLL (MÓVIL)
// ==========================================

window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    if (window.innerWidth <= 768 && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

window.addEventListener('load', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});