let algo=['João','Lucas','Amanda','Carol']

// mostrar algum elemento
console.log(algo[0])

// alterar/Adicionar

algo[0]='Pedro'
algo[4]='Carla'

//Adicionar no final

algo[algo.length]='Bruna'
algo.push('Iza')

//Adicionar no inicio

algo.unshift('Kaillane')

// Removendo o ultimo elemento

algo.pop()


// Deixar o elemento vazio

delete algo[1]
console.log(algo)

//Fatiamento ✂️

console.log(algo.slice(0,4))
console.log(algo.slice(0,-2))

// Tipo e Instância

console.log(typeof algo)
console.log( algo instanceof Array)
