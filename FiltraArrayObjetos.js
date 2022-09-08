// Escreva uma função que recebe um array de
// objetos e um termo de busca. Retorne o array
// filtrado, de acordo com o termo buscado.
// A função não deve lebar em consideração
// letras maiúsculas e minúsculas.

const itensFiltrados = (array, termoDeBusca) => {
  return array.filter((person) => {
    return (
      person.firstName.toLowerCase().includes(termoDeBusca.toLowerCase()) ||
      person.lastName.toLowerCase().includes(termoDeBusca.toLowerCase())
    );
  });
};

const users = [
  { firstName: "Fernando", lastName: "Antunes" },
  { firstName: "John", lastName: "Robert" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Albert", lastName: "Carter" },
];

console.log(itensFiltrados(users, "fe"));
// [
//     { firstName: "Fernando", lastName: "Antunes" }
// ]

console.log(itensFiltrados(users, "er"));
// [
//     { firstName: "Fernando", lastName: "Antunes" },
//     { firstName: "John", lastName: "Robert" },
//     { firstName: "Albert", lastName: "Carter" }
// ]

console.log(itensFiltrados(users, "js"));
// []
