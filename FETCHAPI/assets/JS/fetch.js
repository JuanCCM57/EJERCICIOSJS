/*

Dentro de los navegadores tenemos 2 tipos de APIs:

- APIs nativas: Como el DOM que es el API que nos permite acceder al codigo HTML de nuestros documentos a traves de JavaScript.

- APIs externas: Como las APIs de Twitter que nos permite obtener los ultimos tweets del usuario, o la de GitHub que nos permite obtener la informacion de los repositorios de una cuenta.


Ejemplos de APIs WEB

    - DOM
    - XMLHttpRequest: Peticiones al servidor
    - fetch: API nos permite hacer peticiones al servidor
    - sessionStorage
    - localStorage
Fetch API:

Asincronismo (cuando le pido una torta al señor de las tortas con mucho tiempo de anticipacion)

JavaScript usa un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo.
    - Single Thread
    - Operaciones de entrada y salida
    - Bloqueo
    - No bloqueo


Ejemplo de aeropuerto

Pista de aterrizaje = hilo o thread
Input = cuando un avion va aterrizar
Output = cuando el avion tiene que despegar
Manejador de eventos = la torre de control

Gracias al asincronismo, vamos a tener una pista de aterrizaje liberada, porque no vamos a poder aterrizar dos aviones al mismo tiempo, con lo que mantenemos un flujo constante de trabajo.


Sincronismo (cuando le pido una torta al señor de las tortas para ya porque tengo tiempo para comer)

*/
//Ejemplo de JS sincrono

// console.log("Inicio Sincrono");
// function dosSinc(){
//     console.log("Dos");
// }
// function unoSinc(){
//     console.log("Uno");
//     dosSinc();
//     console.log("Tres");
// }
// unoSinc()
// console.log("Fin Sincrono");

// Cual es la salida de este codigo?: 1, 2, 3

// Ejemplo de JS asincrono
// console.log ("Inicio de Asincrono");//1
// function dos(){ //Se pone en espera 2 segundos
//     setTimeout(function(){
//         console.log("Dos");//5
//     }, 2000);
// }
// function uno(){
//     setTimeout(function(){
//         console.log("Uno");
//     }, 0); //4
//     dos();
//     console.log("Tres"); //2
// }
// uno();
// console.log("Fin de Asincrono");//3

//Cual es la salida de este codigo?: 3, 1 y 2

/*
Ejemplos de tareas asincronas

- Fetch a una URL para obtener un archivo JSON
- Tareas programadas con setTimeout
- Spotify, al momento de reproducir un .mp3



Mecanismos asincronos en JAVASCRIPT

Para controlar la asincronia en JS, podemos usar alguno de estos mecanismos:

    - Callbacks
    - Promises
    - Async/Await

Promesas (promises)

Como su nombre lo indica, es algo que de principio no sabemos si se cumplira, por que pueden pasar muchas cosas.
 La gran ventaja de usar promesas, es poder usar una sola funcion que haga todo el trabajo,
  que el codigo sea mas estilizado y poder manejar de mejor forma los dos escenarios posibles: 
  si la promesa se cumple, o no.

Una promesa es el resultado de la operacion asincrona, 
este resultado es en forma de objeto el cual puede estar disponible AHORA o en el FUTURO. 
Aunque esta operacion puede finalizar exitosamente o fallar, 
la promesa nos permite saber cuando una operacion finaliza, independientemente del resultado.

Las promesas tienen 3 estados posibles:
    - Pending: Estado inicial, cuando se crea la promesa. 
    - Fullfilled: Cuando la operacion asincrona se completa con exito (resolve)
    - Rejected: Cuando la operacion asincrona falla (reject) 

Nuestras promesas tiene algunos metodos:

    - then(function resolve): Ejecuta la funcion resolve cuando la promesa se cumple
    - catch(function resolve): Ejecuta la funcion reject cuando la promesa no se cumple.
    
    - then(function resolve, function reject): Ejecutar las dos funciones resolve y reject
    - finally(function end): Ejecutar la funcion end si se cumple o no la promesa.

 */

//Ejemplo de promesa para saber el nombre
// let nombre = "felipe";

// const promesaNombre = new Promise((resolve,reject) =>{
//     if (nombre !== "felipe") reject("Error!!,El nombre no es felipe");
//     resolve(nombre);
// }
// );
// console.log(promesaNombre);
/*

Fetch API

Es el nombre de una nueva API (nativa) para JS con la cual podemos realizar peticions HTTP asincronas 
utilizando promesas, y de forma que el codigo sea un poco mas sencillo y legible. 
La forma de utilizar una peticion fetch es sencilla, 
solo debemos llamar a fetch y pasarle por parametro una URL de la peticion a realizar

*/

//const solicitud = fetch('la url que vamos a consultar')
//Guardo en una constante llamada solicitud, la consulta que hago a una pagina externa

// fetch ('https://pokeapi.co/api/v2/pokemon/ditto')//realizamos la peticion a la URL de la API Pokemon
// .then(datos => {//cuando te conectes al servidor, ejecutamos la siguiente función
//     return datos.json();//traeme todos los pokemon, y como se que los traes en texto, yo los convierto a formato JSON
// }).then(info => {//cuando la promesa se resuelve, entonces ejecutamos esta funcion. Usamos el metodo then para obtener la respuesta de la promesa y guardarla en un variable llamada info. Gracias a esta variable, puedo almacenar la info de mi pokemon y sacar de ahi los datos que necesite.
//     console.log("El nombre del pokemon es", info.name,"y su numero es",info.id)
// });
// ///
// const input = document.querySelector("#inputPokemon"); //obtenemos el input del HTML
// const button = document.querySelector("#botonPokemon"); //obtenemos el boton del HTML
// const pokemonContainer = document.querySelector("#cardPokemon"); //obtenemos el contenedor de los pokemon desde el HTML

// button.addEventListener("click", (e) => { 
//     //cuando se hace click en el boton, entonces ejecutamos esta funcion
//     e.preventDefault(); //evitamos que el navegador se recargue
//     traerPokemon(input.value); //llamamos a la funcion traerPokemon, pasandole el valor del input
// }
// );

// function traerPokemon(pokemon){ //funcion que trae los pokemon
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) //realizamos la peticion a una URL
//         .then(res => res.json()) //cuando la promesa es resuelta, asignamos la info a la variable res
//         .then((data) => { //
//             crearPokemon(data); //llamamos a la funcion crearPokemon, pasandole la informacion del pokemon
//         });
// }

// function crearPokemon(pokemon){
//     const imgPokemon = document.createElement("img"); //creamos un elemento img donde pondremos la imagen
//     imgPokemon.src = pokemon.sprites.front_default; //establecemos la imagen de nuestro pokemon, sacamos el sprite del .json

//     const nombrePokemon = document.createElement("h3"); //creamos un elemento h3 donde pondremos el nombre de nuestro pokemon
//     nombrePokemon.textContent = pokemon.name; //establecemos el nombre de nuestro pokemon, sacamos el nombre del .json

//     const idPokemon = document.createElement("h3"); //creamos un elemento h3 donde pondremos el tipo de nuestro pokemon
//     idPokemon.textContent = pokemon.id;

//     const separador = document.createElement("hr");//le damos un bonito separador a cada pokemon

//     const div = document.createElement("div"); //creamos un elemento div donde pondremos el numero de nuestro pokemon


    
//     div.appendChild(nombrePokemon); //agregamos el nombre al div
//     div.appendChild(imgPokemon); //agregamos la imagen al div
//     div.appendChild(idPokemon); //agregamos el tipo de pokemon
//     div.appendChild(separador); //agregamos el separador

//     pokemonContainer.appendChild(div); //agregamos el div al contenedor de los pokemon
    
// }

// traerPokemon(); //llamamos a la funcion traerPokemon, para que nos traiga los pokemon que queramos
// //Solicitud GET 
// fetch("https://fakestoreapi.com/products/10") //realizamos la peticion a una URL
// .then((datos) => {
//   //cuando la promesa es resuelta, entonces ejecutamos esta funcion
//   return datos.json(); //convertimos la respuesta a un formato JSON
// })
// .then((info) => {
// //   cuando la promesa es resuelta, entonces ejecutamos esta funcion. Estamos usando el metodo 
// //   .then para obtener la respuesta de la promesa y guardarla en la variable info. 
// //   Gracias a esto podre obtener la informacion que queremos.
//   console.log(
//     "El nombre de nuestro producto es:",
//     info.title,
//     " y su precio es: ",
//     info.price); 
//imprimimos el nombre del producto. esto es posible por que la respuesta ya esta en formato JSON,
//  y podemos acceder a los datos directamente, especificando el nombre del campo que queremos.
// });
/* APIS DE ALMACENAMIENTO WEB


la API de almacenamiento web define dos mecanismos de almacenamiento que son muy importantes

- almacenamiento local
- almacenamiento de sesiones

Tanto el almacenamiento local como el de sesiones proporcionan una area privada para sus datos,
esto quiere decir que otros sitios web no pueden acceder a esta informacion


Algunas caracteristicas que comparten el local y el session storage son:

    - La capacidad (5Mb a diferencia de los 4Kb de las cookies)
    - La informacion es almacenada en pares clave/valor, por lo que se puede usar como si fueran variables.
    - El almacenamiento web solo es accesible en el navegador, no se envia al servidor como lo hacen las cookies.
*/
/*
ALMACENAMIENTO LOCAL (LocalStorage)

La informacion almacenada con localStorage se guarda indefinidamente hasta que sea eliminada 
mediante codigo o bien borrada desde el navegador.

El almacenamiento local es similiar a las cookies, pero se borra con menos frecuencia y puede almacenar mas datos.
 Por lo tanto, se puede utilizar en situaciones similares, tales como: 
 almacenar articulos que un usuario de comercio electronico agrego a un carrito, almacenar historial de uso, etc.

La informacion que almacenamos en localStorege se elimina hasta que se haga explicitamente, 
ya sea por nostros o por el usuario. Nunca se limpia automaticamente y se comparte en todas las sesiones
 que acceder al sitio.


como accedemos al almacenamiento?
windows.localStorage
windows.sessionStorage 
*/
//Guardar datos (localStorage.setItem(key,value)
// localStorage.setItem("nombre","juan");
// localStorage.setItem("apellido","mendoza");
// localStorage.setItem("edad","20");
// localStorage.setItem("es programador?",true);


//La sintaxis para guardar datos en un localStorage es: localStorage.setItem(key, value);,
//  donde key es la clave (o el identificador) y value es el valor que queremos guardar.

// let recuperarnombre = localStorage.getItem("nombre");
// console.log(recuperarnombre);

// let recuperarapellido = localStorage.getItem("apellido");
// console.log(recuperarapellido);

// let recuperarprogramador = localStorage.getItem("es programador?");
// console.log(recuperarprogramador);

//Remover datos de localStorage (LocalStorage.removeItem(key))

// localStorage.removeItem("nombre");//borrar a juan
// localStorage.removeItem("apellido");// borrar apellido

//conocer el alrgo de nuestro almacenamiento
// (localStorage.length)

// let longitudLocalStorage = localStorage.length;
// console.log(longitudLocalStorage);

//limpiar datos de localStorage(local.Storage.clear())
// localStorage.clear();

//agregar eleemntos con sessionStorage
// sessionStorage.setItem("perrito","rocky");
// sessionStorage.setItem("gatito","bigotes");
// sessionStorage.setItem("nutria","hernesto");
// sessionStorage.setItem("caracol","gary");
// sessionStorage.setItem("conejito","griselo");

// let longitudSessionStorage = sessionStorage.length;
// console.log(longitudSessionStorage);

function guardarDatos(){
    localStorage.nombre = document.getElementById
    ("nombre").value; //guardar el valor de nombre en localStorage

    localStorage.password = document.getElementById
    ("password").value; // guardar el valor de password en localStorage

    document.getElementById("datos").innerHTML = ("datos guardados correctamente");
    //sobreescribimos el contenido del parrafo por este nuevo mensaje

    //Revisar el funcionamiento correcto de mi codigo
    console.log(typeof localStorage.nombre);
    console.log(typeof localStorage.password);
}

function recuperarDatos(){

//Si en en la llave nombre de mi localStrogane y ademas en la llave password los datos son diferentes de undefined
//  (significa que si tengo datos), voy a mostrar el mensaje con esa informacion
 if (localStorage.nombre != undefined && 
    localStorage.password !=undefined){
    document.getElementById("datos").innerHTML 
    = " nombre: " + localStorage.nombre + " password: "
    + localStorage.password;
}else{
    //en caso de que no se cumpla la condicion, muestro un mensaje de alerta
    document.getElementById("datos").innerHTML =
    "no has introducido tu nombre y tu password!!!";
}
}