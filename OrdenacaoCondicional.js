//  Escreva uma função que recebe um array de números.
//  Ordene os números ímpares em ordem acendente e mantenha
// os números pares em suas posições originais.


function ordenacaoCondicional(arrayCompleto){
    let listaImpares = fazListaImparesOrdenada(arrayCompleto);
    let posicaoArrayImpar = 0;
    let listaOrdenadaCondicional = [];

    arrayCompleto.forEach(numero => {
        if (ehImpar(numero)){
            listaOrdenadaCondicional.push(listaImpares[posicaoArrayImpar]);
            posicaoArrayImpar++;
        } else {
            listaOrdenadaCondicional.push(numero);
        }
    });
    
    return listaOrdenadaCondicional;
}

function fazListaImparesOrdenada(array){
    let listaImpares = [];

    array.forEach(numero => {
        if (ehImpar(numero)) listaImpares.push(numero);
    });

    return listaImpares.sort();
}

function ehImpar(numero){
    if (numero % 2 != 0) return true;
    
    return false;
}

console.log(ordenacaoCondicional([7, 1]));
console.log(ordenacaoCondicional([5, 8, 6, 3, 4]));
console.log(ordenacaoCondicional([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
