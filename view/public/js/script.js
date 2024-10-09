// Muestra en la consola el valor devuelto por la siguiente operación
console.log(
    // Accede al elemento con el id "usuario" en el documento
    document.getElementById("usuario")
    
    // Cambia el contenido de texto de ese elemento a "un nuevo usuario"
    .textContent = "Usuario"
);
// Accede al documento HTML actual
document

// Busca el primer (y único) elemento que tiene el id "usuario"
.getElementById("usuario")

// Retorna el elemento HTML correspondiente si se encuentra, o null si no existe
// Accede al documento HTML actual
document

// Busca todos los elementos que tienen la clase "boton"
.getElementsByClassName("boton")

// Retorna una colección de nodos (HTMLCollection) con todos los elementos que tienen esa clase
// Accede al documento HTML actual
document

// Busca todos los elementos que tienen la etiqueta "p" (parrágrafos)
.getElementsByTagName("p")

// Retorna una colección de nodos (HTMLCollection) con todos los elementos que tienen esa etiqueta

// Accede al documento HTML actual
document

// Selecciona el primer elemento que coincida con el selector CSS ".boton"
.querySelector(".boton")

// Retorna el primer elemento que coincide con el selector, o null si no encuentra ninguno

// Accede al documento HTML actual
document

// Selecciona todos los elementos que coincidan con el selector CSS ".boton"
.querySelectorAll(".boton")

// Retorna una NodeList con todos los elementos que coinciden con el selector
// APARTE --------------------------------------------------------------------------------------APARTE-----

// Importamos una clase o un objeto "Usuario" desde otro archivo JS
import { Usuario } from "../../../model/modelUsuarios"

// Aquí se muestra el valor de "Usuario" en la consola
console.log(Usuario)

usuarios.map((index) => {
    console.log(index)
})

// Definimos una función vacía con una sintaxis de flecha
let funcion = () => {}

// Definimos otra función vacía, pero con una sintaxis más tradicional
let unaFuncion = function(){}

// Utilizamos el método "map()" en "Usuario". Esto asume que "Usuario" es un arreglo.
// El método "map()" recorre cada elemento del arreglo.
Usuario.map()

// Añadimos un evento al botón con id "btnIniciar", para que cuando se haga clic, se llame a la función "iniciarSesion"
document.getElementById('btnIniciar').addEventListener('click', iniciarSesion)

// Aquí creamos la función "iniciarSesion". Esto es lo que se ejecutará cuando se haga clic en el botón.
function iniciarSesion(){ //Función declarativa
    // Capturamos el valor del input con id "Usuario" y lo guardamos en la variable "Usuario"
    let Usuario = document.getElementById("Usuario").value
    // Capturamos el valor del input con id "Contraseña" y lo guardamos en la variable "Contraseña"
    let Contraseña = document.getElementById("Contraseña").value
    
    // Comprobamos si el usuario y la contraseña son correctos (aquí solo se acepta 'admin' y '12345')
    if(Usuario == 'admin' && Contraseña == '12345'){
        // Si son correctos, mostramos "Bienvenido" en la consola
        console.log('Bienvenido')
    } else {
        // Si no son correctos, mostramos "Error de credenciales"
        console.log('Error de credenciales')
    }
}

/* 
    Aquí se había comentado otra forma de declarar la función "iniciarSesion". 
    Es lo mismo que arriba, pero usando una función de "expresión", donde la función es asignada a una variable.
*/

/* let iniciarSesion = function(){ 
    let Usuario = document.getElementById("Usuario");
    let Contraseña = document.getElementById("Contraseña");
    console.log(Usuario)
    console.log(Contraseña)
    console.log('Iniciar Sesión'); 
}
iniciarSesion() */

/* 
   Aquí se intentaba imprimir "Usuario" y "Contraseña" pero se ha comentado, así que no se ejecuta.
   Se usaban para ver en la consola lo que el usuario escribía.
*/

/* console.log(Contraseña)
console.log(Usuario); */
