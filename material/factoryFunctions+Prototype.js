const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}


const pessoaPrototype = { ...falar,...comer,...beber }

function CriaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

let p1=CriaPessoa('Maria','Souza')
p1.falar()