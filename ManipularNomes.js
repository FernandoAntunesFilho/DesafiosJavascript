// Escreva uma função que recebe dois
// parâmetros (fullname, flag).
// Se a flag for igual a "firstname", deve retornar
// apenas a primeira palavra do parâmetro
// full name.
// Se a flag for igual a "lastname", deve retornar
// todo o text, exceto a primeira palavra do
// parâmetro fullname.
// Se o parâmetro flag for vazio ou fullname
// conter apenas uma palavra, apenas retornar o
// conteúdo de fullname.

const manipulaNome = (fullname, flag) => {
    const indicePrimeiroEspaco = fullname.indexOf(" ");
    const indiceInicioSobrenome = indicePrimeiroEspaco + 1;
    const indicePrimeiroCaractere = 0;

    if (flag === "firstname") return fullname.substring(indicePrimeiroCaractere, indicePrimeiroEspaco);
    if (flag === "lastname") return fullname.substring(indiceInicioSobrenome, fullname.length);

    return fullname;
}

console.log(manipulaNome("John Williams Smith", "firstname"));
// John

console.log(manipulaNome("John Williams Smith", "lastname"));
// Williams Smith

console.log(manipulaNome("John Williams Smith"));
// John Williams Smith

console.log(manipulaNome("John", "lastname"));
// John
