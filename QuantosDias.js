// Escreva uma função que recebe duas
// datas como parâmetro e retorne o
// número de dias entre as datas.

const quantosDias = (dataA, dataB) => {
    const milisegundosDia = 1000 * 60 * 60 * 24;
    const dias = (dataB.getTime() - dataA.getTime()) / milisegundosDia;
    return dias;
}

console.log(quantosDias(
    new Date("2022-04-01"),
    new Date("2022-04-07")
));
// 6

console.log(quantosDias(
    new Date("2021-12-24"),
    new Date("2022-04-06")
));
// 103
