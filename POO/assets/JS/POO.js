/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa

Elementos de la Programacion Orientada a Objetos

    - Clases: Plantilla que nos sirve para crear objetos. 
    - Objetos: Elementos creados a partir de la plantilla.
    - Propiedades o atributos: Informacion que tiene un elemento.
    - Metodos o funciones: Lo que hacen y como lo hacen. (accines que puede realizar)
    - Constructores: Son quienes construyen al objeto tomando en cuanta a la plantilla
    - Instanciar: Crear o materializar el objeto.
    

Ejemplo de los gatitos:

    - Mama y papa gatitos: Clase
    - Gatitos bebes: Objeto
    - Color de los gatitos: Atributos o caracteristicas
    - Maullar y ronronear: Metodos o funciones
    - Tener un gatito para darle todo nuestro amor: Instanciacion o materializacion


Ejemplo de las casas:
    
    - Plano de la casa: Clase o plantilla
    - Casitas: Objetos
    - Cantidad de niveles que hay en una casa: atributos
    - Abrir estacionamiento: Metodo o funcion
    - Personal de construccion: Constructores
    - Tener la casa lista para vivir: Instanciacion o materializacion


*/

//Ejemplo de los gatos
 const gatito ={
    nombre: "felix",
    color: "Naranja",
    peso: "10kg",
    edad: "5 años",
    colorOjos: "verdes",
    raza: "fold escoses",
    sexo: "hembra",
    vacunas: "true",
    numeroBigotes: "20",
    tipoPelo: "largo",
    manchas: "true",    
 };

 console.log(gatito);
 console.log(felix.nombre);
 console.log(felix.raza);
 console.log(felix.vacunas);
 console.log(felix.numeroBigotes);
 
//Plantilla para crear muchos gatitos

//1.- Defino mi plantilla con las propiedades como variables, para despues agregar valores
class gatitoo {
    nombre = "";
    color = "";
    edad = 0;
    raza = "";


//3. Crear un constructor
constructor(nombre, color, edad, raza) { //Necesitamos pasar los parametros
    this.nombre = nombre;
    this.color = color;
    this.edad = edad;
    this.raza = raza;
}// fin de constructor
}// fin de la clase

//this (este o esto): Nos va a indicar el lugar donde estamos (ciudad o en el campo).
//  Necesitamos saber que esta palabra es reservada, y nos ayuda a saber el aqui y el ahora.
//  Hace referencia a la clase en la questamos, y los objetos que estamos creado.



//2.- Defino mis metodos COMO FUNCIONES, por que con estas funciones podemos realizar acciones

function maullar(){
console.log ("Miau");
}

function dormir(){
console.log ("ZZZZZZZ");
}

function ronronear(){
    console.log ("rrrrrrrrr");
}

//4. crear gatitos
let kitty = new gatito("kitty","blanco",666,"japones");
let garfield = new gatito ("garfield", "chettos",15,
"persa");

console.log(kitty);
console.log(garfield);

console.log(kitty.maullar);

//gatos
let jorge = new gatito("jorge","blanco",7,"mexicano");
let yuca = new gatito ("yuca", "cafe",13,
"yucatan");

console.log(jorge);
console.log(garfield);

jorge.maullar();