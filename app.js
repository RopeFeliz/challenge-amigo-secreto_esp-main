// Array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();  
    
    // Agregar al array
    amigos.push(nombre);

    // Mostrar en la lista visual
    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiar el input
    input.value = '';
}

function sortearAmigo() {    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultado anterior
    const li = document.createElement('li');
    li.textContent = amigoSecreto;
    resultado.appendChild(li);
}