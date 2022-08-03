// Escreva uma função que recebe dois
// parâmetros (a, b), sendo a um objeto e b uma
// string.
// Retorne true se o objeto a conter a
// propriedade/chave com o nome passado em
// b.
// Caso contrário, retorne false.

const encontraChave = (objeto, chave) => {
    const chaves = Object.keys(objeto);
    return chaves.includes(chave);
}

console.log(encontraChave({ a: 1, b: 2, c: 3 }, "b"));
// true

console.log(encontraChave({ x: "a", y: "b", z: "c" }, "a"));
// false

console.log(encontraChave({ x: "a", y: "b", z: "c" }, "z"));
// true
