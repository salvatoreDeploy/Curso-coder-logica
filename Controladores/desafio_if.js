/* Criar constante que armazene a nota */
/* Exibir os conceitos de acordo com os if */
/* Criar os conceitos */
/* Criar conceito de nota invalida */
/* A -> nota 9 a 10 */
/* B -> nota 7 a 8,9 */
/* C -> nota 5 a 6,9 */
/* D -> nota 4,5 a 4,9  */
/* F -> nota abaixo de 4,5 */

const nota  = 8;

if(nota >= 9 && nota < 10){
    console.log("A");
}

if(nota >= 7 && nota < 8.9){
    console.log("B");
}

if(nota >= 5 && nota < 6.9){
    console.log("C");
}

if(nota > 4.5 && nota < 4.9){
    console.log("D");
}

if(nota > 0 && nota < 4.5){
    console.log("F");
}

if(nota < 0 || nota > 10){
    console.log("Nota Invalida!!");
}
