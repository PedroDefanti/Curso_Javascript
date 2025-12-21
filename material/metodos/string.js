let umastring='Vendo Os indices Das Strings'
// ver indices
console.log(umastring[10])

//concatenar

console.log(umastring.concat(' até o momento'))
console.log(umastring+' até o momento')
console.log(`${umastring} até o momento`)

// // encontrar

console.log(umastring.indexOf('Os'))
console.log(umastring.indexOf('das',5))
console.log(umastring.lastIndexOf('das',20))

//expressoes Regulares

console.log(umastring.match(/[a-z]/m))

//encontrar vol2

console.log(umastring.search(/g/))

// troca-troca 😏

console.log(umastring.replace('Das','Zeca Urubu'))
console.log(umastring.replace(/i/g,'@'))

// tamanho 📏

console.log(umastring.length)

// fatiamento ✂️

console.log(umastring.slice(5,15))
console.log(umastring.slice(-5))
console.log(umastring.substring(umastring.length -5,umastring.length -1))

console.log(umastring.split('d',2))

// maiuscula e minuscula

console.log(umastring.toUpperCase())
console.log(umastring.toLowerCase())
