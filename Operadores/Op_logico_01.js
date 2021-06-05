let temDinheiro = true;
let estaEnsolarado = false;
let carroNagaragem = false;

let resultadoAnd = "#1 - Vai pro shooping? ";
let resultadoOr = "#2 - Vai pro shooping? ";

resultadoAnd += temDinheiro && estaEnsolarado;
resultadoOr += estaEnsolarado || carroNagaragem;

console.log(resultadoOr);

/* Operador XOR (Ou exclusivo) */
console.log(true != true);
console.log(true != false);
console.log(false != true);
console.log(false != false);

/* Operador Unario */
console.log("Não verdadeiro :" + !true);
console.log("Não falso :" + !false);

