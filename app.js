// app.js
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // Validaciones
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert('Este nombre ya fue agregado.');
        return;
    }
    
    // Agregar a la lista
    amigos.push(nombre);
    
    // Actualizar la interfaz
    actualizarListaAmigos();
    
    // Limpiar el input
    inputAmigo.value = '';
    inputAmigo.focus();
    
    // Actualizar estado del botón de sortear
    actualizarBotonSortear();
}

function eliminarAmigo(nombre) {
    // Encontrar índice del amigo
    const indice = amigos.indexOf(nombre);
    
    // Eliminar del array
    if (indice !== -1) {
        amigos.splice(indice, 1);
    }
    
    // Actualizar la interfaz
    actualizarListaAmigos();
    
    // Actualizar estado del botón de sortear
    actualizarBotonSortear();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    // Crear elementos de lista para cada amigo
    amigos.forEach(amigo => {
        const itemAmigo = document.createElement('li');
        itemAmigo.className = 'amigo-item';
        
        // Texto con el nombre
        const textoAmigo = document.createElement('span');
        textoAmigo.textContent = amigo;
        
        // Botón para eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'button-eliminar';
        botonEliminar.onclick = () => eliminarAmigo(amigo);
        
        // Agregar elementos al item
        itemAmigo.appendChild(textoAmigo);
        itemAmigo.appendChild(botonEliminar);
        
        // Agregar item a la lista
        listaAmigos.appendChild(itemAmigo);
    });
}

function actualizarBotonSortear() {
    const botonSortear = document.querySelector('.button-draw');
    
    // Deshabilitar botón si no hay suficientes amigos
    if (amigos.length < 2) {
        botonSortear.disabled = true;
        botonSortear.style.opacity = '0.6';
        botonSortear.style.cursor = 'not-allowed';
    } else {
        botonSortear.disabled = false;
        botonSortear.style.opacity = '1';
        botonSortear.style.cursor = 'pointer';
    }
}

function sortearAmigo() {
    // Validar que hay amigos para sortear
    if (amigos.length < 2) {
        alert('Debes agregar al menos 2 amigos para realizar el sorteo.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
    resultado.appendChild(elementoResultado);
}

// Inicializar el estado del botón al cargar la página
document.addEventListener('DOMContentLoaded', actualizarBotonSortear);