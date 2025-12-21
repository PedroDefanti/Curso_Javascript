function rand(min,max){
    min*=1000
    max*=1000
    return (Math.floor(Math.random()*(max-min)+min))
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg !=='string')reject('Bad')
        // simula algo que demora
        setTimeout(()=>{
            resolve(msg)
        },tempo)
    })
}
// caso eu  queria usar um then dentro de outro then eu 
// retorno a função que tem a promise
esperaAi('FRase 1',rand(1,3)).then(resposta=>{console.log(resposta)
return esperaAi(15,rand(1,3))
}).then(resposta=>{
    console.log(resposta)
}).catch(e=>{
    console.log('ERRO',e)
})
