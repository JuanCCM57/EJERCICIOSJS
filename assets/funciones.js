

//1. utilizar keyword funtion
//2. nombra nuestra funcion
//3. utilizar () y abrir y cerrar la funcion {}

function myFuntion() {
    //Aqui va el cuerpo de la funcion
    console.log("hola mundo");
}
myFuntion();
//myname();
function myName(){
    let name = "juan cristobal";
    console.log(name);
}
//variable con scope local
function scopeFuntion(){
    let local = "Esto se encuentra dentro de la funcion";
    console.log(local);
}
//scopeFunction();
//console.log(local);}
var nombre = "juan cristobal";

function globalscope(){
    console.log(nombre);
}

globalscope();
