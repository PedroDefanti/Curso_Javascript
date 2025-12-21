// function Produto(nome,preco,estoque){
//     this.nome=nome
//     this.preco=preco

//     let estoque_pri=estoque
//     Object.defineProperty(this,'estoque',{
//         enumerable:true,// mostra chave
//         configurable:true,// pode editar(caso true)
//         get:()=>estoque_pri,
//         set:function(valor){
//             if(typeof valor!=='number'){
//                 console.log('brital')
//                 return
//             }
//             estoque_pri=valor
//         }
        
//     })

// }


function Produto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            nome=valor
        }
    }

}
const p1=new Produto('camisa',20,3)
console.log(p1)
p1.estoque='aaaaaaaaaaaaaaa'
console.log(p1.estoque)