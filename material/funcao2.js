// EU POSSO CRIAR UMA FUNÇÃO DENTRO  DE OUTRA FUNÇÃO FAZENDO 
// COM QUE ELAS  RETORNE APENAS UMA,SENDO ASSIM FAZENDO COM QUE 
// A VARIAVEL VIRE UMA FUNÇAÕ PQ O RETORNO DA FUNÇÃO É UMA FUNÇÃO 
// ACHEI FODA

function FalaFrase(comeco){
    function FalaResto(resto){
        return comeco+ ' '+ resto
    }
    return FalaResto
}

const ola=FalaFrase('ola')
console.log(ola('oiiiiiiiiii'))

// OUTRO EXEMPLO
function criaMultiplicador(multi){
    return function(n){
        return n*multi
    }
}

const vezes2=criaMultiplicador(2)
const vezes3=criaMultiplicador(3)
const vezes4=criaMultiplicador(4)

console.log(vezes2(2))
console.log(vezes3(3))
console.log(vezes4(4))