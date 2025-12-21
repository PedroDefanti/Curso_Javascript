function Conta(agencia,conta,saldo){
    this.agencia=agencia
    this.conta=conta
    this.saldo=saldo
}

Conta.prototype.sacar=function(valor){
    if(valor>this.saldo){
        console.log('Saldo ruim')
        return
    }
    this.saldo-=valor
    this.verSaldo()
}

Conta.prototype.depositar=function(valor){
    this.saldo+=valor
    this.verSaldo()
}
Conta.prototype.verSaldo=function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} |` +
        `Saldo: R$ ${this.saldo.toFixed(2)}`
    )
}


function CC(agencia,conta,saldo,limite){
    Conta.call(this,agencia,saldo,conta)
    this.limite=limite
}
// sobrescrevi o método sacar
CC.prototype.sacar=function(valor){
    if(valor>this.saldo+this.limite){
        console.log('Saldo ruim')
        return
    }
}

CC.prototype=Object.create(Conta.prototype)
CC.prototype.constructor=CC

const conta= new Conta(11,22,10)
const cc=new CC(11,10,6,100)
cc.depositar(19)
cc.sacar(39)
