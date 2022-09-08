// Escreva uma função que recebe um array de
// cores em notação hexadecimal de 6 dígitos.
// Retorne a cor mais clara.

const corMaisClara = (cores) => {
    let corRGBMaisClara = 0;
    let corId = 0;
    cores.forEach((corHex, index) => {
        let corRGB = hexToRgb(corHex);
        corRGB = (corRGB[0] * 299 + corRGB[1] * 587 + corRGB[2] * 114) / 1000;

        if (corRGB > corRGBMaisClara) {
            corRGBMaisClara = corRGB;
            corId = index;
        }
    });

    return cores[corId];
};

const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

console.log(corMaisClara(["#001000", "#000000"]));
// "#001000"

console.log(corMaisClara(["#ABCDEF", "#123456"]));
// "#ABCDEF"

console.log(corMaisClara(["#00FF00", "#FFFF00"]));
// "#FFFF00"

console.log(corMaisClara(["#001000", "#000000", "#FAFF00", "#ABCDEF", "#123456", "#00FF00"]));
// "#FAFF00"
