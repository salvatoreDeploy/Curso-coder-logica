/* Valor Literal */
console.log(19.90 * 0.6);

/* Usando variaveis */
let preco = 19.90;
let desconto  = 0.4;
console.log(preco * (1 - desconto));

/* Criando novas variaveis */
let precoComDesconto = preco * (1 - desconto);

console.log(precoComDesconto);

let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " 
    + categoria + ", Preço: " + preco);
