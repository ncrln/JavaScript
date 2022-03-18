/*Crie uma função que dado dois valores 
(passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function operacao (x, y){
    let soma =  x + y
    let sub = x - y
    let mult = x * y
    let div =  x / y

    return {soma, sub, mult, div}
}

console.log(operacao(2, 3))
