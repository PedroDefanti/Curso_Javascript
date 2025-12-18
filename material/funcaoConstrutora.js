// função construtora:funçaõ que tem um molde e que usa o new 
// o new cria um objeto vazio,faz  o this apontar para o objeto vazio
// com this publico, sem o this privado
function Pessoa(nome,sobrenome){
    this.nome=nome
    this.sobrenome=sobrenome

    this.metodo=function(){
        console.log(this.nome+' :sou um método')
    }
}

const p1=new Pessoa('Luiz', "Otávio")
const p2=new Pessoa('Luiz', "Otávio")

console.log(p1.nome)
p2.metodo()