function mostrarFormulario(event, servicio) {
    // ✅ Agregué 'event' como PRIMER parámetro
    
    const formularios = document.querySelectorAll('.formulario-dinamico');
    
    formularios.forEach(formulario => {
        formulario.classList.remove('active');
    });

    const botones = document.querySelectorAll('.servicio-btn');

    botones.forEach(boton => {
        boton.classList.remove('active');
    });

    const formularioActivo = document.getElementById(servicio);
    formularioActivo.classList.add('active');

    event.target.classList.add('active');
    // ✅ Ahora 'event' SÍ existe = FUNCIONA
}

