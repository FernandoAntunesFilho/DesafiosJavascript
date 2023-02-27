// Escreva uma função que recebe um array de
// números. Entre os números recebidos, existe
// apenas um número que não é repetido.
// Encontre e retorne esse número.

const encontraNumeroUnico = (numeros) => {
    let numeroUnico = [];
    let index = 0;
    let elemento = numeros[index];
    let encontrado = false;

    while (encontrado == false) {
        numeroUnico = numeros.filter((numero) => {
            return numero == elemento;
        });

        if (numeroUnico.length == 1) encontrado = true;
        elemento = numeros[index++];
    }

    return numeroUnico[0];
}

console.log(encontraNumeroUnico([1, 1, 2, 3, 3]));
// 2

console.log(encontraNumeroUnico([0, 1, 9, 9, 0]));
// 1

console.log(encontraNumeroUnico([7, 6, 8, 7, 8, 7]));
// 6
