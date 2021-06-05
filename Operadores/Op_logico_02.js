const trabalho1 = true;
const trabalho2 = true;

let comprarTv50 = trabalho1 && trabalho2;//AND
console.log('Vamos comprar a TV 50"?', comprarTv50);

let comprarTv32 = trabalho1 !== trabalho2;//XOR
console.log('Vamos comprar a TV 32"?', comprarTv32);

let tomarSorvete = trabalho1 || trabalho2;//OU
console.log('Vamos comprar sorvete"?', tomarSorvete);

let ficarEmCasa = !tomarSorvete;//NOT
console.log('Vamos ficar em casa"?', ficarEmCasa);