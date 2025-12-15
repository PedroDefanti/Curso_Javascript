let bloco=document.querySelector('.container')

elementos=[
    {tag:'p',texto:'Frase 1'},
    {tag:'div',texto:'Frase 2'},
    {tag:'footer',texto:'Frase 3'},
    {tag:'section',texto:'Frase 4'}
]


for(let i =0; i< elementos.length;i++){
    let novo_elemento=document.createElement(elementos[i].tag)
    bloco.append(novo_elemento)
    novo_elemento.innerHTML+=`${elementos[i].texto} \n`
}