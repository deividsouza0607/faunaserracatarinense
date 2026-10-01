const fotos = document.querySelectorAll(".carrossel .foto");

let fotoAtual = 0;


// MOSTRAR FOTO
function mostrarFoto() {

    fotos.forEach((foto) => {
        foto.style.display = "none";
    });

    fotos[fotoAtual].style.display = "block";
}


// AVANÇAR
function proximaFoto() {

    fotoAtual++;

    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }

    mostrarFoto();
}


// VOLTAR
function fotoAnterior() {

    fotoAtual--;

    if (fotoAtual < 0) {
        fotoAtual = fotos.length - 1;
    }

    mostrarFoto();
}


// INICIAR NA FOTO 1
mostrarFoto();