// Escreva uma função que recebe dois arrays
// (a, b) como parâmetros e crie um objeto onde
// as propriedades/chaves sejam os itens do
// array a e os valores sejam os itens do array b.
// Retorne o objeto.

const criaObjeto = (arrayChave, arrayValor) => {
    if (arrayChave.length != arrayValor.length) return "Não é possível criar o objeto";

    const novoObjeto = {};
    for (let i = 0; i < arrayChave.length; i++) {
        novoObjeto[arrayChave[i]] = arrayValor[i];
    }

    return novoObjeto;
}

console.log(criaObjeto(["a", "b", "c"], [1, 2, 3]));
// {a: 1, b: 2, c: 3}

console.log(criaObjeto(["w", "x", "y", "z"], [10, 11, 12, 13]));
// {w: 10, x: 11, y: 12, z: 13}

console.log(criaObjeto([1, "b"], ["a", 2]));
// {w: 10, x: 11, y: 12, z: 13}
