class DispositivoEletronicos{
    constructor(nome){
        this.nome=nome
        this.ligado=false
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome+ ' já ligado')
            return
        }
        this.ligado=true
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome+ ' já desligado')
            return
        }
        this.ligado=false
    }
}
// extends é quem faz a herança
class Smartphone extends DispositivoEletronicos{
    constructor(nome,cor){
        // chamar o construtor da classe pai no caso 
        // DispositivoEletronicos
        super(nome)
        this.cor=cor
    }
}
// POSSO CRIAR QUANTOS EU QUISER
class Tablet extends DispositivoEletronicos{
    constructor(nome,cor){
        // chamar o construtor da classe pai no caso 
        // DispositivoEletronicos
        super(nome)
        this.cor=cor
    }
}