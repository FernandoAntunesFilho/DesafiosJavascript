// Escreva uma função que recebe 3 parâmetros.
// Sendo um horário (hora, minuto e segundo),
// sinal de operação (+ ou -) e um segundo
// horário (hora, minuto e segundo). Faça a
// operação de acordo com o sinal passado e
// retorne o resultado.

function timeMath(time1, op, time2) {
  const hora1 = parseInt(time1.split(":")[0]);
  const minuto1 = parseInt(time1.split(":")[1]);
  const segundo1 = parseInt(time1.split(":")[2]);
  const hora2 = parseInt(time2.split(":")[0]);
  const minuto2 = parseInt(time2.split(":")[1]);
  const segundo2 = parseInt(time2.split(":")[2]);
  const data1 = new Date();
  data1.setHours(hora1, minuto1, segundo1);

  if (op == "+") {
    data1.setHours(data1.getHours() + hora2);
    data1.setMinutes(data1.getMinutes() + minuto2);
    data1.setSeconds(data1.getSeconds() + segundo2);
  } else if (op == "-") {
    data1.setHours(data1.getHours() - hora2);
    data1.setMinutes(data1.getMinutes() - minuto2);
    data1.setSeconds(data1.getSeconds() - segundo2);
  }

  const hora3 = padWithZero(data1.getHours(), 2);
  const minuto3 = padWithZero(data1.getMinutes(), 2);
  const segundo3 = padWithZero(data1.getSeconds(), 2);

  return `${hora3}:${minuto3}:${segundo3}`;
}

function padWithZero(num, targetLength) {
  return String(num).padStart(targetLength, "0");
}

console.log(timeMath("01:24:31", "+", "02:16:05"));
// '03:40:36'

console.log(timeMath("01:24:31", "+", "22:35:28"));
// '23:59:59'

console.log(timeMath("00:00:01", "-", "00:00:02"));
// '23:59:59'
