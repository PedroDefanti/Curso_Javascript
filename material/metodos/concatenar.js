const a1 =[1,2,3]
const a2 =[4]
//Jeito 1 de concatenar
// const a3=a1.concat(a2,'Luiz')

//Jeito 2 de concatenar
const a3=[...a1,'luiz',...a2]
console.log(a3)