// const nineros = false;
// const hambre = true;

// alert(nineros = hambre);//false

// alert(nineros + hambre);//true

//AND
// todas las condiciones deben ser true

//OR solo una condicion debe ser true
//true 

//NOT
//Es la negacion a la condicion
//true > false , false > true

// let hora = 3;

// if (hora == 8) {
// 	alert("Buen dia");
// }
// //
// var hora = 3;

// if (hora != 8) {
// 	console.log("Buen dia");
// }
//
var hungry = false;
if (hungry == true) {
	alert("Tengo mal del porky");
} else {

	alert("Two mimir");
}
//
var hour = 19;
if (hour <= 18) {
 alert("Todavía hay sol");
} else {
  alert("Tardes, ya");
}
//
var edad = 21;

if (edad >= 18) {
	alert("Crear cuenta");
} else {
	alert("bai bai");
}
//
var hora = 12;

if (hora <= 7 && hora > 0) {
	alert("Buenas madrugadas");
} else {
	alert("Que tenga un buen dia");
}
//////////////
var hora = 12;

// Verificar  24 >= hora > 0

if (hora > 0 && hora <= 24) {
	// Codigo
    
    if (hora < 7) {
    	alert("Buenas madrugadas");
    } else {
    	alert("Que tenga un buen dia");
    }
    
    
} else {
	alert("Su hora no es válida");
}

//ejercicio 1
var numero= promt("ingresa el numero");
if(numero % 2 == 0){
    alert ("el numero es par");
} else 
alert ("el numero es impar")
//ejercicio 2
var edad =prompt("Año de nacimiento")
if (edad <=2002) {
    alert("es mayor de edad")
}else {
    alert ("no es mayor de edad");
}

//
// var dia = new Date().getDay();

var dia = -2;
function evalDate(day) {
	switch(day){
	case 0:
		return "Domingo";
    case 1:
    	return "Lunes";
    case 2:
    	return "Martes";
    case 3:
    	return "Miercoles";
    case 4:
    	return "Jueves";
    case 5:
    	return "Viernes";
    case 6:
    	return "Sabado";
    default:
    	return "Su fecha no es válida";
	}
}

alert(evalDate(dia));
//////////////
//switch
//obtener la fecha actual
var fecha = new Date();
var ninero = prompt("ingrese su deposito");
function miCarrito(ninero){
    switch(ninero){
        case(ninero <=10):
        return"churrumais";
        brake;
        case(ninero <=50):
        return"McTrio";
        brake;
        case(ninero <=100):
        return"churrumais";
        brake;
        case(ninero <=500):
        return"churrumais";
        brake;
        default:
            return"no hay nineros";
    }
}