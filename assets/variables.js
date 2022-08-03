// Mejores prácticas

// camelCase 
//  Utilizar mayusculas en la mitad de nuestras variables
// variableTriangulo, miNombre, miEdad, miDireccion

// Palabras reservadas
// No usar palabras reservadas para declarar una variable
// if, return, true, false, for, while, let, var, etc...
/*
var while;
var null ;
var if;
var true;
var false;
var var;
var const;
var let;
*/

// Seguir un standard personal

// Pueden contener numeros, letras, guion bajo, simbolo de dolar
var a;
var a1;
var a_Nombre;
var a$Direccion;


// Declaracion de variables
// Type Number
var edad = 24;
var peso = 78;
var miopia = 3;
var astigmatismo = 3;

// Type Boolean
var ciego = true;
var hambre = true;
var bateria = false;
var ia = true;


// Type String
var nombre = "Zabdiel Diaz";
var ciudad = 'Aguascalientes';
var nacionalidad = `Mexicano`;

// Type null
var ganasDeBibir = null;
var nineros = null;
var briAmonestaciones = null;

// Variables declaradas con un mismo valor
var x, y, z = 4;

// Variables undefined
var xx, yy, zz; 

// Variable tres = 4
//  var dos = tres
//  var uno = tres
var uno = dos = tres = 4;

// Escribir en una sola linea variables undefined de nuestro carrito de compras
var cereal,rollo,queso,leche,arroz,avena,pescado,plumas,tortillas,miel,chocolate,quesoamarillo;

//typeOf();
//nos indica el tipo de dato al que pertenece nuestra variable

var a = 2;
//undefined
typeof(a);
//'number'

var b = "2";
//undefined
typeof(b);
//'string'

var c = true;
//undefined
typeof(c);
//'boolean'

var d = null;
typeof(d);
//'object'  <objeto de JavaScript

//isNaN(d); es una funcion que nos permite verificar si la variable es un numero o no 
//false

//NaN es tal cual un tipo de dato en JavaScript
isNaN(NaN);
//true

var e = NaN;
//undefined
isNaN(e);
//true

typeof(e);
//'number'

//var a = 1;
//Nueva forma de declarar variables
var a = 1;
//nos permite modificar su valor actual sin restricciones
let a = 1;
//Constante
// Es una variable con un dato que no va cambiar
const a = 3;
//variables deben mantenerse con un solo valor
//no es posible cambiarles el valor posterior a su declaracion
const carros = ["BMW", "Volvo", "Mercedes", "Ford"];
const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];
const combinacion = [1, "Hola", null, "5"];



//Ejercicio 1
//string
var nombre = "juan";
var calle = "calle";
var pais = "pais";
var colonia = "colonia";
var domicilio ="domicilio";
var apellidos = "apelldios";
var pc = "pc";
var edad = "edad";
var color = "color";
var comida = "comida";
//number
var edad = 30;
var tamaño = 1.70;
var peso = 70;
var marcador = 0-2;
var medida = 30;
var numero = 20;
var alumnos = 50;
var carne = 30;
var velocidad=70;
var telefono=8187869494;
//booelan
var sueño = true;
var comida = true;
var mayor = false;
var menor = true;
var hambre = false;
var agua = false;
var energia = true;
var trabajo = true;
var limpieza = true;
var pc = true;