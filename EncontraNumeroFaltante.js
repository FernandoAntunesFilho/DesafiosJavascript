// Você tem um array não ordenado contendo
// todos os números de 0 a 100. No entanto,
// falta um número. Escreva uma função para
// encontrar e retornar esse número.

function findMissingNumber(number){
    for (let i = 1; i <=100; i++){
        if (!numbers.includes(i)) return i;
    };

    return number;
  }

const numbers = [24, 88, 40, 43, 63, 18,
    54, 61, 93, 51, 15, 11, 14, 46, 47,
    44, 50, 73, 8, 71, 84, 9, 7, 72, 1,
    70, 89, 37, 10, 32, 75, 27, 85, 17,
    78, 68, 2, 81, 28, 91, 99, 98, 79,
    92, 94, 29, 3, 19, 30, 4, 69, 66, 57,
    20, 55, 90, 62, 31, 87, 59, 6, 86,
    34, 52, 76, 74, 95, 60, 65, 33, 64,
    16, 96, 12, 67, 39, 48, 13, 97, 41,
    80, 38, 45, 100, 82, 22, 35, 36, 49,
    77, 83, 53, 23, 5, 25, 26, 42, 58, 56];

console.log(findMissingNumber(numbers));
// Resultado: 21
