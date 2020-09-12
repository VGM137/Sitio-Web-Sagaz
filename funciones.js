
var chicharron = new comida('Chicharrón', 'Taco', 3)
var suadero = new comida('Suadero', 'Taco', 0)
var rajas = new comida('Rajas', 'Taco', 4)
  var menu = []
    var comidas = menu.push(chicharron, suadero, rajas)
function comida(nombre, presentacion, picoso, cantidad){
  this.nombre = nombre
  this.presentacion = presentacion
  this.picoso = picoso
  this.cantidad = cantidad
}
var nombreMenu = menu.map(function(menu){return ' ' + menu.nombre})

var servicio = []

var tuOrden = document.getElementById('tuOrden')
var guisado1 = document.getElementById('opcion1')
var guisado2 = document.getElementById('opcion2')
var guisado3 = document.getElementById('opcion3')
  /* var guisados = guisado1.value + guisado2.value + guisado3.value */

var listo = document.getElementById('listo')
listo.addEventListener('click', preguntarDetalles)


  var conTodo = document.getElementById('conTodo')
  var checkbox1 = document.getElementById('verificar1')
  var checkbox2 = document.getElementById('verificar2')
  var checkbox3 = document.getElementById('verificar3')
  var checkbox4 = document.getElementById('verificar4')
  checkbox1.addEventListener('change', cambio1)
  checkbox2.addEventListener('change', cambio2)
  checkbox3.addEventListener('change', cambio3)
  checkbox4.addEventListener('change', cambio4)
  var checkboxes = [checkbox1, checkbox2, checkbox3, checkbox4]


var ordenar = document.getElementById("ordenar");
ordenar.addEventListener("click", levantarPedido);
const mostrarOrdenar = () => ordenar.disabled = false
const noMostrarOrdenar = () => ordenar.disabled = true

function preguntarDetalles(){
conTodo.style.display = 'block'
ordenar.style.display = 'initial'
noMostrarOrdenar()
}


function cambio1 () {
  if (checkbox1.checked){
    mostrarOrdenar()
    checkbox1.checked = true
    checkbox2.checked = false
    checkbox3.checked = false
    checkbox4.checked = false
  } else {
    noMostrarOrdenar()
    checkbox1.checked = false
  }

 }
function cambio2(){
  if (checkbox2.checked){
    mostrarOrdenar()
    checkbox2.checked = true
    checkbox1.checked = false
  } else {
    noMostrarOrdenar()
    checkbox2.checked = false
  }
}
function cambio3(){
  if (checkbox3.checked){
    mostrarOrdenar()
    checkbox3.checked = true
    checkbox1.checked = false
  } else {
    noMostrarOrdenar()
    checkbox3.checked = false
  }
}
function cambio4(){
  if (checkbox4.checked){
    mostrarOrdenar()
    checkbox4.checked = true
    checkbox1.checked = false
  } else {
    noMostrarOrdenar()
    checkbox4.checked = false
  }
}

var opcionInput = document.getElementsByClassName('opcionInput')
var opcionUno = document.getElementById('opcion1Input')
var opcionDos = document.getElementById('opcion2Input')
var opcionTres = document.getElementById('opcion3Input')

var orden = parseInt(opcionUno.value) + parseInt(opcionDos.value) + parseInt(opcionTres.value)

function levantarPedido() {
  var o1 = parseInt(opcionUno.value)
  var o2 = parseInt(opcionDos.value)
  var o3 = parseInt(opcionTres.value)
  pedido.innerHTML = 'Pediste:'
  if(o1 > 0){
    uno.innerHTML = `${o1} ${o1<2 ? 'taco':'tacos'} de ${menu[0].nombre}`
  }if(o2 > 0){
    dos.innerHTML = `${o2} ${o2<2 ? 'taco':'tacos'} de ${menu[1].nombre}`
  }if (o3 > 0){
    tres.innerHTML = `${o3} ${o3<2 ? 'taco':'tacos'} de ${menu[2].nombre}`
  }

    console.log( uno, dos, tres)
}

guisado1.innerHTML = menu[0].nombre
guisado2.innerHTML = menu[1].nombre
guisado3.innerHTML = menu[2].nombre
