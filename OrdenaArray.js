// Escreva uma função que recebe um array a e
// uma flag order com valor padrão 'asc'. Caso o
// valor order seja 'asc' retornar o array
// ordenado em ordem aecendente e caso seja
// 'desc' retornar em ordem descendente.

const ordenar = (array, order = "asc") => {
    if (order == "desc") return array.sort().reverse();
    return array.sort();
}

console.log(ordenar([2, 3, 1], "asc"));
// [1, 2, 3]

console.log(ordenar([6, 2, 8, 1, 5], "desc"));
// [8, 6, 5, 2, 1]

console.log(ordenar(["uva", "maçã", "laranja"], "asc"));
// ['laranja', 'maçã', 'uva']

console.log(ordenar(["t", "a", "s", "z", "m"]));
// ['a', 'm', 's', 't', 'z']
