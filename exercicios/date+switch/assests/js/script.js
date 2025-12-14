let titulo=document.getElementById('titulo')

// let data=new Date()

// const dia=comZero(data.getDate())
// const mes=data.getMonth()
// const ano=comZero(data.getFullYear())
// const hora=comZero(data.getHours())
// const min=comZero(data.getMinutes())
// const seg=comZero(data.getSeconds())
// const dia_semana=data.getDay()
// let dia_semana_texto
// let mes_num


// function comZero(num){
//     return num>=10 ? num :`0${num}`
// }

// switch(dia_semana){
//     case 0:
//         dia_semana_texto='Domingo'
//         break
//     case 1:
//         dia_semana_texto='Segunda'
//         break
//     case 2:
//         dia_semana_texto='Terça'
//         break
//     case 3:
//         dia_semana_texto='Quarta'
//         break
//     case 4:
//         dia_semana_texto='Quinta'
//         break
//     case 5:
//         dia_semana_texto='Sexta'
//         break
//     case 6:
//         dia_semana_texto='Sábado'
//         break
// }
// switch(mes){
//     case 0:
//         mes_num='Janeiro'
//         break
//     case 1:
//         mes_num='Fevereiro'
//         break
//     case 2:
//         mes_num='Março'
//         break
//     case 3:
//         mes_num='Abril'
//         break
//     case 4:
//         mes_num='Maio'
//         break
//     case 5:
//         mes_num='Junho'
//         break
//     case 6:
//         mes_num='Julho'
//         break
//     case 7:
//         mes_num='Agosto'
//         break
//     case 8:
//         mes_num='Setembro'
//         break
//     case 9:
//         mes_num='Outubro'
//         break
//     case 10:
//         mes_num='Novembro'
//         break
//     case 11:
//         mes_num='Dezembro'
//         break

// }

//jeito 2

// const data=new Date()
// titulo.innerHTML=data.toLocaleDateString('pt-BR',{dateStyle: 'full',timeStyle: 'short'})


// Jeito3:Basicamente iria criar uma lista para cada switch

// titulo.innerText=`${dia_semana_texto} ${dia}/${mes_num}/${ano} ${hora}: ${min}:${seg}`