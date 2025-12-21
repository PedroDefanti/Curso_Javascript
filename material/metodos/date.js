const data=new Date();
//fala o dia/ mês/ ano/ hora/ minuto/ segundo

// const data=new Date(); se eu colocar um 0 no Date ele retorna a darta de 1969(MUITO FODA)
console.log(data.toString())

// eu posso selecionar uma data especifica
const data2=new Date(2019,3,20,15,14,32);

console.log(data2.toString())

// Eu posso pegar um valor específico

const data_novo=new Date()
console.log('Dia',data_novo.getDate())
console.log('Mês',data_novo.getMonth()+1)// mês começa do zero
console.log('Ano',data_novo.getFullYear())
console.log('Hora',data_novo.getHours())
console.log('Min',data_novo.getMinutes())
console.log('Seg',data_novo.getSeconds())
console.log('Ms',data_novo.getMilliseconds())
console.log('Dia da semana',data_novo.getDay())//0 - Domingo, 6 - Sábado
console.log(data_novo.toString())
console.log(Date.now()) //retorna do ponto 0(1969) até a data atual

function zeroAEsquerda(num){
    return num>=10 ? num:`0${num}`
}

function formataData(data){
    const dia=zeroAEsquerda((data.getDate()))
    const mes=zeroAEsquerda((data.getMonth())+1)
    const ano=zeroAEsquerda((data.getFullYear()))
    const hora=zeroAEsquerda((data.getHours()))
    const min=zeroAEsquerda((data.getMinutes()))
    const seg=zeroAEsquerda((data.getSeconds()))

    return `${dia}/${mes}/${ano} ${hora}: ${min}: ${seg}`

}


const data_a =new Date()
const dataBrasil = formataData(data_a)
console.log(dataBrasil)