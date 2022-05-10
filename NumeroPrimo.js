//  Escreva uma função que recebe um numero
// como parâmetro.
//  Retorne true se o número for primo
// ou false caso contrário.

function numeroPrimo(numero){
    if (numero <= 1) return false;

    for (let i = 2; i < numero; i++){
        if (numero % i === 0) return false;
    }

    return true;
}


console.log(numeroPrimo(0));
console.log(numeroPrimo(1));
console.log(numeroPrimo(2));
console.log(numeroPrimo(73));
console.log(numeroPrimo(75));
console.log(numeroPrimo(-1));
