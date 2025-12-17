// FUNÇÕES QUE RETORNAM OBJETOS
function criaPessoa(nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome},  ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            valor=valor.split(' ')
            this.nome=valor.shift()
            this.sobrenome=valor.join(' ')
            console.log(valor)
        },
        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}`
        },
        altura,
        peso,
        // função virando um atributo com o get
        //GETTER
        get imc(){
            const indice=this.peso/(this.altura**2)
            return indice.toFixed(2)
        }
    }
}

const pessoa1=criaPessoa('Pedro','Defanti',1.8,80)
console.log(pessoa1.fala('estudar JS'))
console.log(pessoa1.imc)
pessoa1.nomeCompleto='ana julia'
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
