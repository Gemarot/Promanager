document.addEventListener('DOMContentLoaded', function() {
    // Obtener parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get('nombre');
    const correo = params.get('correo');

    // Mostrar detalles del cliente
    const detallesCliente = document.getElementById('detalles-cliente');
    if (nombre && correo) {
        detallesCliente.innerHTML = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Correo:</strong> ${correo}</p>
            <!-- Puedes agregar más detalles según sea necesario -->
        `;
    } else {
        detallesCliente.innerHTML = '<p>No se han proporcionado detalles del cliente.</p>';
    }
});

