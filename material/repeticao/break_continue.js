const num=[1,2,3,4,5,6,7,8,9]
// com for
for(let i=0;i<num.length;i++){
    let n=num[i]

    if(n===2){
        console.log('Pulei o número 2')
        continue
    }

    console.log(n)

    if(n===7){
        console.log('7 encontrado, saindo')
        break
    }
}


// com while
let i=0
while(i<num.length){
    let n=num[i]

    if(n===2){
        console.log('Pulei o número 2')
        i++
        continue
    }

    console.log(n)

    if(n===7){
        console.log('7 encontrado, saindo')
        break
    }
    i++
}

