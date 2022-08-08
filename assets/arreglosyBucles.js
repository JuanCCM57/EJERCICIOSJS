/*
arrays o arreglos

Definicion
un arreglo o array es un conjunto de datos que se oueden almacenar
en una sola variable.

cuando tenemos una variable, la usamos para almacenar un solo dato.
En cambio, en un arreglo, guardamos Muchos datos a manera de lista.
 

//Ejemplo 1
// let nombre = "felipe";// Aqui se almacena un solo dato

// Array = ["felipe","ivonne","briana","zabdiel","alonso"];

// arrayAnimalitodelbosque = ["felipe",23,true,null,undefined];

--formas de crear un array--
1-primera forma
utilizando la palabra reservada "new array"
var marcadecolores = new Array ("Mapita", "Prismacolor",
"blancanieves","faber castell","norma","crayola")

En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array.
Hasta este momento,
este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

var colores = new Array(3); //Esta forma nosz permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.


2-segunda forma
La segunda forma se trata de crear el arreglo solo usando corchetes []. 
Esta forma es la mas usada para crear arreglos en JS.


*/

//ejemplo de arreglos

listadeperritos = ["chihuahua","calupoh","callejeros","pug"];
console.log(listadeperritos);

//ejemplo de arreglos 2
listadelsuper = ["leche","papitas","jabon","nachos","huevos"];
console.log(listadelsuper)
console.log("el producto en la posicion 1 es:" + listadelsuper);
console.log("el producto en la posicion 4 es:" + listadelsuper);
console.log("el producto en la posicion 2 es:" + listadelsuper);
console.log("el producto en la posicion 6 es:" + listadelsuper);
/*Encontramos que al tratar de seleccionar un elemento de nuestro
que no existe, aparecera el mensaje underfined. Esto es una porque la
gran venatja que tienen los arreglos en 35 es que podemos crecer su
tamaño cuando nosotros queramos. para esto, el arreglo se prepara
por si en algun momento recibe mas informacion
*/
/*
Array Asociativo
Son arreglos donde cada elemnto esta asociado no solo con su
indice, si no que tambien esta asiganado a un identificador,

sintaxis de un arreglo asociativo

*/
//Ejemplo de Ecommerce 
let propiedaddesdemicomputadora = {
    marca:"asus",// la marca es mi identificador y "asus" es mi valor
    procesador:"inter core i7",
    ram:"16 ram",
    almacenamiento:"1 tb",
}
console.log(propiedaddesdemicomputadora);
console.log("la ram de mi computadora es de:",
propiedaddesdemicomputadora["ram"]);
console.log("la marca de mi computadora es:",
propiedaddesdemicomputadora["marca"],"y su precio es de:",
propiedaddesdemicomputadora["precio"]);
//Redsocial
let publicacionredsocial = {
    nombre:"felipe",
    usuario: "@felipecontenis",
    fecha: "viernes",
    likes: "5000",
    descripcion :"esta es una bonita foto de lasagna",
    ubicacion: "esatdo de mexico"
}
console.log("Estas son las publicaciones de Agosto: ",
 publicacionredsocial["fecha"]);

 /*
Metodos de los arrays 

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elemenos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

Podemos dividir estos metodos en 3: 

    - Metodos transformadores
    - Metodos accesores
    - Metodos repetitivos (spoiler)

*/
console.log("////////////////////////////");
var arraydeejemplo = ["manzana","peras","mangos","mandarinaz",
"uvas","sandia","fresas"]
console.log("este es nuetra arreglo original de 7 elementos",
arraydeejemplo)
//metodos tranformadores

//push(): agrega un elemento al final del arreglo
arraydeejemplo.push("pitaya");
console.log("agregamos a la pitaya a nuestro arreglo de ejemplo":
arraydeejemplo);
//pop (): eliminar el ultimo elemento del arreglo
arraydeejemplo.pop();
console.log("eliminamos el ultimo elemento del arreglo",arraydeejemplo);
//unishift(): agregamos uno o mas elementos al principio del arreglo
arraydeejemplo.unshift("bananas","tunas","aguacate","lichi");
console.log("agregamos 4 elementos al principio del arreglo",
arraydeejemplo);
//shift():elliminar el primer elemento y devolver ese valor eliminado
arraydeejemplo.shift();
console.log("eliminamos el primer elemento del arreglo",
arraydeejemplo);
//sort(): Ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
arraydeejemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado",arraydeejemplo);
//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arraydeejemplo.reverse();
console.log("Este es nuestro arreglo invertido",arraydeejemplo);
//slice(): Extraemos una seccion del arreglo o cadena y devuelve un cadena nueva, copiando el arreglo(no se
//modifica nada, si no creamos una copia )
var saludo1 = "hola, estoy aprendiendo arreglos en generation"
var saludo2 = saludo1.slice(3,4);
console.log("imprimimos la rebanada del arreglo original ",
saludo2);
var saludo3 = saludo1.slice(9);
console.log("imprimir la rebanada del arreglo original",
saludo2);

//splice(): Modificar el arreglo en 3 formas distintas
/*
- Eliminar elementos del arreglo
- Agregar elementos nuevos al arreglo
- Reemplazar elementos que ya existen en el arreglo

Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

*/

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ",
mesesDelAnio); 
//eliminar y agregar datos splice
mesesDelAnio.splice(1,2,"Abril","Mayo");
console.log("Este es el nuevo arreglo con los meses borrados:",
mesesDelAnio);
//agregar elementos sin  borrar nada arreglo
arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);
diasSemana.splice(5, 0, "Jueves", "Viernes", "Sabado");
console.log("Los nuevos dias de la semana son: ", diasSemana);
/*
metodos accesores
*/
var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos"
,"cebolla"];
//legth (): Nos permite saber el numero de elementos o longitud del arreglo
console.log("Tenemos estos elementos en el arreglo ensalada",
ensalada.length);
//join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalada.join( "-"));
//concat():nos permite unir dos o mas arrays en uno solo.
//Devuelve un nuevo arreglo con los elementos de los otros
//arreglos.
let dulces = ["galletas","chetos","glorias","gansitos",
"picafresas","tambores"];
let mescla = ensalada.concat(dulces);
console.log("esta es la mescla:",mescla);

//join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalada.join( "-"));
//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo
console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));
//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));

/*
investigar esto de tarea
toString
valueOf
includes
*/

//toString(): Nos permite convertir el array en una cadena de texto
console.log(mezcla.toString());

//valueof(): Nos permitir devolver el valor de nuestro arreglo
console.log(mezcla.valueOf());

//includes(): Nos permite saber si un elemento existe o no dentro de un arreglo
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("gansitos")); //true
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("cacahuates")); //false
// /*

// Metodos repetidores

// */

// //filter(): Recorre el array y devuelve uno nuevo con los elementos que cumplan la condicion. (Es como un bucle).

// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Numeros del 1 al 10", numeros);

// //Filtraremos los datos del arreglo
// var numeros1al5 = numeros.filter(numero => numero <5);
// console.log("Estos son los numeros que cumplen la condicion al ser menores que 5", numeros1al5);

// var numeros6al9 = numeros.filter(numero => numero>=6 && numero<10);
// console.log("Estos son los numeros que cumplen la condicion al ser mayores que 5 y menores que 10", numeros6al9);

// //map(): Recorrer el arreglo, modificar los elementos presnetes en el y retornar esos valores modificados en uno nuevo con la misma longitud que el arreglo original

// var map = numeros.map(numeros => numeros *3);
// console.log("Estos son los numeros multiplicados por 3", map);

// //Ejercicio Improvisado tablas del 1 al 10

// var arregloBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var tabla2 = arregloBase.map(arregloBase => arregloBase *2);
// console.log("Esta es la tabla del 2", tabla2);

// //Esta es una tabla que toma una variable global (funciona, pero no es lo que debemos hacer)
// var tabla3 = arregloBase.map(numeros => numeros *3);
// console.log("Esta es la tabla del 3", tabla3);

// /*

// forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

//     - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
//     - Indice: La posicion que tiene el elemento dentro del arreglo
//     - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

// ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

// */

// //Ejemplo para remover el primer numero impar de un arreglo
// /*

// forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

//     - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
//     - Indice: La posicion que tiene el elemento dentro del arreglo
//     - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

// ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

// */

// //Ejemplo para remover el primer numero impar de un arreglo

// let listaNumeros = [3, 6, 8, 10, 12,];
// let impar = 3;

// var impares = listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
//     if (numero === impar){
//         listaNumeros.shift();
//     }
// });

// console.log("Estos son los elementos del array que no son impares", listaNumeros);
//////////
/*
bucles o loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. 
Las condiciones normalmente devuelven un true o false al ser evaluadas,
ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false

Normalmente tenemos 3 ciclos

-while(mientras)
-Do while (hacer mientras)
-For(para)

ormalmente tenemos 3 ciclos
    - While (mientras)
    - Do while (hacer mientras)
    - For (para)

Tenemos otras sentencias mas especificas:

    - for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos LA POSICION

    - for of: Sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos SU VALOR
/*

Sentencia WHILE (mientras)

Esta sentencia nos va a permitr recorrer un bloque de codigo SIEMPRE que se cumpla una condicion especifica, donde el resultado debe ser true

la estructura de WHILE es:

palabraReservada while (condicion que tiene que ser true) {
    //codigo a ejecutar
}



*/

//Programa para sumar numeros ALERTA, ESTE PROGRAMA EXPLOTA LA COMPUTADORA

// let numeroParaSumar = 0;
// while (numeroParaSumar <10){
//     console.log("El numero es menor a 10");
//}

//Contador sencillo

let valorInicial = 0; //Declaramos un valor inicial en 0
while (valorInicial < 5) {
  //mientras el valor inicial sea <5
  valorInicial++; //Ejecutamos este bloque de codigo (1 en 1)
  console.log("Este es el contador sencillo", valorInicial); //Imprimimos los resultados
}

//La sentencia while se ejecuta mientras se sigan obtiendo resultados positivos (true), y hasta que el resultado sea false, se para.

//Practica grupal: Escribir un programa que pida al usuario un numero entero positivo y muestre por pantalla todos los numeros impares desde 1 hasta ese numero

let numeroInicial = 1;

let valorLimite = prompt(
  "Hola, por favor ingresa un numero entero positivo que sea el limite"
);

while (numeroInicial <= valorLimite) { //MIENTRAS el numero inicial sea menor que el limite, ejecutamos lo de abajo
  if (numeroInicial % 2 != 0) { //si al dividir el numero inicial entre 2, el residuo es diferente de 0 (es impar)...
    console.log("while", numeroInicial); //Imprimimos el valor de la variable
  }
  numeroInicial++; // Incrementamos de uno en uno nuestra variable inicial
}

/*

Ingresamos un 5
Inicial vale 1
1 es menor o igual a 5? si
entonces dividimos 1 entre 2. El residuo es diferente de 0? si
entonces imprimimos el inicial que es 1
termina el bucle, imprimimos el numero incial que es 1
sumamos uno al inicial
inicial ahora vale 2

Ingresado limte 5
    Incial ahora vale 2
    2 es menor o igual a 5? si
    entonces dividimos 2 entre 2. El residuo es diferente de 0? no
    No imprimimos el valor del inicial
    Sumar uno al incial
    inicial vale 3

Ingresado es 5
    Inicial vale 3
    3 es menor o igual que 5? si
    entonces procedemos a dividir. El residuo de 3 entre 2 es diferente de 0? si
    entonces imprimimos el numero inicial que es 3.
    Termina el bucle, imprimimos el numero inicial que es 3.
    Inicial ahora vale 4

    Ingresado es 5
    Inicial vale 4
    4 es menor o igual que 5? si
    entonces procedemos a dividir. El residuo de 4 entre 2 es diferente de 0? no
    Entonces no imprimimos el numero inicial que es 4.
    Termina el bucle, no imprimimos el numero inicial que es 4.
    Inicial ahora vale 5

    Ingresado es 5
    Inicial vale 5
    5 es menor o igual que 5? si, es igual.
    entonces procedemos a dividir. El residuo de 5 entre 2 es diferente de 0? si
    entonces imprimimos el numero inicial que es 5.
    Termina el bucle, imprimimos el numero inicial que es 5.
    Inicial ahora vale 6

    Ingresado es 5
    Inicial vale 6
    6 es menor o igual que 5? no
    Termina el bucle, no imprimimos el numero inicial que es 6.
    Termina el programa.

*/


/*

Do While (HACER MIENTRAS O HACER HASTA)

El bucle do while nos sirve para ejecutar una sentencia especififcada hasta que la condicion de aprobacion se evalua como falsa. La condicion se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion.


Estructura basica de un do while

palabraReservada do{
    //Codigo a ejecutar
}
while(condicion);

*/

//Ejemplo 1

let numerito = 0; //Declaramos la variable en 0

do{//Esto se hara...
    console.log("El numero es: " + numerito);//imprimimos
    numerito ++; //aumentamos de 1 en 1
}

while (numerito <=10);//...hasta que el numero sea menor o igual a 10


//While vs Do While

console.log("While");

let numeroWhile = 0; //inciamos en 0
//imorime aca

while (numeroWhile <5){ //mientras variable sea menor a 5
    numeroWhile ++; //la incremento en 1
    console.log(numeroWhile); //la imprimo
    
}



console.log("Do WHile");
let numeroDoWhile = 0; //inciamos en 0
do{ //hacemos esto...
    console.log(numeroDoWhile); //imprimir
    numeroDoWhile ++; //aumentar en 1
}
while (numeroDoWhile<5);//...mientras numero sea menor a 5


/*

Sentencia FOR (para)

Este ciclo sirve para iterar sobre una seccion de una variable. Es diferente al while por que le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos. Para esto tenemos tres elementos:


- El valor inicial de la variable que vamos a iterar (i = 0)
- La condicion que tiene que cumplirse para que el bucle se siga ejecutando (i <5)
- La operacion que se realiza una vez que termina el bucle (i++)

Estructura basica del for:

for (valor inicial, condicion, operacion){

}

*/

//Ejemplo: 

console.log("For");
for (let i = 0; i < 10; i++){
console.log(i);
}

//let i=0 es mi valor inicial
// i < 5 establece la condicion para que el bucle se siga ejecutando
// i++ incrementa el valor en 1


let animalitosDelBosque =["ardillas", "conejos", "venados", "osos", "mariposas"];

//in: posiciones EN el arreglo

for (posiciones in animalitosDelBosque){
    console.log(posiciones)
}
//of: valores DEL arreglo
for (valores of animalitosDelBosque){
    console.log(valores)
}

// for in (lo que vamos a buscar en el arreglo)
// for of (lo que vamos a buscar del arreglo )
// //ejercicio de arreglos 
// 1
// mangas= ["the boxer","one punch man","super campeones","hajime no hippo"];
// console.log(mangas)
// 2
// var top5PeliculasAnime = ["me quiero comer tu pancreas","your name","La tumba de las luciernagas","El castillo vagabundo","El viaje de chihiro"]
// console.log(top5PeliculasAnime);
// 3
// listaDePeliculas = ["Whiplash", "Django", "Star Wars", "Toy Story", "Batman"];
// console.log(listaDePeliculas);
// 4
// marcasDeTelefonos = ["Samsung","Oppo","Motorola","Xiaomi","Iphone"];
// console.log(marcasDeTelefonos);
// 5
// ListaDeAnimes = ["Dragon Ball Z", "One Piece", "Digimon", "Naruto Shippuden", "Pokémon"];
// console.log(ListaDeAnimes);
// 6
// var cancionesKanye = ["Bound 2", "Fade", "Last Call", "Wolves", "Saint Pablo", "New Slaves", "I AM A God"];
// console.log(cancionesKanye);
// 7
// marcasDeGuitarras = ["Fender", "Gibson", "Epiphone", "Yamaha", "ESP", "Ibanez", "Gretsch", "Paul Reed Smith"];
// console.log(marcasDeGuitarras);
