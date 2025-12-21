class ControleRemoto{
    constructor(tv){
        this.tv=tv
        this.volume=0
    }
    // Métodos de instância
    aumentarVolume(){
        this.volume+=2
    }

    // Métodos de instância
    diminuirVolume(){
        this.volume-=2
    }

    // Método estático
    static trocaPilha(){
        console.log("ok,vou trocar")
    }
}

console.log(ControleRemoto.trocaPilha())