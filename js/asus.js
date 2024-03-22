
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


var imagenesPc = document.querySelectorAll('.imagenpc');
var iconosUno = document.querySelectorAll('.iconouno');
var iconosDos = document.querySelectorAll('.iconodos');
var iconosTres = document.querySelectorAll('.iconotres');
