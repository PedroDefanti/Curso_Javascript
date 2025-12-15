//exercicio 1 
// EScreva uma função que receba 2 números e retorne o maior deles


// function RetornaMaior(n1,n2){
//     if(n1>n2){
//         return n1
//     }
//     else if(n2>n1){
//         return n2
//     }
//     else{
//         return 'Você passou algo que não é número ou números iguais'
//     }
// }


// let num1=7
// let num2='9'

// const verificar=RetornaMaior(num1,num2)
// console.log(verificar)

/**
exercicio 2
Escreva uma função chamada ePaisagem que recebe 2 argumentos,
largura e altura de uma imagem(number).Retorne true se a imagem estiver
no modo paisagem
 */

// const ePaisagem= (largura,altura)=>largura>altura 


// let a =ePaisagem(300,200)
// console.log(a)


/*
exercicio 3

Escreva uma função que receba um número e retorne o seguinte:

Número é divisível por 3=Buzz
Número é divisível por 5=Buzz
Número é divisível por 3 e 5=FizzBuzz
Número NÃO é divisível por 3=Retorne o próprio número
Chegar se o número é realmente um número,caso não seja=retorne oq foi
enviado
*/

const divisao=(num)=>{
    const verificar=Number.isInteger(num)

    if (verificar){
        if(num%3==0 && num%5==0) return 'FizzBuzz'
        
        if(num%3==0)return 'Fizz'
        
        if(num%5==0) return 'Buzz'
        
        return num
    
    }else{
        return`Passe um número ${num}`
    }
}


let i='aaaaa'
console.log(i,divisao(i))
