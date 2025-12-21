function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    // executa a função produto dentro camiseta
    Produto.call(this, nome, preco)
    this.cor = cor
}
// herda os prototype de Produtos
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (
        this.preco * (percentual / 100))
}



function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    Object.defineProperty(this, 'estoque', {
        // tornando visivel
        enumerable: true,
        // não pode editar
        configurable: false,
        // retorna o valor
        get: function () {
            return estoque
        },
        // faz verificação number
        set: function (valor) {
            if (typeof valor !== 'number') return
            this.estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Caneca.prototype.desconto = function (percentual) {
    this.preco = this.preco - (
        this.preco * (percentual / 100))
}



const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 20, "Preta")
camiseta.aumento(100)
const caneca = new Caneca('Melhor Aluno', 15, "Aço", 5)
caneca.desconto(5)
console.log(produto)
console.log(camiseta)
console.log(caneca.estoque)