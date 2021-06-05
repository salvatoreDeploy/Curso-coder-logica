const  hora = 14;

/* Operador ternario */
/* const saudacao = exp ? true : false; */

const saudacao = hora <= 12 ? "Bom Dia" : "Boa tarde";

console.log(saudacao);

/* Operador ternario usando mais de duas condições */

const hora2 = 22;

const saudacao2 = hora2 <= 12 ? "Bom Dia" : hora2 <= 17 ? "Boa Tarde" : "Boa Noite";

console.log(saudacao2);