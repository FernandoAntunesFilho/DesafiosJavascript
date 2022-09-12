// Escreva uma função que receba como parâmetro 2 arrays:
// Primeiro array com uma lista de números apostados na loteria;
// Segundo array com os numeros sorteados na loteria.
// Retorne uma lista com os números acertados e a quantidade de acertos.


const ConferirResultadoLoteria = (aposta, numerosSorteados) => {
    const acertos = [];
    aposta.forEach(numeroApostado => {
        if (numerosSorteados.includes(numeroApostado)) acertos.push(numeroApostado);
    });

    if (acertos.length > 10) {
        return "Acertos: " + acertos + ". Total: " + acertos.length + " <=== PRÊMIO!!!";    
    }
    return "Acertos: " + acertos + ". Total: " + acertos.length;
}

const lotofacil2610Resultado = [1, 3, 5, 7, 8, 9, 10, 11, 12, 15, 16, 17, 20, 22, 24];
console.log (lotofacil2610Resultado);
console.log(ConferirResultadoLoteria([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 17, 19, 21, 25], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([3, 4, 5, 6, 9, 10, 11, 12, 13, 15, 17, 18, 19, 21, 22, 24, 25], lotofacil2610Resultado));

console.log(ConferirResultadoLoteria([2, 3, 6, 7, 8, 10, 11, 12, 13, 14, 17, 18, 19, 21, 22, 24], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([1, 2, 5, 6, 7, 9, 10, 12, 16, 17, 18, 21, 22, 23, 24, 25], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([1, 2, 3, 4, 5, 7, 8, 10, 11, 15, 16, 18, 19, 20, 22, 25], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([1, 2, 4, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 23, 24, 25], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([2, 4, 7, 8, 11, 12, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([1, 4, 5, 6, 7, 10, 11, 12, 13, 15, 17, 18, 19, 20, 21, 25], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([1, 2, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 18, 19, 24, 25], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([3, 4, 6, 8, 9, 10, 11, 12, 13, 15, 19, 20, 21, 22, 23, 25], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([1, 2, 4, 5, 7, 8, 11, 12, 13, 14, 17, 18, 19, 20, 21, 25], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([1, 2, 5, 6, 7, 9, 10, 15, 16, 17, 18, 19, 21, 22, 23, 24], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([1, 3, 4, 6, 7, 9, 13, 14, 16, 17, 18, 19, 21, 22, 24, 25], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([1, 3, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 19, 20, 21, 22], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([2, 5, 6, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([1, 2, 4, 5, 7, 8, 9, 12, 13, 14, 17, 19, 21, 22, 23, 24], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([2, 4, 5, 7, 8, 9, 12, 15, 16, 17, 18, 19, 20, 22, 23, 24], lotofacil2610Resultado));
console.log(ConferirResultadoLoteria([2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21], lotofacil2610Resultado));
