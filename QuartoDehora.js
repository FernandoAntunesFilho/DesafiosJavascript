// Escreva uma função que recebe uma data como parâmetro.
// A função deve retornar o próximo quarto de hora mais próximo em minutos.
// Por exemplo, se uma data tem a hora 12:01, a função deve retornar 15.


function QuartoDeHora(dataHora){
    let minuto = dataHora.getMinutes();
    const quartos = [15, 30, 45];
    let quarto = 0;

    for (let i = minuto; i <= 60; i++){
        if (quartos.includes(i)) {            
            quarto = i;
            break;            
        }
    }
    
    return quarto;
}

console.log(QuartoDeHora(new Date(2022, 4, 21, 6, 14, 00)));
console.log(QuartoDeHora(new Date(2022, 4, 21, 6, 31, 00)));
console.log(QuartoDeHora(new Date(2022, 4, 21, 6, 22, 00)));
console.log(QuartoDeHora(new Date(2022, 4, 21, 6, 52, 00)));
