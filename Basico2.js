// Escreva uma função que recebe um
// parâmetro e retorna o tipo do valor recebido
// nesse parâmetro.

const tipo = (valor) => {
    return typeof valor;
}

console.log(tipo(1));
// number

console.log(tipo(false));
// boolean

console.log(tipo({}));
// object

console.log(tipo("Hello World"));
// string

console.log(tipo(["Hello World"]));
// object
