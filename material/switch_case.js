const data=new Date('1987-04-21 00:00:00');

let diaSemana=data.getDay();
let diaSemanaTexto ;

/*
Geralmente para verificar o tipo de dia iria se usar varios ifs,elseif 
e else,mas agora tem uma nova maneira de verificação
*/ 

switch(diaSemana){// primeiro vc passa a variavel que deseja,dentro do switch 
case 0:
    diaSemanaTexto='Domingo';
    break;

case 1:
    diaSemanaTexto='Segunda';
    break;

case 2:
    diaSemanaTexto='Terça';
    break;

case 3:
    diaSemanaTexto='Quarta';
    break;

case 4:
    diaSemanaTexto='Quinta';
    break;

case 5:
    diaSemanaTexto='Sexta';
    break;

case 6:
    diaSemanaTexto='Sábado';
    break;

default:
    diaSemanaTexto='Dia nulo'
}

console.log(`O dia da semana é ${diaSemanaTexto}`)
