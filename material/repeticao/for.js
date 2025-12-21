const frutas=['Maçã','Perâ','Uva','Banana','Melão','Morango']

const pessoa={
    nome:'Pedro',
    sobrenome:'Defanti',
    idade:19
}


// for 
// for(let i=0;i<frutas.length;i++){
//     console.log(frutas[i])
// }



// for in
// for(let i in pessoa){
//     console.log(i,pessoa[i])
// }


//for of
for(let valor of frutas){
    console.log(valor)
}

console.log('////////////////////////////////')
frutas.forEach(function(valor,indice){
    console.log(valor,indice)
})

const n=[10,20,30]
let total=0

n.forEach(valor=>{total+=valor})

console.log(total)

