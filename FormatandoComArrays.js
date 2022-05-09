//  A partir de um array com nomes de pessoas,
// vamos formatar uma string similar ao sistema
// de curtidas do Facebook;

function formatandoComArray(nomes){
    let frase = "";

    switch(nomes.length) {
        case 0:
            frase = semCurtidas();
            break;
        case 1:
            frase = umaCurtida(nomes);
            break;
        case 2:
            frase = duasCurtidas(nomes);
            break;
        case 3:
            frase = tresCurtidas(nomes);
            break
        default:
            frase = maisTresCurtidas(nomes);
    }

    return frase;
}

function semCurtidas(){
    return "Ninguém curtiu ainda."
}

function umaCurtida(nomes){
    return `${nomes[0]} curtiu isso.`
}

function duasCurtidas(nomes){
    return `${nomes[0]} e ${nomes[1]} curtiram isso`
}

function tresCurtidas(nomes){
    return `${nomes[0]}, ${nomes[1]} e ${nomes[2]} curtiram isso.`
}

function maisTresCurtidas(nomes){
    return `${nomes[0]}, ${nomes[1]} e outras ${nomes.length - 2} pessoas curtiram isso.`
}


console.log(formatandoComArray([]));
console.log(formatandoComArray(["Peter"]));
console.log(formatandoComArray(["Jacob", "Alex"]));
console.log(formatandoComArray(["Max", "John", "Mark"]));
console.log(formatandoComArray(["Alex", "Jacob", "Mark", "Max"]));
