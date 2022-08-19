// programa paar emular una calculadora

const sumar = (num1,num2) =>{
    return num1+ num2;
}

const restar = (num1,num2) =>{
    return num1 - num2;
}
const multiplicar = (num1,num2) =>{
    return num1 * num2;
}
const dividir = (num1,num2) =>{
    return num1 / num2;
}
// Necesito crear una constante del tipo objeto, donde voy a almacenar variables que 
// quiero testear

const operaciones = {
    sumar,
    restar,
    multiplicar,
    dividir,
}

module.exports = operaciones;