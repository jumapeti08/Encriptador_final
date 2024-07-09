let nuevoTexto = "";
let respuesta = "";
let cantidadLetras = 0;
let vocales = ['a', 'e', 'i', 'o', 'u'];
let bandera = true;

function encriptar(elementoId, titulo) {
    respuesta = document.getElementById("texto").value;
    const parrafo = document.getElementById(elementoId);
    const tit = document.getElementById(titulo);

    // Reinicia nuevoTexto al comienzo de la función
    nuevoTexto = "";
    console.log(respuesta);

    console.log(respuesta[0]);
    cantidadLetras = respuesta.length;
    console.log(cantidadLetras);
    for (let i = 0; i < cantidadLetras; i++) {
        if (respuesta[i] === 'a') {
            nuevoTexto += "ai";
        } else if (respuesta[i] === 'e') {
            nuevoTexto += "enter";
        } else if (respuesta[i] === 'i') {
            nuevoTexto += "imes";
        } else if (respuesta[i] === 'o') {
            nuevoTexto += "ober";
        } else if (respuesta[i] === 'u') {
            nuevoTexto += "ufat";
        } else {
            nuevoTexto += respuesta[i];
        }
    }


    borrarInfo();
    parrafo.style.fontSize = '24px';
    parrafo.innerText = nuevoTexto;
    tit.innerHTML = "";
}

function desencriptar(elementoId, titulo) {
    respuesta = document.getElementById("texto").value;
    const parrafo = document.getElementById(elementoId);
    const tit = document.getElementById(titulo);

    // Reinicia nuevoTexto al comienzo de la función
    nuevoTexto = respuesta.replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    borrarInfo();
    parrafo.style.fontSize = '24px';
    parrafo.innerText = nuevoTexto;
    tit.innerHTML = "";
}

function borrarInfo() {
    const imagen = document.getElementById('imagen');
    const boton = document.getElementById('miBoton');
    boton.style.display = 'block';

    if (imagen) {
        imagen.style.display = 'none';
    }
}

function copiarTexto() {
    const textoParaCopiar = nuevoTexto;

    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            console.log('Texto copiado al portapapeles');
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert('Error al copiar el texto. Por favor, copie manualmente.');
        });
}



