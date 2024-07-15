// Obtener elementos del DOM
const formClientes = document.getElementById('form-clientes');
const listaClientes = document.getElementById('lista-clientes');
const formCitas = document.getElementById('form-citas');
const listaCitas = document.getElementById('lista-citas');
const inputNombre = document.getElementById('nombre');
const inputCorreo = document.getElementById('correo');
const inputFecha = document.getElementById('fecha');
const inputHora = document.getElementById('hora');
const selectCliente = document.getElementById('cliente');

// Array para almacenar clientes y citas (simulación)
let clientes = [];
let citas = [];

// Función para agregar un cliente
function agregarCliente(nombre, correo) {
    clientes.push({ nombre, correo });
    actualizarListaClientes();
}

// Función para actualizar la lista de clientes en el DOM
function actualizarListaClientes() {
    listaClientes.innerHTML = '';
    selectCliente.innerHTML = '<option value="">Seleccione un cliente</option>';
    clientes.forEach(cliente => {
        const li = document.createElement('li');
        // Crear un enlace por cada cliente
        const enlace = document.createElement('a');
        enlace.href = '#';  // Aquí puedes poner la URL del perfil del cliente si la tienes
        enlace.textContent = `${cliente.nombre} - ${cliente.correo}`;
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            mostrarDetallesCliente(cliente);  // Función para mostrar detalles del cliente
        });
        li.appendChild(enlace);
        listaClientes.appendChild(li);

        // Actualizar opciones del select de citas
        const option = document.createElement('option');
        option.textContent = cliente.nombre;
        option.value = cliente.nombre;
        selectCliente.appendChild(option);
    });
}

// Función para mostrar detalles del cliente (ejemplo básico)
function mostrarDetallesCliente(cliente) {
    // Aquí podrías redirigir a una nueva página con los detalles del cliente
    // Por ejemplo, podrías usar window.location.href = 'perfil-cliente.html?id=' + cliente.id;
    alert(`Detalles de ${cliente.nombre}:\nCorreo: ${cliente.correo}`);
}

    });
}

// Función para programar una cita
function programarCita(fecha, hora, cliente) {
    citas.push({ fecha, hora, cliente });
    actualizarListaCitas();
}

// Función para actualizar la lista de citas en el DOM
function actualizarListaCitas() {
    listaCitas.innerHTML = '';
    citas.forEach(cita => {
        const li = document.createElement('li');
        li.textContent = `${cita.fecha} - ${cita.hora} con ${cita.cliente}`;
        listaCitas.appendChild(li);
    });
}

// Evento submit para el formulario de clientes
formClientes.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = inputNombre.value.trim();
    const correo = inputCorreo.value.trim();
    if (nombre && correo) {
        agregarCliente(nombre, correo);
        formClientes.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Evento submit para el formulario de citas
formCitas.addEventListener('submit', function(event) {
    event.preventDefault();
    const fecha = inputFecha.value;
    const hora = inputHora.value;
    const cliente = selectCliente.value;
    if (fecha && hora && cliente) {
        programarCita(fecha, hora, cliente);
        formCitas.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
