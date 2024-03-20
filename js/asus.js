/* 
const imagenPortada = document.getElementById("imagenPortada")
imagenPortada.src = "./css/assets/portada.jpg"

const imagenSeccionUno = document.getElementById("imagenSeccionUno")
imagenSeccionUno.src = "./css/assets/seccionUno.jpg"

const imagenCaracteristicasUno = document.getElementById("imagenCaracteristicasUno")
imagenCaracteristicasUno.src = "./css/assets/caracteristicasuno.jpg"

const imagenCaracteristicasDos = document.getElementById("imagenCaracteristicasDos")
imagenCaracteristicasDos.src = "./css/assets/caracteristicasdos.jpg"

const imagenCaracteristicasTres = document.getElementById("imagenCaracteristicasTres")
imagenCaracteristicasTres.src = "./css/assets/caracteristicastres.jpg"

const imagenCaracteristicasCuatro = document.getElementById("imagenCaracteristicasCuatro")
imagenCaracteristicasCuatro.src = "./css/assets/caracteristicascuatro.jpg"

const imagenCaracteristicasCinco = document.getElementById("imagenCaracteristicasCinco")
imagenCaracteristicasCinco.src = "./css/assets/caracteristicascinco.jpg"

const imagenCaracteristicasSeis = document.getElementById("imagenCaracteristicasSeis")
imagenCaracteristicasSeis.src = "./css/assets/caracteristicasseis.jpg"

const imagenCaracteristicasSiete = document.getElementById("imagenCaracteristicasSiete")
imagenCaracteristicasSiete.src = "./css/assets/caracteristicassiete.jpg" */



// Definir un array con los IDs de las imágenes
const imagenes = [
    "portada",
    "seccionuno",
    "caracteristicasuno",
    "caracteristicasdos",
    "caracteristicastres",
    "caracteristicascuatro",
    "caracteristicascinco",
    "caracteristicasseis",
    "caracteristicassiete"
  ];
  
  // Iterar sobre el array de IDs y asignar la ruta de la imagen correspondiente
  //toLowerCase(): Es un método que convierte todas las letras de una cadena a minúsculas. para que coincida el nombre de la imagen con los ID's
  imagenes.forEach(id => {
    const imagen = document.getElementById(id);
    imagen.src = `./css/assets/${id.toLowerCase()}.jpg`;
  });
