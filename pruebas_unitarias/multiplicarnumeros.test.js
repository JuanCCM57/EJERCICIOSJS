const multi = require('./multiplicarnumeros');
test("Deberá multiplica dos números positivos", ()=>{
    expect(multi.multiplicacion(5,6)).toBe(30);
});

test ("Debería multiplica dos números negativos", ()=>{
    const multiplica = multi.multiplicacion(-5,-8);
    expect(multiplica).toBe(40);
});

test ("Debería multiplica un positivo y un negativo", ()=>{
    const multiplica = multi.multiplicacion(-10,5);
    expect(multiplica).toBe(-50);
});

test ("Debería multiplica si un datos es númerico y otro tipo string", ()=>{
    const multiplica = multi.multiplicacion("4",5);
    expect(multiplica).toBe(20);
});

test ("Debería multiplica si los dos números son de punto flotante", ()=>{
    const multiplica = multi.multiplicacion(5.6,5.5);
    expect(multiplica).toBeCloseTo(30.8);
});