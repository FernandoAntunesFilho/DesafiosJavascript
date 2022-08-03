// Escreva uma função que recebe dois arrays
// como parâmetros.
// Retorne um único array contendo os valores
// dos dois arrays concatenados, removendo
// valores duplicados, caso existam.

const juntaArrays = (arrayA, arrayB) => {
    const arrayAB = [...arrayA, ...arrayB]
    return [...new Set(arrayAB)];
}

console.log(juntaArrays([1, 2, 3], [3, 4, 5]));
// [1, 2, 3, 4, 5]

console.log(juntaArrays([6, 7], [8, 9]));
// [6, 7, 8, 9]

console.log(juntaArrays([-2, -1, 0, 1, 2], [-1,1, 2, 3]));
// [-2, -1, 0, 1, 2, 3]
