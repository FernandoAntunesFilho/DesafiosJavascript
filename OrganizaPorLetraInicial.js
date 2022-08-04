// Escreva uma função que recebe um array
// de strings como parâmetro.
// Agrupe as strings pela primeira letra.
// Retorne um objeto que contém chaves
// representando a primeira letra e os valores
// devem ser arrays das strings relativos às
// letras iniciais.

const organizaPorLetraInicial = (array) => {
  const porLetra = {};

  array.forEach((cidade) => {
    const letraInicial = cidade[0].toLowerCase();
    porLetra[letraInicial] = porLetra[letraInicial]
      ? [...porLetra[letraInicial], cidade]
      : [cidade];
  });

  return porLetra;
};

console.log(
  organizaPorLetraInicial([
    "Aracaju",
    "Florianópolis",
    "São Paulo",
    "Foz do Iguaçu",
    "São José",
    "Rio de Janeiro",
    "Blumenau",
    "Brasilia",
  ])
);
