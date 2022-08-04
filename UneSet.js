// Escreva uma função que recebe dois Set() (a,
// b) como parâmetros, unor os dois em um novo
// Set() e retornar o item criado.

const uneSet = (setA, setB) => {
    return new Set([...setA, ...setB]);
}

console.log(uneSet(new Set("123"), new Set("234")));
// Set {'1', '2', '3', '4'}

console.log(uneSet(new Set([1, 2, 3]), new Set([3, 4, 5])));
// Set {1, 2, 3, 4, 5}

console.log(uneSet(new Set([false, false, NaN]), new Set([true, true, NaN])));
// Set {false, NaN, true}
