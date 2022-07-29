// Escreva uma função que recebe três números
// positivos como parâmetro, representando
// valores RGB de 0 a 255. A função deve
// retornar a representação em hexadecimal.

const rgb = (red, green, blue) => {
    if ((red > 255 || red < 0) ||
        (green > 255 || green < 0) ||
        (blue > 255 || blue < 0)) return "Código RGB inválido!"

  const tabelaHexadecimal = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };
  const RGB = [red, green, blue];
  let codigoHexadecimal = "#";

  RGB.forEach((cor) => {
    const quociente = Math.floor(cor / 16);
    const resto = cor % 16;
    codigoHexadecimal +=
      tabelaHexadecimal[quociente] + tabelaHexadecimal[resto];
  });

  return codigoHexadecimal;
};

console.log(rgb(255, 255, 255));
// #FFFFFF

console.log(rgb(9, 108, 184));
// #096CB8

console.log(rgb(0, 219, 147));
// #00DB93
