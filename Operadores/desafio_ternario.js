/* const a = valorA 
   const b = valorB
   const operador = +, -, *, /
   
   const resultado = operação ternaria*/

   const a = 8;
   const b = 4;

   const operador = '+';

   const resultado = operador == '+' ? a + b : operador == '-' ? a - b : operador == '*' ? a * b : a / b;

   console.log(resultado);
