
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

const opcionInput = document.getElementsByClassName('opcionInput')
const opcionUno = document.getElementById('opcion1Input')
const opcionDos = document.getElementById('opcion2Input')
const opcionTres = document.getElementById('opcion3Input')

const tuOrden = document.getElementById('tuOrden')
const avisoTacos = document.getElementById('avisoTacos')
const guisado1 = document.getElementById('opcion1')
const guisado2 = document.getElementById('opcion2')
const guisado3 = document.getElementById('opcion3')
/*   let formulario = document.getElementById('elegir')
  console.log(formulario) */
const avisoCheck = document.getElementById('avisoCheck')
const checkbox1 = document.getElementById('verificar1')
const checkbox2 = document.getElementById('verificar2')
const checkbox3 = document.getElementById('verificar3')
const checkbox4 = document.getElementById('verificar4')
checkbox1.addEventListener('change', this.cambio1)
checkbox2.addEventListener('change', this.cambio2)
checkbox3.addEventListener('change', this.cambio3)
checkbox4.addEventListener('change', this.cambio4)
let cambios = [cambio1, cambio2, cambio3, cambio4]
let checkboxes = [checkbox1, checkbox2, checkbox3, checkbox4]  
/*   var checkboxesChecked = checkboxes.map(function(checkboxes){return checkboxes.checked}) */

var ordenar = document.getElementById("ordenar");
ordenar.addEventListener("click", evaluar);


class Servicio{
  constructor(){
    this.comida()
    this.cambio1()
    this.cambio2()
    this.cambio3()
    this.cambio4()
    this.levantarPedido()
    this.opcion = {
      opcionUno,
      opcionDos,
      opcionTres
    }
    this.convertirStringsANumeros()
  }
}
 
  function cambio1 () {
    if (checkbox1.checked){
      checkbox1.checked = true
      checkbox2.checked = false
      checkbox3.checked = false
      checkbox4.checked = false
    }else{
      checkbox1.checked = false
    }
  }
  function cambio2(){
    if (checkbox2.checked){
      checkbox2.checked = true
      checkbox1.checked = false
    }
  }
  function cambio3(){
    if (checkbox3.checked){
      checkbox3.checked = true
      checkbox1.checked = false
    } 
  }
  function cambio4(){
    if (checkbox4.checked){
  checkbox4.checked = true
  checkbox1.checked = false
    } 
  }

  function convertirStringsANumeros(){
    this.o1 = parseInt(opcionUno.value)
    this.o2 = parseInt(opcionDos.value)
    this.o3 = parseInt(opcionTres.value)
  }
  
  function evaluar(){
    this.o1 = parseInt(opcionUno.value)
    this.o2 = parseInt(opcionDos.value)
    this.o3 = parseInt(opcionTres.value)
    this.ops = this.o1 + this.o2 + this.o3
      if(this.ops === 0){
        avisoTacos.style.display = 'flex'
        textoTacos.innerHTML = 'Debes pedir al menos un taco'
      }else{
        levantarPedido()
    }
  }


/* var o1 = parseInt(opcionUno.value)
var o2 = parseInt(opcionDos.value)
var o3 = parseInt(opcionTres.value)
opcionUno.addEventListener('change', sumar)
function sumar(ev){
  o1 = o1 + 1
  console.log(ev, o1)
} */
/* function valor(){
  let o1 = parseInt(opcionUno.value)
  console.log(o1)
}
console.log(valor)
var orden = parseInt(opcionUno.value) + parseInt(opcionDos.value) + parseInt(opcionTres.value)
console.log(orden) */
function levantarPedido() {
  convertirStringsANumeros()
  if(checkbox1.checked || checkbox2.checked || checkbox3.checked || checkbox4.checked){
    pedido.innerHTML = 'Pediste:'
    if(this.o1 > 0){
      uno.innerHTML = `${this.o1} ${this.o1<2 ? 'taco':'tacos'} de ${menu[0].nombre}`
    }if(this.o2 > 0){
      dos.innerHTML = `${this.o2} ${this.o2<2 ? 'taco':'tacos'} de ${menu[1].nombre}`
    }if (this.o3 > 0){
      tres.innerHTML = `${this.o3} ${this.o3<2 ? 'taco':'tacos'} de ${menu[2].nombre}`
    }
  } else {
    avisoCheck.style.display = 'flex'
    textoCheck.innerHTML = 'Por favor indicanos como quieres tus tacos'
  }
}

/*     console.log( uno, dos, tres)
 */
function servicios(){
  window.servicio = new Servicio()
}

guisado1.innerHTML = menu[0].nombre
guisado2.innerHTML = menu[1].nombre
guisado3.innerHTML = menu[2].nombre
