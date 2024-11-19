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


/*****************************
      SEGUNDA PARTE
*****************************/
// 1) Cuando  los  campos  de  texto  nombre,  email,  contraseña  y  repetir  contraseña  tengan  el  foco  hay  que  ponerles  un  borde  de  3px  negro  y  cambiar  el  color  de  fondo a #CCF.  
var labels = document.querySelectorAll('label.focus'); // no puedo trabajar directamente sobre cada label, debo recorrerlo 

// Recorremos cada <label> para agregar los eventos a los inputs dentro de ellos
labels.forEach(function(label) {
    // Obtenemos el input dentro de cada label
    var input = label.querySelector('input');
    
    // Agregamos el evento focus al input
    input.addEventListener('focus', function() {
        input.style.border = '3px solid black';  // Borde negro
        input.style.backgroundColor = '#CCF';    // Fondo color #CCF
    });

    // Cuando pierda el foco volverá a su aspecto original.
    // Agregamos el evento blur al input
    input.addEventListener('blur', function() {
        input.style.border = '';    // Restaurar el borde original
        input.style.backgroundColor = '';  // Restaurar el fondo original
    });
});


// Al cargarse la página, establecer el foco en el campo "Nombre"
window.addEventListener('load', function() {
    var nombreInput = document.querySelector('input[name="nombre"]');
    nombreInput.focus();  // Establecer el foco en el campo de "Nombre"
});


// 3) El botón “Crear cuenta” estará inicialmente desactivado y no se activará hasta  que  no  se  seleccione  la  casilla  “Acepto las condiciones”. Cada  vez  que  esta  casilla se deseleccione también se desactivará el botón “Crear cuenta”.
var checkbox = document.querySelector('input[name="condiciones"]');
var btnCrearCuenta = document.querySelector('button[type="submit"]');

// Desactivar el botón al cargar la página
btnCrearCuenta.disabled = true;

// Escuchar el evento de cambio en la casilla de verificación
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        btnCrearCuenta.disabled = false; // Activar el botón si la casilla está marcada
    } else {
        btnCrearCuenta.disabled = true;  // Desactivar el botón si la casilla está desmarcada
    }
});


// 4) El  botón  “Borrar  datos”  confirmará:  “¿Está  seguro  qué  desea  limpiar  el formulario?”. En caso afirmativo dejará  la  página  como  cuando  se  carga  por  primera vez en caso contrario no hará nada. (1 punto)  Nota: Borra elementos:  .getElementById("formulario").reset();
var btnBorrarDatos = document.querySelector('button[type="reset"]');

// Agregar el evento de clic al botón "Borrar datos"
btnBorrarDatos.addEventListener('click', function(event) {
    // Prevenir el comportamiento por defecto (que es borrar los datos inmediatamente)
    event.preventDefault();

    // Mostrar un mensaje de confirmación
    var confirmar = confirm("¿Está seguro que desea limpiar el formulario?");

    // Si el usuario confirma, se resetea el formulario
    if (confirmar) {
        document.querySelector("form").reset();  // Resetea el formulario a su estado inicial
    }
});


/* 5)
El botón “Crear cuenta”: (1.5 punto) 
 
Se tiene que validar los SIGUIENTES datos: 
- Nombre: debe estar relleno. 
- Contraseña: debe estar relleno; además debe tener una longitud mínima de 8 
caracteres 
- Repetir contraseña: debe coincidir con contraseña. 
-El usuario tiene que elegir una preferencia. 
 
.-  Los  errores  encontrados  se  indicarán  mediante  un  mensaje  de  error  (se 
muestran todos los errores a la vez) 
 
.-  En caso de que todo sea correcto se deshabilitará el botón “Crear cuenta” 
sustituyendo su texto por el texto “Visualizando datos” 


*/
// Obtener elementos del formulario
var btnCrearCuenta = document.querySelector('button[type="submit"]');
var nombreInput = document.querySelector('input[name="nombre"]');
var contraseñaInput = document.querySelector('input[name="contraseña"]');
var repetirContraseñaInput = document.querySelector('input[name="repetir-contraseña"]');
var preferenciasSelect = document.querySelector('select[name="preferencias"]');
var errorContainer = document.createElement('div');  // Crear contenedor para los errores
document.body.appendChild(errorContainer);  // Agregarlo al cuerpo del documento

// Función para validar los datos al hacer clic en "Crear cuenta"
btnCrearCuenta.addEventListener('click', function(event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();

    // Limpiar los mensajes de error anteriores
    errorContainer.innerHTML = '';

    // Variables para controlar si hay errores
    var errores = [];

    // Validar Nombre --> .trim() elimina espacios en blannco
    if (nombreInput.value.trim() === '') {
        errores.push("El nombre es obligatorio.");
    }

    // Validar Contraseña
    if (contraseñaInput.value.trim() === '') {
        errores.push("La contraseña es obligatoria.");
    } else if (contraseñaInput.value.length < 8) {
        errores.push("La contraseña debe tener al menos 8 caracteres.");
    }

    // Validar Repetir Contraseña
    if (repetirContraseñaInput.value.trim() === '') {
        errores.push("Debes repetir la contraseña.");
    } else if (repetirContraseñaInput.value !== contraseñaInput.value) {
        errores.push("Las contraseñas no coinciden.");
    }

    // Validar Preferencia
    if (preferenciasSelect.value === '') {
        errores.push("Debes seleccionar una preferencia.");
    }

    // Si hay errores, mostrar los mensajes de error
    if (errores.length > 0) {
        errores.forEach(function(error) {
            var errorMessage = document.createElement('p');
            errorMessage.textContent = error;
            errorContainer.appendChild(errorMessage);
        });
    } else {
        // Si no hay errores, deshabilitar el botón y cambiar su texto
        btnCrearCuenta.disabled = true;
        btnCrearCuenta.textContent = "Visualizando datos";
    }
});
