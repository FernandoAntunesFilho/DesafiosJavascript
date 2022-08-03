// Escreva uma função que recebe uma string
// como parâmetro. O valor dessa string será
// uma URL, podendo conter protocolo (http,
// https), subdomínios e caminhos após o domínio.
// Sua missão é fazer com que essa função
// extraia e retorne apenas o nome do domínio.

const domainName = (url) => {
    const posicaoFinalDominio = url.lastIndexOf(".");
    let posicaoInicialDominio = posicaoFinalDominio;

    for (let i = posicaoFinalDominio - 1; i >= 0; i--){
        if (url[i] != "." && url[i] != "/"){
            posicaoInicialDominio = i
        } else break;
    }

    return url.substring(posicaoInicialDominio, posicaoFinalDominio);
}

console.log(domainName("https://google.com"));
// google

console.log(domainName("https://chalenges.fabiobergmann.com/home"));
// fabiobergmann

console.log(domainName("instagran.ffln1-1.fna.fbcdn.net/"));
// fbcdn
