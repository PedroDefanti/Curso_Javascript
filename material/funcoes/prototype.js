/*
prototype é uma algo que é criada junto da função ou objeto,
onde vc pode criar coisas novas mesmo que a função original 
não tenha,tipo vc tem um terreno e a casa é a função,só que 
vc quer adicionar uma piscina a pisxina vc vai adicionar no 
terreno e não na casa,ou seja, o prototype é o terreno mas 
pode ser tbm a piscina que é adicionada
*/

// new Object -> Object.prototype
const objA={
    chaveA:'A',
    nome:'Pedro Lucas'

    // __proto__:Object.prototype
}

const objB={
    chaveB:'B'
    // __proto__:objA
}

Object.setPrototypeOf(objB,objA)
// console.log(objB.nome)

function Produto(nome,preco){
    this.nome=nome
    this.preco=preco
}


Produto.prototype.deconto=function(percentual){
    this.preco=this.preco-(this.preco*(percentual/100))
}

Produto.prototype.aumento=function(percentual){
    this.preco=this.preco+(this.preco*(percentual/100))
}

const p=new Produto('Blusa',150)

const p2={
    nome:'Caneca',
    preco:20
}
// Agora p2 tem os prototype de produto
Object.setPrototypeOf(p2,Produto.prototype)

p2.aumento(55)
console.log(p2)

// p.deconto(90)
// console.log(p)
// p.aumento(100)
// console.log(p)

// posso configurar tbm
const p3=Object.create(Produto.prototype,{
    preco:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:42
    },
    tamanho:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:42
    }
})
p3.preco=115
p3.aumento(10)
console.log(p3)




