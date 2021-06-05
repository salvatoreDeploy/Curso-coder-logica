#Fundamentos:

Blocos de Codigo:
    -> Um bloco de codigo interno deve abrir e fechar dentro de um par de chaves que significa um codigo externo;
    -> Organização: Pasta/Arquivos, Setençãs/Blocos para conseguir ter maior controle da aplicação

Dados #01:
    ->Valores, que podem ser informações assim sendo dados, soltos no codigo chamamos de literal;
    ->Conceito de variavel é armazenar e rotular uma informação ou dado;

Dados #02:
    ->Estrutura de uma variavel - " var ou let identificadores ", Ex: var idade = 3; esta é anatomia de uma definição de uma variavel;
    ->Escolher bons nomes de variaveis, arquivos, funções e pastas para um projeto;
    ->Existem precedencias em operações aritimetica;
    ->Numa string usamos "+" para concatenação;
    ->Uma string é uma sequencia de simbolos, ou seja o texto;

Dados #03:
    ->O javascript trata numeros mesmo sendo inteiros, com ponto flutuante como do typo number;
    ->Quando tratamos de verdadeiro ou falso(true ou false), este valor sempre sera do tipo boolean;
    ->Quando se trata de uma sequencia de caracteres ou seja um texto temos uma valor do tipo string;
    ->Diferente do javascrit existem linguagens que são mais tipadas;

Dados #04:
    ->Pode-se alterar o valor de uma varivel, onde se pode trocar o valor dela ou acrescentar um valor a ela
        usando a propria variavel + o valor Ex: "a = a + 10";
    ->Se durante a criação do codigo vericar que valores nao serao mudados atribua este valor a uma constante
        neste caso vemos que é melhor criar mais constantes do que variaveis;
    ->Usando no console.log, temos propriedades nativas da linguagem, podendo ser acesado pela propriedade
        "Match";

#Operadores:

->Binario, Unarios e Ternarios;

->Binario: Onde o operador opera em cima de valores Ex: 3 + 4;
->Unario: Onde o operador opera em cima de unico valor Ex: $a++;
->Ternario: Onde o operador trabalha em cima de tres valores Ex: $x ? $a : $b;

Tipos de Operadores:

1) Aritmeticos;
2) Relacionais;
3) Atibuição;
4) Lógicos;
5) Unarios;
6) Ternarios;

Aritimeticos:

-> + - * /
-> %, é o modulo ou assim sendo a sobra da visão
    Todo numero sendo modulo por 2 é par, ao contrario seria impar;

Relacionais:
    = -> Simbolo de atribuição;
    == -> Simbolo de igualdade;
    != -> Simbolo de diferença;
    === -> estritamente igual;
    !== -> estritamente diferente;
    >= -> Maior ou igual;
    <= -> Menor ou igual;
    Em toda espressão relacional, o resultado sera true ou false(verdadeiro ou falso);
    
Atribuição:
    let a = 3+2; -> Do lado direito temos uma expreção, que o resultado dela sera atribuido a variavel;
    a = 7; -> Dessa forma atribuimos um valor literal a variavel;
    -> Temos quase sempre o cenario onde temos do lado esquerdo a variavel e do lado direirto o valor sendo atribuido;
    -> Podemos usar em conjuto os simbolos aritimeticos com o sinal de atribuição, Ex: += tendo uma atribuição aditiva;
    -> No contexto onde atribuimos um valor a variavel, se passamos um novo valor ele é substituido na memoria, então o valor da avariavel e substituido Ex: a = 5; depois a = 10... No final o valor de a sera 10, mas podemos usar o valor de a para relizar uma nova operação Ex: a = 5; depois a = a + 10...dessa forma a valera 15;

Logicos:
    -> Ha estrutura se baseia entre receber verdadeiro(true) ou falso(false), tendo operação logica envolta dos operadores logicos:
     E(AND) -> Quando todos os operadores precisam ser verdadeiros para o resultado final ser verdadeiro;
     OU(OR) -> Este operador apenas necessita de uma parte da estrutura ser verdadeira para resposat ser verdadeira;

    ->Tabela logica para AND(E) = V AND V = V, F AND V = F, F AND F = F;
    ->Tabela logica para XOR(ou exclusivo) = V OR V = F, F XOR V = V, F XOR F = F;
        Uma particularidade onde o sinal !=  de diferente faz a mesma estrutura de xor;
    ->Tabela logica para OR(ou) = V OR V = V, V OR F = V, F OR F = F;

    -> O NOT é negação logica onde podemos negar ou mudar o estado de um resultado para testar uma tabela verdade;
    -> tabela da Negação Logica(NOT) NOT->F = V, NOT->V = F;


