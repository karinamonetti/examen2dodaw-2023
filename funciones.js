// 1) btn que al pulsarse cambie el bg del p-1 a rojo y de p-3 a verde
var btnColor = document.querySelector("button.color");
btnColor.addEventListener("click", function () {
  /* 
   1º forma de hacerlo
   document.querySelector("p:first-of-type").style.backgroundColor = "red";  // Primer párrafo
    document.querySelector("p:nth-of-type(3)").style.backgroundColor = "green";  // Tercer párrafo
    */

  // 2º forma de hacerlo
  document.getElementsByClassName("p-1")[0].style.backgroundColor = "red"; // Primer párrafo
  document.getElementsByClassName("p-3")[0].style.backgroundColor = "green"; // Tercer párrafo
});

// 2) Tenemos dos listas:1 y 2 con frutas. Crea un botón que al pulsar: Movemos el último elemento de la lista 2 al primer elemento lista 1
var btnMover = document.querySelector("button.mover");
btnMover.addEventListener("click", function () {
  // selecciono lista1
  var lista1 = document.querySelector("ul.frutas1"); // genera un nodelist, no un array
  // selecciono lista2
  var lista2 = document.querySelector("ul.frutas2");

  // selecciono ultimo item lista 2
  var item = lista2.lastElementChild;

  // elimino item del primer nodelist
  item.remove();

  // agrego item al segundo array
  lista1.insertBefore(item, lista1.firstElementChild);

  //  El método insertBefore() es un método del DOM (Document Object Model) que permite insertar un nodo antes de un nodo hijo específico dentro de un elemento padre.
  // parentNode.insertBefore(newNode, referenceNode);
  /*newNode: Es el nodo que deseas insertar. Puede ser cualquier tipo de nodo: un elemento, un texto, etc.
referenceNode: Es el nodo antes del cual deseas insertar el newNode. Si este nodo es null, el newNode se inserta al final de la lista de nodos hijos del parentNode. */

});


// 3) Tenemos 8 enlaces. Crea 2 botones: uno que ponga los enlaces impares en verde, y el otro que restaure el color negro.
 // Función que pone los enlaces impares en verde
 function imparesVerde() {
    console.log("Se ejecuta imparesverde()");
    var enlaces = document.querySelectorAll("a"); // Selecciona todos los enlaces
    // la siguiente funcion es un nodelist de elementos <a> que llama enlace, que tienen un index 
    enlaces.forEach(function(enlace, index) {
        if (index % 2 === 0) {  // Los índices empiezan en 0, así que los enlaces impares tienen índices pares
            enlace.style.color = "green"; // Cambia el color del enlace impar a verde
        }
    });
}

// Función que restaura el color de todos los enlaces a negro
function todosNegro() {
    console.log("Se ejecuta todosnegro()");
    var enlaces = document.querySelectorAll("a"); // Selecciona todos los enlaces
    enlaces.forEach(function(enlace) {
        enlace.style.color = "black"; // Cambia el color de todos los enlaces a negro
    });
}