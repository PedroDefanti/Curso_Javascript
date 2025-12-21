function rand(min,max){
    min*=1000
    max*=1000
    return (Math.floor(Math.random()*(max-min)+min))
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg !=='string')reject('Bad')
        setTimeout(()=>{
            resolve(msg+'AAAAAA')
        },tempo)
    })
}

// esperaAi('FRase 1',rand(1,3)).then(resposta=>{console.log(resposta)
// return esperaAi(15,rand(1,3))
// }).then(resposta=>{
//     console.log(resposta)
// }).catch(e=>{
//     console.log('ERRO',e)
// })


const promi=[
    
    esperaAi('Promise1',3000),
    esperaAi('Promise2',500),
    esperaAi('Promise3',2500),
    
]
// pega todas as promise de  um array
// Promise.all(promi).then(function(resposta){
//     console.log(resposta)
// })

// retorna sempre o primeiro não precisa ser necessáriamnete
//uma promessa
// Promise.race(promi).then(function(resposta){
//     console.log(resposta)
// })


// retorna uma promisse certa
function baixaPagina(){
    const emCache=true
    if(emCache){
        return Promise.resolve('Página em cache')
    }else{
        return esperaAi('Baixei a página',3000)
    }
}


// retorna uma promisse com erro
baixaPagina().then(resposta=>{console.log(resposta)})
.catch(E=>console.log('ERRO',E))
function baixaPagina(){
    const emCache=true
    if(emCache){
        return Promise.reject('Página em cache')
    }else{
        return esperaAi('Baixei a página',3000)
    }
}

baixaPagina().then(resposta=>{console.log(resposta)})
.catch(E=>console.log('ERRO',E))


