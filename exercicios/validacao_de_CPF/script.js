// MINHA SOLUÇÃO

// let cpf='070.987.720-03'

// function TratarCPF(valor){
//     let novoValor=valor.replace(/\D/g,'')
//     const cpfNum=parseInt(novoValor)
//     return cpfNum
// }

// function GerarValor1(){
//     let novoValor=cpf.replace(/\D/g,'')
//     let fatiar=novoValor.slice(0,9)
//     resultado=0
//     multi=10
//     for(let i of fatiar){
//         let novoI=parseInt(i)
//          let conta=novoI*multi
//         multi--
//         resultado+=conta
//     }
//     return resultado
    
// }

// function verificarCPF1(){
//     const valor=GerarValor1()
//     let conta=11-(valor%11)
//     if(conta>9){
//         conta=0
//     }
//     return conta
    
// }


// function GerarValor2(){
//     let novoValor=cpf.replace(/\D/g,'')
//     let fatiar=novoValor.slice(0,10)
//     resultado=0
//     multi=11
//     for(let i of fatiar){
//         let novoI=parseInt(i)
//          let conta=novoI*multi
//         multi--
//         resultado+=conta
//     }
//     return resultado
// }

// function verificarCPF2(){
//     const valor=GerarValor2()
//     let conta=11-(valor%11)
//     if(conta>9){
//         conta=0
//     }
//     return conta
    
// }


// const a=verificarCPF1()
// const b=verificarCPF2()
// let novoValor=cpf.replace(/\D/g,'')
// let f=novoValor.slice(0,9)
// let z=`${f}${a}${b}`
// console.log(f)

// if(z===novoValor){
//     console.log('certo')
// }else{
//     console.log('algo deu errado')
// }

// SOLUÇÃO DO PROFESSOR
function ValidaCPF(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo',{
        get:function(){
            return cpfEnviado.replace(/\D+/g,'')
        }
    })
}
ValidaCPF.prototype.valida=function(){
    if(typeof this.cpfLimpo==='undefined') return false
    if(this.cpfLimpo.length!==11)return false
    if(this.isSequencia())return false

    const cpfParcial=this.cpfLimpo.slice(0,-2)
    const digito1= this.criaDigito(cpfParcial)
    const digito2= this.criaDigito(cpfParcial+digito1)
    
    const novoCpf=cpfParcial+digito1+digito2
    return novoCpf===this.cpfLimpo
}

ValidaCPF.prototype.criaDigito=function(cpfParcial){
    const cpfArray=Array.from(cpfParcial)
    let regressivo=cpfArray.length+1
    let total= cpfArray.reduce((ac,val)=>{
        ac+=(regressivo*Number(val))
        
        regressivo--
        return ac
    },0)
    const digito=11-(total%11)
    return String(digito)>9?0:String(digito)

}


ValidaCPF.prototype.isSequencia=function(){
    const sequencia=this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf=new ValidaCPF('111.111.111-11')
console.log(cpf.valida())