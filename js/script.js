// ==========================================
// FUNCIONES DE NAVEGACIÓN
// ==========================================

// TOGGLE MENÚ HAMBURGUESA
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// TOGGLE DROPDOWN SERVICIOS
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
    
    const dropdownContacto = document.getElementById('dropdown-contacto');
    if (dropdownContacto) dropdownContacto.classList.remove('active');
}

// TOGGLE DROPDOWN CONTACTO
function toggleDropdownContacto() {
    const dropdown = document.getElementById('dropdown-contacto');
    dropdown.classList.toggle('active');
    
    const dropdownServicios = document.getElementById('dropdown');
    if (dropdownServicios) dropdownServicios.classList.remove('active');
    
}

// ==========================================
// FUNCIONES DE MODALES
// ==========================================

// ABRIR MODAL
function abrirModal(servicio) {
    const modal = document.getElementById('modal-' + servicio);
    modal.classList.add('active');
    
    const dropdown = document.getElementById('dropdown');
    if (dropdown) dropdown.classList.remove('active');
}

// CERRAR MODAL
function cerrarModal(servicio) {
    const modal = document.getElementById('modal-' + servicio);
    modal.classList.remove('active');
}

// CERRAR MODAL AL HACER CLIC FUERA
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});




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


