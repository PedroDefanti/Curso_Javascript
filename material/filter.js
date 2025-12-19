// const numeros=[5,50,80,1,2,3,5,8,7,11,15,22,27]
 
// const numerosFilter=numeros.filter(valor=>valor>10)
// console.log(numerosFilter)

const pessoas=[
    {nome:'Luiz',idade:62},
    {nome:'Maria',idade:32},
    {nome:'Eduardo',idade:55},
    {nome:'Letícia',idade:29},
    {nome:'Rosana',idade:32},
    {nome:'Wallace',idade:47},
    {nome:'Pedro',idade:19}
]

const pessoasComNomeGrande=pessoas.filter(obj=>obj.nome.length>=5 && 
    obj.idade>40)
console.log(pessoasComNomeGrande)