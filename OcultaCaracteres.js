//  Em diversas situações, temos dados sensíveis
// que não devem ser visíveis para qualquer
// pessoa. Como números de um cartão de
// crédito por exemplo. Então, mascaramos os
// números iniciais.
//  Com isso, escreva uma função que recebe
// uma string como parâmetro.
//  Retorne todos os caracteres iniciais alterados
// para asterisco (*), exceto espaços, deixando
// apenas os 4 últimos caracteres visíveis.

function ocultaCaracteres(numeroCartao){
    let numeroMascarado = "";
    const ultimosCaracteres = numeroCartao.substring(numeroCartao.length - 4)

    for (let i = 0; i < (numeroCartao.length - 4); i++){
        if (numeroCartao[i] == " ") {
            numeroMascarado += numeroCartao[i];
        } else {
            numeroMascarado += "*";
        }
    }

    return numeroMascarado + ultimosCaracteres;
}


console.log(ocultaCaracteres("5569 8432 3724 5837"));
console.log(ocultaCaracteres("4539 0947 1885 4826"));
