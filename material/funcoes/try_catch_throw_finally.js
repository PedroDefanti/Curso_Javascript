// try{
//     console.log(naoExisto)
// }catch(err){
//     console.log('Não Existo não existe')
//     console.log(err)

// }


// COM THROW
// function soma(x,y){
//     if(typeof x !=='number' || 
//        typeof y !=='number'){
//         throw new ReferenceError('x e y precisam ser números')
//     }
//     return x + y
// }

// try{
// console.log(soma(1,2))
// console.log(soma('1',2))
// }catch(erro){
//     console.log(erro)
//     console.log('Alguma coisa + amigável pro usuário')
// }



// FINALLY
function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date')
    }
    if(!data){
        data=new Date()
    }
    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    })
}

try{
    const data=new Date('01-01-1970 12:58:12')
    const hora=retornaHora()
    console.log(hora)
}catch(e){
    // tratar erro
}finally{
    console.log('Tenha um bom dia')
}