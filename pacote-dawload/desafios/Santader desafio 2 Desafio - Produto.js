// Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.

// Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.

// Relembre sobre: como passar arrays, fazendo algo com cada elemento; como acumular cada elemento.

function produto(lista) {
    var calculo = 1;
    for(var i = 0; i < lista.length; i = i + 1) {
        calculo *= lista[i];
    }
    return calculo;
}

var array = [1, 2, 7, 2, 1, 2];
console.log(produto(array))