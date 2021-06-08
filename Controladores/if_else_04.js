const hora = 18;
let saudacao;

if(hora < 12){
    saudacao = 'Bom Dia';
}else if(hora <= 18){
    saudacao = 'Boa tarde';
}else if (hora < 23){
    saudacao = 'Boa Noite';
}else{
    saudacao = 'Muito tarde';
}

console.log(saudacao);