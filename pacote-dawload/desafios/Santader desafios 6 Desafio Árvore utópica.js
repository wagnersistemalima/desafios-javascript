// Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento, e retorne a altura resultante da árvore de Laura.
// A descrição do desafio informa que uma muda da árvore utópica com um metro de altura foi plantada no início da primavera e pergunta: qual seria o tamanho dessa árvore após n ciclos de crescimento? Por exemplo, se a árvore passou por cinco ciclos de crescimento (n = 5), sua altura final deveria ser 14 metros, como informa a tabela abaixo:

function alturaArvoreUtopica(variavel) {
    var arvore = 1;                            //se a árvore não passou por nenhum ciclo, sua altura é igual à inicial
    for(var i = 0; i < variavel; i = i + 1) {
        if(i & 1) {                                // começou o ciclo duvida (&) é a mesma coisa == porem nao aceitam
            arvore += 1;                           // estação do verao crece um metro
        }
        else {
            arvore *= 2;                           // estação da primavera dobra o tamnaho
        }
    }return arvore;
}
console.log(alturaArvoreUtopica(7))