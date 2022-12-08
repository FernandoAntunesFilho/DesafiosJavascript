// Escreva uma função que enconte todos os
// anagramas de uma palavra em um array.
// Você receberá duas entradas, uma palavra e
// um array com palavras. Você deve retornar
// um array de todos os anagramas ou um array
// vazio se não houver nenhum.

let encontrarAnagramas = (palavra, anagramas) => {
    let anagramasEncontrados = [];

    anagramas.forEach(anagrama => {
        let anagramaArray = [...anagrama];

        for (let i = 0; i < palavra.length; i++){
            let anagramaIndex = anagramaArray.indexOf(palavra[i]);
            if (anagramaIndex > -1) anagramaArray.splice(anagramaIndex, 1);
        }
        
        if (anagramaArray.length == 0 && anagrama.length == palavra.length)
            anagramasEncontrados.push(anagrama);

    });

    return anagramasEncontrados;
}

console.log(encontrarAnagramas('abba', ['aabb', 'abcd', 'bbaa', 'bba']));
// ['aabb', 'bbaa']
console.log(encontrarAnagramas('racer', ['crazer', 'carer', 'racar', 'racer']));
// ['carer', 'racer']
console.log(encontrarAnagramas('laser', ['lazing', 'lazy', 'lacer']));
// []
