const sumaa = require('./sumarnumeros');

test("Deberá sumar dos números positivos", ()=>{
    expect(sumaa.sum(5,6)).toBe(11);
});

test ("Debería sumar dos números negativos", ()=>{
    const sum = sumaa.sum(-5,-8);
    expect(sum).toBe(-13);
});