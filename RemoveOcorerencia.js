//  Escreva uma função que recebe um array de
// números.
//  Encontre e retorne o número que aparece uma
// quantidade ímpar de vezes dentro do array.

function removeOcorrencia(listaDeNumeros) {
  let ocorrenciasDeNumeros = {};

  listaDeNumeros.forEach((numero) => {
    ocorrenciasDeNumeros[numero] = (ocorrenciasDeNumeros[numero] || 0) + 1;
  });

  let chaves = Object.keys(ocorrenciasDeNumeros);

  chaves.forEach((chave) => {
    if (ocorrenciasDeNumeros[chave] % 2 !== 0) console.log(chave);
  });
}


removeOcorrencia([1]);
removeOcorrencia([0, 3, 3]);
removeOcorrencia([4, 2, 2, 4, 4]);
