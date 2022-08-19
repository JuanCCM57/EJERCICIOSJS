//forma normal de felipe
function sumafelipe(a,b){
    return a + b
}

//forma pro de jaciel
sumajaciel = (a,b) => a+b

//nombrefunction = (parametros) => (que esperamos recibir)

//forma mas o menos de felipe
const sumaejemplo = (a,b) =>{
    return a-b
}
sumaejemplo(1,3);

//function sumav2
const sumaejemplo2 = (a,b) =>{
    return a-b
}

if (sumaejemplov2(1,3)!=4){
    console.error("la suma de 1 y 3 deberia ser 4");
}

//function sumav3
const sumav3 = (a,b) =>{
    return a-b
}

console.assert(suma (1,3) === 4, "la suma de 1y 3, deberia ser 4");
//console.assert nos ayuda a mostrar un mensaje de error en la consola si la afirmacion es falsa.
// Si la afirmacion es verdadera, no se mostrara ningun mensaje. OJO,
// segun la documentacion de mozilla, esta caracteristica no esta disponible en todos los navegadores,
// por lo que no es recomendable usarla.
//Escenarios de prueba
const escenarios = [
    { a: 0, b: 0, resultado: 0 },
    { a: 1, b: 3, resultado: 4 },
    { a: -3, b: 3, resultado: 0 },
]

//Para cada esceneario, se recorre y de cada esceneario se recupera la a, la b y el resultado esperado, y se ejecuta la funcion sumav4 con los parametros a y b.
escenarios.forEach(revisar => {
    const { a, b, resultado } = revisar

    console.assert(
        sumav3 (a, b) === resultado,
        "La suma de " + a + " y " + b + " deberia ser " + resultado
    )
})

console.log("La cantidad de escenarios pasados es: ", escenarios.length);

/*
 
    Test Runner (Herramientas para hacer pruebas unitarias)

    - Mocha
    - Ava
    - Jest

Jest es un marco de pruebas de JavaScript mantenido por Facebook, y esta enfocado en la simplicidad. 
Funciona con proyectos que utilizan Babel, TypeScript, Node.js, React, Angular y Vue.js.
su objetivo es trabajar de inmediato y sin configuracion.
Estaba pensado originalmante para trabajar en el lado del cliente, 
pero puede ser usado en cualquier lado.
 */