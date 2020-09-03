
var opcion1 = new comida('Chicharrón', 'Taco', 3)
var opcion2 = new comida('Suadero', 'Taco', 0)
var opcion3 = new comida('Rajas', 'Taco', 4)
  var menu = []
    var comidas = menu.push(opcion1, opcion2, opcion3)
function comida(nombre, presentacion, picoso){
  this.nombre = nombre
  this.presentacion = presentacion
  this.picoso = picoso
}
var nombreMenu = menu.map(function(menu){return ' ' + menu.nombre})

var servicio = []
var tuOrden = document.getElementById('tuOrden')
var guisado1 = document.getElementById('opcion1')
var guisado2 = document.getElementById('opcion2')
var guisado3 = document.getElementById('opcion3')



function levantarPedido() {
  var opcionUno = document.getElementById('opcion1Input')
  var opcionDos = document.getElementById('opcion2Input')
  var opcionTres = document.getElementById('opcion3Input')
  var o1 = parseInt(opcionUno.value)
  var o2 = parseInt(opcionDos.value)
  var o3 = parseInt(opcionTres.value)
  var orden = o1 + o2 + o3
  if(orden > 0){
    tuOrden.innerHTML = `Pediste <br> ${o1} ${o1<2 ? 'taco':'tacos'} de ${opcion1.nombre} <br> ${o2} ${o2<2 ? 'taco':'tacos'} de ${opcion2.nombre} <br>  ${o3} ${o3<2 ? 'taco':'tacos'} de ${opcion3.nombre}`
    console.log(orden)
  }
}

guisado1.innerHTML = opcion1.nombre
guisado2.innerHTML = opcion2.nombre
guisado3.innerHTML = opcion3.nombre



var ordenar = document.getElementById("ordenar");
ordenar.addEventListener("click", levantarPedido);
//var pedido = prompt(`¿Cúantos tacos quieres? \nEl menú de hoy es: \n${nombreMenu}`)