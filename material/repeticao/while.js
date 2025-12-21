// let i =0
// const nome='Pedro'
// while(i<nome.length){
//     console.log(nome[i])
//     i++
// }

function random(min,max){
    const r= Math.random()* (max-min)+min
    return Math.floor(r)
}

let rand=random(1,20)
console.log(rand)


// while
// while(rand!==10){
//     rand=random(1,50)
//     console.log(rand)
// }

// do while

do{
    rand=random(1,50)
    console.log(rand) 
}while(rand!==10)