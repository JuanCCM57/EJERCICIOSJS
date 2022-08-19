//3.- Importar

// defino una constante con el nombre de la funcion a revisar, y de que ruta la voy a sacar o consultar

//barco que tiene 50000 termos en sus contenedores y que viene de China

const palindromo = require ('./palindromo');

//Con test, planeo 3 escenarios (pueden ser mas)

//1 escenArio donde si sea un palindromo TRUE
test ("Palindromo", () => {
    expect(palindromo.palindromo("Ana")).toBe(true);
} );

//2 escenario donde no ingrese nada FALSE
test ("Elemento vacio", () => {
    expect(palindromo.palindromo("")).toBe(true);
} );

//3 escenario donde lo que se ingresa no sea un texto, o peor aun, sea undefined FALSE
test ("Elemento undefined", () => {
    expect(palindromo.palindromo(undefined)).toBe(true);
} );