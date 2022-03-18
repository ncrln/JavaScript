/*Os triângulos podem ser classificados em 3 tipos quanto 
ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes. 

Crie uma função que recebe os comprimentos dos três lados 
de um triângulo e retorne sua classificação quanto ao tamanho
de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de
existência de um triângulo).*/

function tipoTriangulo (a, b, c){
    if(a == b && b == c){
        console.log('Triângulo Equilátero')
    } else if (a == b || a == c || b == c){
        console.log('Triângulo Isósceles')
    } else{
        console.log('Triângulo Escaleno')
    }
}

tipoTriangulo(1, 1, 1)
tipoTriangulo(1, 2, 2)
tipoTriangulo(1, 2, 3)
