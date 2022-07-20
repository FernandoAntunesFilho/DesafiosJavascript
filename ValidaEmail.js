// Escreva uma função que recebe uma string
// como parâmetro. A função deve validar se a
// string recebida é um email válido.
// A validação seguindo o padrão oficial pode
// ser um pouco complexa. Para esse caso,
// vamos considerar o seguinte:

// [nome de usuário]@[domínio].[extenção]
// john@example.com

const isValidEmail = (email) => {
  const atPosition = email.indexOf("@");
  const lastDotPosition = email.lastIndexOf(".");
  const usuario = email.substring(0, atPosition);
  const dominio = email.substring(atPosition, lastDotPosition);
  const extencao = email.substring(lastDotPosition, email.length);

  if (
    validaUsuario(usuario) &&
    validaDominio(dominio) &&
    validaExtencao(extencao)
  ) {
    return true;
  }
  return false;
};

const validaUsuario = (usuario) => {
  if (usuario != "") return true;
  return false;
};

const validaDominio = (dominio) => {
  if (dominio[0] == "@" && dominio.length > 1) return true;
  return false;
};

const validaExtencao = (extencao) => {
  if (extencao[0] == "." && extencao.length == 4) return true;
  return false;
};

console.log(isValidEmail("john.doe@example.com"));
// true

console.log(isValidEmail("john@.example"));
// false

console.log(isValidEmail("doe@com"));
// false
