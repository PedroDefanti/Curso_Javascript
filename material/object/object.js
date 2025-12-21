const Pessoa={nome:'Pedro',sobrenome:'Defanti',idade:20}

console.log(Pessoa)
console.log(Pessoa.nome)
console.log(Pessoa.sobrenome)
console.log(Pessoa.idade)

// Jeito de usar o objeto

function criarPessoa (nome,sobrenome,idade){


    return{
    nome:nome,
    sobrenome:sobrenome,
    idade:idade
    }
}

let Pessoa1=criarPessoa('Pedro','Cravo',45)

console.log(Pessoa1)
console.log(Pessoa1.nome)
console.log(Pessoa1.sobrenome)
console.log(Pessoa1.idade)