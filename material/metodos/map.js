const numeros=[5,50,80,1,2,3,5,8,7,11,15,22,27]
const dobronum=numeros.map(valor=>valor*2
)

console.log(dobronum)

const pessoas=[
    {nome:'Luiz',idade:62},
    {nome:'Maria',idade:32},
    {nome:'Eduardo',idade:55},
    {nome:'Letícia',idade:29},
    {nome:'Rosana',idade:32},
    {nome:'Wallace',idade:47},
    {nome:'Pedro',idade:19}
]

nome=pessoas.map(obj=>obj.nome.slice(0,1))

console.log(nome)

const comIDs=pessoas.map(function(obj,indice){
    const newObj={...obj}
    newObj.id=indice
    return newObj
})

console.log(comIDs)
