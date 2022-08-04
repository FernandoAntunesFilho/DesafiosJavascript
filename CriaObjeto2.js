// Escreva uma função que recebe dois arrays
// (a, b) como parâmetros e crie um objeto onde
// as propriedades/chaves sejam os itens do
// array a e os valores sejam os itens do array b.
// Retorne o objeto.

const criaObjeto = (arrayChave, arrayValor) => {
    const novoObjeto = {};
    for (let i = 0; i < arrayChave.length; i++) {
        novoObjeto[arrayChave[i]] = arrayValor[i] ? arrayValor[i] : null;
    }

    return novoObjeto;
}

console.log(criaObjeto(["a", "b", "c"], [1, 2, 3]));
// {a: 1, b: 2, c: 3}

console.log(criaObjeto(["w", "x", "y", "z"], [32, 11, 6, 2]));
// {w: 32, x: 11, y: 6, z: 2}

console.log(criaObjeto(["a", "b"], [1, 2, 3]));
// {a: 1, b: 2}

console.log(criaObjeto(["w", "x", "y", "z"], [32, 11]));
// {w: 32, x: 11, y: null, z: null}
