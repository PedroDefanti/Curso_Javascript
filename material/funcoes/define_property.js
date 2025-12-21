function Produto(nome,preco,estoque){
    this.nome=nome
    this.preco=preco

    Object.defineProperty(this,'estoque',{
        enumerable:true,// mostra chave
        value:estoque,// valor
        writable:false,// pode alterar valor(caso true)
        configurable:true// pode editar(caso true)
    })
    Object.defineProperties(this,{
        nome:{
            enumerable:true,// mostra chave
            value:nome,// valor
            writable:false,// pode alterar valor(caso true)
            configurable:true// pode editar(caso true)
        }
    })
    Object.defineProperties(this,{
        preco:{
            enumerable:true,// mostra chave
            value:preco,// valor
            writable:false,// pode alterar valor(caso true)
            configurable:true// pode editar(caso true)
        }
    })
}

const p1=new Produto('camisa',20,3)
console.log(Object.values(p1))