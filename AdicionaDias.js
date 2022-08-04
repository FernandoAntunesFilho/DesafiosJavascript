// Escreva uma função que recebe dois (a, b)
// onde a é um Date e b é um number.
// Adicione dias na data a, de acordo com o
// número passado em b.
// Retorne a nova data.

const adicionaDias = (data, dias) => {
    const novaData = new Date(data);
    novaData.setDate(data.getDate() + dias);
    return novaData;
}

console.log(adicionaDias(new Date("2022-04-05"), 6));
// 2022-04-11T00:00:00.000Z

console.log(adicionaDias(new Date("2021-12-24"), 110));
// 2022-04-13T00:00:00.000Z

console.log(adicionaDias(new Date("2022-04-11"), -10));
// 2022-04-01T00:00:00.000Z
