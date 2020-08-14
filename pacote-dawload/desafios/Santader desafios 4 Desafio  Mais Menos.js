// Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:
// na primeira posição, a fração de números que são positivos
// na segunda posição, a fração de números que são zero
// na última posição, a fração de números que são negativos
// Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25], devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.

var array = [1, 2, 0, -1]

function maisMenos(lista) {
    var lista2 = [];
    var contadorPositivo = 0;
    var contadorNegativo = 0;
    var contadorNeutro = 0;    
    for(var i = 0; i < lista.length; i = i + 1) {
        if(lista[i] > 0) {
            contadorPositivo += 1;    
        }
        if(lista[i] < 0) {
            contadorNegativo += 1;
        }
        if(lista[i] == 0) {
            contadorNeutro += 1;
        }
    }
    contadorPositivo /= lista.length;
    contadorNegativo /= lista.length;
    contadorNeutro /= lista.length;
    lista2.push(contadorPositivo, contadorNeutro, contadorNegativo);
    return lista2;
}

console.log(maisMenos(array))