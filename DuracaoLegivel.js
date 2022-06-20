// Escreva uma função que recebe um número
// como parâmetro.
// O número representa uma quantidade de
// segundos. Retorne uma string em um formato
// legível.
// Por exemplo, 3662 segundos deve retornar "1
// hora, 1 minuto e 2 segundos".

function durationFormated(seconds) {
    let frase = "";
    const data = new Date(0, 0, 0, 0, 0, 0);
    data.setSeconds(parseInt(seconds));

    if (data.getHours() > 0) {
        frase = `${data.getHours()} hora(s), `;
    };

    if (data.getMinutes() > 0) {
        frase += `${data.getMinutes()} minuto(s) e ${data.getSeconds()} segundo(s)`
    } else {
        frase = `${data.getSeconds()} segundo(s)`
    }

    return frase;
}


console.log(durationFormated(62));
// 1 minuto(s) e 2 segundo(s)

console.log(durationFormated(120));
// 2 minuto(s)

console.log(durationFormated(3662));
// 1 hora(s), 1 minuto(s) e 2 segundo(s)
