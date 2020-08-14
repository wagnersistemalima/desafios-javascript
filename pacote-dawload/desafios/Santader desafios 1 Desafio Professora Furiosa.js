// Escreva as seguintes funções: 1. acontece, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 2. aberturas, que utiliza um array com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias em que as aulas aconteceram e quais não. Por exemplo:

function acontece(lista, quantidadeMinima) {
    contador = 0;
    for(var i = 0; i < lista.length; i = i + 1) {
        if (lista[i] <= 0) {
            contador += 1;
        }if (contador >= quantidadeMinima) {
            return true;
        }
    }return false;
}
// não precisa mostrar
var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaTerca = [9, 5, 2, -1];
var alunosDaQuarta = [8, 6, -5, 2];

console.log(acontece(alunosDaSegunda, 2));
console.log(acontece(alunosDaTerca, 2));
console.log(acontece(alunosDaQuarta));
//
function aberturas(listaToda, quantidadeMinima) {
    var resposta = [];
    for(var i = 0; i < listaToda.length; i = i + 1) {
        resposta.push(acontece(listaToda[i], quantidadeMinima));
    }
    return resposta;
}

// não precisa mostrar
console.log(aberturas([[10, -5, 3, 0], [9, 5, 2, -1], [8, 6, -5, 2]], 2))
