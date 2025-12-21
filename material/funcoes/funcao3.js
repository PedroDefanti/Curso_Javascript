// SÃO0 CHAMADAS DE FUNCOES IMEDIATAS,POIS SÃO EXECUTADA NA HORA,ALEM 
// DISSO TBM SÃO + SEGURAS PQ NENHUMA VARIAVEL FICA NO ESCOPO GLOBAL

(function(idade,peso,altira){
    const sobrenome='Defanti'
    function criaNome(nome){
        return nome +' ' + sobrenome
    }
    function FalaNome(){
        console.log(criaNome('Pedro'))  
    }
    FalaNome()
    console.log(idade,peso,altira)
})(19,80,1.70)// Esses parenteses eu chamo a minha função