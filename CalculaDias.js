// Escreva uma função que recebe duas
// datas como parâmetro e retorne o
// número de dias entre as datas.

const calculaDatas = (dataInicial, dataFinal) => {
    const diferencaMilisegundos = dataFinal - dataInicial;
    const diferencaDias = diferencaMilisegundos / (1000*60*60*24)

    return diferencaDias;
}

console.log(calculaDatas(
    new Date("2022-04-01"),
    new Date("2022-04-07")
));
// 6

console.log(calculaDatas(
    new Date("2021-12-24"),
    new Date("2022-04-06")
));
// 103
