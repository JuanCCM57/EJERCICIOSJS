/*
Una prueba unitaria es una prueba automatizada que tiene como objetivo verificar la funcionalidad 
de una unidad de codigo. Entendemos "unidad de codigo" como la parte mas pequeña testeable de una aplicacion,
pueden ser:

    - Rutinas
    - Funciones
    - Metodos

Ventaja de las pruebas unitarias.
El escribir pruebas unitarias nos va a permitir asegurarnos que el código funciona segun lo esperado,
además de encontrar errores de forma mucho mas facil y poder realizar modificaciones sin comprometer 
otros elementos del programa. Tambien nos permite garantiazar que cuando el codigo siga evolucionando
o escalando y se implementen nuevas caracteristicas,
las caracteristicas mas antiguas siguen funcionando como antes y no se rompan debido a los nuevos cambios.
Las pruebas unitarias de JavaScript normalmente se ejecutan en el explorador o en el front-end,
 y al realizarlas debemos tener en cuenta los siguientes aspectos:

    - La caracteristica que se está probando
    - El resultado final
    - El resultado esperado

 */
function promedio (calificacion1,calificacion2,calificacion3) {
    let calificacion1 = (calificacion1 + calificacion2 +
        calificacion3) / 3;
        if (calificacion1 >=6){
            console.log("felicitaciones, estas aprobado.");
        }else (console.log("necesitas estudiar mas , no has aprobado."));      
}
promedio(0,7,0);

// Consideraciones para que JEST trabaje

// 1.- Almacenar las funciones a testear en una constante del tipo objeto
// 2.- Exportar estas funciones, para que esten disponibles en cualquier lugar 
// 3.- Importar o al menos agregar la direccion de donde vienen esas funciones
