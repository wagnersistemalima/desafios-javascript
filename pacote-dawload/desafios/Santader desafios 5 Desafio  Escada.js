// Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente a escada correspondente. Não esqueça que o espaço " " faz parte da resposta :)

function escada(numero) {
    var desenho = "#";
    var lista = [];
    var controle = "";
    for(var i = 1; i <= numero; i = i + 1) {
        controle = " ".repeat(numero - i);
        desenho = "#".repeat(i);
        lista.push(controle + desenho);
    }
    return lista;
    
}
console.log(escada(5))