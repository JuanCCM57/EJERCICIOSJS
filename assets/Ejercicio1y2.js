var nombre = "juan";
var ubicacion = "monterrey";
var pasatiempo = "calistenia";

function idcard(x,y,z){
    nombre=x;
    ubicacion=y;
    pasatiempo=z;
    console.log(`${nombre},${ubicacion},${pasatiempo}`);
}
idcard(nombre,ubicacion,pasatiempo)
//
function edadmascota(edadhumana){
    var nombreperro= prompt("nombre del perro")
    const perro=7;
    let edadperro= prompt("edad del perro");
    var resultado= edadperro*perro;
    return `la edad de tu perro ${nombreperro} es ${resultado}`
}
console.log(edadmascota())